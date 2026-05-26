const debug = require('@tryghost/debug')('web:admin:app');
const path = require('path');
const express = require('../../../shared/express');
const serveStatic = express.static;
const config = require('../../../shared/config');
const urlUtils = require('../../../shared/url-utils');
const shared = require('../shared');
const errorHandler = require('@tryghost/mw-error-handler');
const sentry = require('../../../shared/sentry');
const redirectAdminUrls = require('./middleware/redirect-admin-urls');
const bridge = require('../../../bridge');

/**
 *
 * @returns {import('express').Application}
 */
module.exports = function setupAdminApp() {
    debug('Admin setup start');

    const adminApp = express('admin');
    const fs = require('fs');

    // Ember CLI's live-reload script
    if (config.get('env') === 'development') {
        adminApp.get('/ember-cli-live-reload.js', function emberLiveReload(req, res) {
            res.redirect(`http://localhost:4200${urlUtils.getSubdir()}/ghost/ember-cli-live-reload.js`);
        });
    }

    // Force SSL if required
    adminApp.use(shared.middleware.urlRedirects.adminSSLAndHostRedirect);

    // ─── 🚀 SAFE HOOK EXTENSION ROUTING ENGINE ───────────────────────────────
    // DYNAMIC ENVIRONMENT-AWARE PATH SELECTOR
    const getTargetConfigPath = () => {
        const currentEnv = config.get('env') || 'development';
        const ghostRootPath = path.join(config.get('paths:contentPath'), '..');
        return path.join(ghostRootPath, `config.${currentEnv}.json`);
    };

    // ROUTE 1: FETCH ACTIVE CONFIG TO PRE-FILL THE UI (GET Method)
    adminApp.get('/v6-setup-smtp-direct-read', (req, res) => {
        try {
            const configFilePath = getTargetConfigPath();

            if (fs.existsSync(configFilePath)) {
                const configData = JSON.parse(fs.readFileSync(configFilePath, 'utf8'));
                res.writeHead(200, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ success: true, mail: configData.mail || null }));
            }
            res.writeHead(404, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ success: false, error: 'Target config file missing' }));
        } catch (e) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ success: false, error: e.message }));
        }
    });

    // ROUTE 2: SAVE OR OVERWRITE EXPLICIT TARGET CONFIGS (POST Method)
    adminApp.post('/v6-setup-smtp-direct-write', (req, res) => {
        let bodyChunks = [];
        req.on('data', chunk => bodyChunks.push(chunk));
        req.on('end', () => {
            try {
                const configFilePath = getTargetConfigPath();

                const payload = JSON.parse(Buffer.concat(bodyChunks).toString());
                if (!fs.existsSync(configFilePath)) {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ success: false, error: 'Target config file missing' }));
                }

                let configData = JSON.parse(fs.readFileSync(configFilePath, 'utf8'));
                const provider = payload.provider;

                if (provider === 'SMTP') {
                    configData.mail = {
                        transport: "SMTP",
                        options: {
                            service: payload.host.includes('gmail.com') ? "Gmail" : undefined,
                            host: payload.host,
                            port: parseInt(payload.port) || 465,
                            secure: parseInt(payload.port) === 465,
                            auth: { user: payload.user, pass: payload.pass }
                        }
                    };
                } else if (provider === 'Mailgun') {
                    configData.mail = {
                        transport: "Mailgun",
                        options: { apiKey: payload.apiKey, domain: payload.domain }
                    };
                    if (payload.region === 'EU') configData.mail.options.region = 'EU';
                } else if (provider === 'SES') {
                    configData.mail = {
                        transport: "SES",
                        options: { AWSAccessKeyID: payload.awsAccessKey, AWSSecretKey: payload.awsSecretKey, region: payload.awsRegion }
                    };
                } else if (provider === 'RESET_DIRECT') {
                    configData.mail = { transport: "Direct" };
                }

                fs.writeFileSync(configFilePath, JSON.stringify(configData, null, 2), 'utf8');
                console.log(`✓ [${config.get('env') || 'development'}] configuration updated with native ${provider} mappings.`);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ success: true }));
            } catch (e) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ success: false, error: e.message }));
            }
        });
    });
    // ─── END SAFE HOOK EXTENSION ROUTING ENGINE ──────────────────────────────

    // Admin assets
    adminApp.use('/assets', serveStatic(
        path.join(config.get('paths').adminAssets, 'assets'), {
        maxAge: config.get('caching:admin:maxAge') * 1000,
        immutable: true,
        fallthrough: false
    }
    ));

    adminApp.use('/auth-frame', bridge.ensureAdminAuthAssetsMiddleware(), function authFrameMw(req, res, next) {
        try {
            if (req.headers.cookie?.includes('ghost-admin-api-session')) {
                next();
            } else {
                res.setHeader('Cache-Control', 'public, max-age=0');
                res.sendStatus(204);
            }
        } catch (err) {
            next(err);
        }
    }, serveStatic(
        path.join(config.getContentPath('public'), 'admin-auth')
    ));

    // Format slashes after serving static assets
    adminApp.use(shared.middleware.prettyUrls);
    adminApp.use(shared.middleware.cacheControl('private'));
    adminApp.use(redirectAdminUrls);

    // Render index template loader view
    adminApp.get('*', require('./controller'));

    adminApp.use(function fourOhFourMw(err, req, res, next) {
        if (err.statusCode && err.statusCode === 404) {
            next();
        } else {
            next(err);
        }
    });
    adminApp.use(errorHandler.pageNotFound);
    adminApp.use(errorHandler.handleHTMLResponse(sentry));

    debug('Admin setup end');

    return adminApp;
};