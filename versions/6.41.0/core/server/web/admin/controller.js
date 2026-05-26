const debug = require('@tryghost/debug')('web:admin:controller');
const errors = require('@tryghost/errors');
const tpl = require('@tryghost/tpl');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const config = require('../../../shared/config');
const updateCheck = require('../../services/update-check');

module.exports = function adminController(req, res) {
    debug('index called');
    const templatePath = path.resolve(config.get('paths').adminAssets, 'index.html');
    const headers = {};

    try {
        updateCheck();
        let fileContent = fs.readFileSync(templatePath, 'utf8');

        const smtpScript = `
<script>
(function () {
    const style = document.createElement('style');
    style.innerHTML = \`
        html.custom-mail-config-active,
        body.custom-mail-config-active,
        body.custom-mail-config-active main,
        body.custom-mail-config-active .gh-app,
        body.custom-mail-config-active .gh-main,
        body.custom-mail-config-active .gh-flow,
        body.custom-mail-config-active .gh-flow-content,
        body.custom-mail-config-active .gh-signin,
        body.custom-mail-config-active .gh-setup,
        body.custom-mail-config-active .gh-canvas {
            overflow-y: auto !important; height: auto !important; max-height: none !important;
        }
        #smtp-custom-panel { 
            padding: 24px; box-sizing: border-box; width: 100%; max-width: 100%; 
            margin-top: 24px; margin-bottom: 24px; background: white; border-radius: 12px; 
            border: 1px solid #e5eff5; box-shadow: 0 1px 3px rgba(0,0,0,0.02); text-align: left;
            transition: all 0.3s ease;
        }
        .gh-select-custom {
            width: 100%; height: 40px; border: 1px solid #e5eff5; border-radius: 6px;
            padding: 0 12px; font-size: 1.3rem; background: white; margin-bottom: 14px; box-sizing: border-box;
            color: #15171a;
        }
        .toggle-container-row {
            display: flex; align-items: center; justify-content: space-between; gap: 15px;
            box-sizing: border-box; width: 100%;
        }
        .toggle-label-block { display: flex; flex-direction: column; text-align: left; flex: 1; }
        .toggle-title { font-size: 1.4rem; font-weight: 600; color: #15171a; margin: 0; }
        .toggle-desc { font-size: 1.2rem; color: #738a94; margin: 4px 0 0 0; font-weight: 400; line-height: 1.4; }
        
        .switch-input { position: relative; display: inline-block; width: 44px; height: 24px; flex-shrink: 0; }
        .switch-input input { opacity: 0; width: 0; height: 0; }
        .slider-round {
            position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0;
            background-color: #e5eff5; transition: .3s; border-radius: 34px; border: 1px solid #e5eff5;
        }
        .slider-round:before {
            position: absolute; content: ""; height: 18px; width: 18px; left: 2px; bottom: 2px;
            background-color: white; transition: .3s; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        input:checked + .slider-round { background-color: #30cf43; border-color: #30cf43; }
        input:checked + .slider-round:before { transform: translateX(20px); }
        
        #collapsible-mail-section input.gh-input { box-sizing: border-box !important; width: 100% !important; height: 40px !important; border-radius: 6px !important; }
    \`;
    document.head.appendChild(style);

    let cachedMailConfig = null;
    let isFetchingMailConfig = false;
    let isEditing = false;
    let isUnconfigured = false;
    let selectedProvider = null;

    function makeInputHtml(id, label, type = 'text', value = '', placeholder = '') {
        return \`
            <div class="flex flex-col">
                <label class="block text-sm font-medium tracking-normal text-grey-700 dark:text-grey-500" for="\${id}">\${label}</label>
                <div class="relative flex w-full items-center mt-1.5">
                    <input class="peer z-[1] h-9 w-full bg-transparent px-3 py-1.5 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 dark:text-white rounded-lg focus:outline-none" id="\${id}" type="\${type}" placeholder="\${placeholder}" value="\${value}">
                    <div class="absolute inset-0 rounded-lg border text-grey-300 transition-colors peer-hover:bg-grey-100 peer-focus:border-green-500 peer-focus:bg-white peer-focus:shadow-[0_0_0_2px_rgba(48,207,67,.25)] dark:peer-hover:bg-grey-925 dark:peer-focus:bg-grey-950 border-transparent bg-grey-150 dark:bg-grey-900"></div>
                </div>
            </div>
        \`;
    }

    function getDynamicFieldsHtml(provider, options = {}) {
        if (provider === 'SMTP') {
            return \`
                <div class="flex gap-4">
                    <div style="flex: 3;">
                        \${makeInputHtml('smtp-host-field', 'SMTP Host', 'text', options.host || 'smtp.gmail.com', 'smtp.gmail.com')}
                    </div>
                    <div style="flex: 1;">
                        \${makeInputHtml('smtp-port-field', 'SMTP Port', 'text', options.port || '465', '465')}
                    </div>
                </div>
                \${makeInputHtml('smtp-user-field', 'Auth User ID', 'text', options.auth?.user || '', 'example@gmail.com')}
                \${makeInputHtml('smtp-pass-field', 'Auth Password', 'password', options.auth?.pass || '', '••••••••••••')}
            \`;
        } else if (provider === 'Mailgun') {
            return \`
                \${makeInputHtml('mg-api-field', 'Mailgun API Key', 'password', options.apiKey || '', 'key-xxxxxxxxxxxxxxxxxxxxxxxx')}
                \${makeInputHtml('mg-domain-field', 'Domain Name', 'text', options.domain || '', 'mg.yourdomain.com')}
                <div class="flex flex-col">
                    <label class="block text-sm font-medium tracking-normal text-grey-700 dark:text-grey-500" for="mg-region-field">Region</label>
                    <div class="relative flex w-full items-center mt-1.5">
                        <select id="mg-region-field" class="peer z-[1] h-9 w-full bg-transparent px-3 py-1.5 text-sm dark:text-white rounded-lg focus:outline-none cursor-pointer">
                            <option value="US" \${options.region !== 'EU' ? 'selected' : ''}>United States (US)</option>
                            <option value="EU" \${options.region === 'EU' ? 'selected' : ''}>European Union (EU)</option>
                        </select>
                        <div class="absolute inset-0 rounded-lg border text-grey-300 transition-colors peer-hover:bg-grey-100 peer-focus:border-green-500 peer-focus:bg-white peer-focus:shadow-[0_0_0_2px_rgba(48,207,67,.25)] dark:peer-hover:bg-grey-925 dark:peer-focus:bg-grey-950 border-transparent bg-grey-150 dark:bg-grey-900"></div>
                    </div>
                </div>
            \`;
        } else if (provider === 'SES') {
            return \`
                \${makeInputHtml('aws-key-field', 'AWS Access Key ID', 'text', options.AWSAccessKeyID || '', 'AKIAIOSFODNN7EXAMPLE')}
                \${makeInputHtml('aws-secret-field', 'AWS Secret Access Key', 'password', options.AWSSecretKey || '', 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY')}
                \${makeInputHtml('aws-region-field', 'AWS Region', 'text', options.region || 'us-east-1', 'us-east-1')}
            \`;
        }
        return '';
    }

    async function runLifecycleEngine() {
        const hash = window.location.hash;
        const isSetupPage = hash.includes('/setup');
        const isSettingsPage = hash.includes('/settings');

        if (!isSetupPage && !isSettingsPage) {
            document.documentElement.classList.remove('custom-mail-config-active');
            document.body.classList.remove('custom-mail-config-active');
            document.body.style.overflowY = '';
            
            const legacyPanel = document.getElementById('smtp-custom-panel');
            if (legacyPanel) legacyPanel.remove();
            
            const customCard = document.getElementById('mail-config-section');
            if (customCard) customCard.remove();
            
            const customNav = document.getElementById('mail-config-nav');
            if (customNav) customNav.remove();
            
            const warningBanner = document.getElementById('smtp-warning-banner');
            if (warningBanner) warningBanner.remove();
            
            cachedMailConfig = null;
            return;
        }

        if (isSetupPage || isSettingsPage) {
            document.documentElement.classList.add('custom-mail-config-active');
            document.body.classList.add('custom-mail-config-active');
        }

        // --- SETUP PAGE HANDLER ---
        if (isSetupPage) {
            if (document.getElementById('smtp-custom-panel')) return;
            const passwordInput = document.querySelector('input[type="password"]');
            const targetAnchor = passwordInput ? (passwordInput.closest('.form-group') || passwordInput.parentElement) : null;
            if (!targetAnchor) return;

            const smtpWrapper = document.createElement('div');
            smtpWrapper.id = 'smtp-custom-panel';
            smtpWrapper.innerHTML = \`
                <div class="toggle-container-row">
                    <div class="toggle-label-block">
                        <h3 class="toggle-title">Configure outbound mail for member sign-in</h3>
                        <p class="toggle-desc">Enable transactional emails for secure member sign-in and account magic links.</p>
                    </div>
                    <label class="switch-input">
                        <input type="checkbox" id="email-toggle-checkbox" checked>
                        <span class="slider-round"></span>
                    </label>
                </div>

                <div id="collapsible-mail-section" style="margin-top: 24px; text-align: left; box-sizing: border-box; width:100%;">
                    <h4 style="font-size:1.3rem; margin-bottom:14px; font-weight:600; color:#15171a;">Email Provider Configuration</h4>
                    
                    <div class="form-group">
                        <label style="font-weight:700; font-size:1.1rem; color:#15171a; display:block; margin-bottom:6px;">Select Provider</label>
                        <select id="email-provider-select" class="gh-select-custom">
                            <option value="SMTP">SMTP (Gmail, Brevo, Custom Server)</option>
                            <option value="Mailgun">Mailgun (API Transport Mode)</option>
                            <option value="SES">Amazon SES</option>
                        </select>
                    </div>

                    <div id="dynamic-provider-fields" style="box-sizing:border-box; width:100%;"></div>
                </div>
            \`;
            targetAnchor.after(smtpWrapper);

            const toggleCheckbox = document.getElementById('email-toggle-checkbox');
            const collapsibleSection = document.getElementById('collapsible-mail-section');
            const fieldsContainer = document.getElementById('dynamic-provider-fields');
            const providerSelect = document.getElementById('email-provider-select');

            async function saveCurrentSetupFields() {
                if (!toggleCheckbox.checked) {
                    try {
                        await fetch('/ghost/v6-setup-smtp-direct-write', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ provider: 'RESET_DIRECT' })
                        });
                    } catch (err) {
                        console.error("Error setting Direct transport:", err);
                    }
                    return;
                }
                
                const currentProvider = providerSelect.value;
                let payload = { provider: currentProvider };

                if (currentProvider === 'SMTP') {
                    const hostEl = document.getElementById('smtp-host-field');
                    const portEl = document.getElementById('smtp-port-field');
                    const userEl = document.getElementById('smtp-user-field');
                    const passEl = document.getElementById('smtp-pass-field');
                    if (!hostEl || !portEl || !userEl || !passEl) return;
                    payload.host = hostEl.value;
                    payload.port = portEl.value;
                    payload.user = userEl.value;
                    payload.pass = passEl.value;
                } else if (currentProvider === 'Mailgun') {
                    const apiEl = document.getElementById('mg-api-field');
                    const domainEl = document.getElementById('mg-domain-field');
                    const regionEl = document.getElementById('mg-region-field');
                    if (!apiEl || !domainEl || !regionEl) return;
                    payload.apiKey = apiEl.value;
                    payload.domain = domainEl.value;
                    payload.region = regionEl.value;
                } else if (currentProvider === 'SES') {
                    const keyEl = document.getElementById('aws-key-field');
                    const secretEl = document.getElementById('aws-secret-field');
                    const regionEl = document.getElementById('aws-region-field');
                    if (!keyEl || !secretEl || !regionEl) return;
                    payload.awsAccessKey = keyEl.value;
                    payload.awsSecretKey = secretEl.value;
                    payload.awsRegion = regionEl.value;
                }

                try {
                    await fetch('/ghost/v6-setup-smtp-direct-write', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                } catch (err) {
                    console.error("Mail sync error:", err);
                }
            }

            function validateSetupFields() {
                if (!toggleCheckbox.checked) return { valid: true };

                const currentProvider = providerSelect.value;
                if (currentProvider === 'SMTP') {
                    const host = document.getElementById('smtp-host-field')?.value.trim();
                    const port = document.getElementById('smtp-port-field')?.value.trim();
                    const user = document.getElementById('smtp-user-field')?.value.trim();
                    const pass = document.getElementById('smtp-pass-field')?.value.trim();
                    if (!host || !port || !user || !pass) {
                        return { valid: false, message: "Please fill in all SMTP configuration details (Host, Port, User, and Password) or disable the email toggle to continue." };
                    }
                } else if (currentProvider === 'Mailgun') {
                    const apiKey = document.getElementById('mg-api-field')?.value.trim();
                    const domain = document.getElementById('mg-domain-field')?.value.trim();
                    if (!apiKey || !domain) {
                        return { valid: false, message: "Please fill in all Mailgun configuration details (API Key and Domain) or disable the email toggle to continue." };
                    }
                } else if (currentProvider === 'SES') {
                    const awsKey = document.getElementById('aws-key-field')?.value.trim();
                    const awsSecret = document.getElementById('aws-secret-field')?.value.trim();
                    const awsRegion = document.getElementById('aws-region-field')?.value.trim();
                    if (!awsKey || !awsSecret || !awsRegion) {
                        return { valid: false, message: "Please fill in all Amazon SES configuration details (Access Key, Secret Key, and Region) or disable the email toggle to continue." };
                    }
                }
                return { valid: true };
            }

            function highlightEmptyInputs() {
                const inputs = fieldsContainer.querySelectorAll('input');
                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        input.style.border = '2px solid #f50b0b';
                        input.style.backgroundColor = '#fffbfb';
                    } else {
                        input.style.border = '';
                        input.style.backgroundColor = '';
                    }
                });
            }

            toggleCheckbox.addEventListener('change', (e) => {
                collapsibleSection.style.display = e.target.checked ? 'block' : 'none';
                saveCurrentSetupFields();
            });

            function renderSetupFields(provider) {
                if (provider === 'SMTP') {
                    fieldsContainer.innerHTML = \`
                        <div style="display:flex; gap:12px; margin-bottom:14px; width:100%; box-sizing:border-box;">
                            <div class="form-group" style="flex:3; margin:0; min-width:0;">
                                <label style="font-weight:700; font-size:1.1rem; display:block; margin-bottom:6px;">Host</label>
                                <input type="text" id="smtp-host-field" placeholder="smtp.gmail.com" class="gh-input">
                            </div>
                            <div class="form-group" style="flex:1; margin:0; min-width:0;">
                                <label style="font-weight:700; font-size:1.1rem; display:block; margin-bottom:6px;">Port</label>
                                <input type="text" id="smtp-port-field" placeholder="465" class="gh-input">
                            </div>
                        </div>
                        <div class="form-group" style="margin-bottom:14px;">
                            <label style="font-weight:700; font-size:1.1rem; display:block; margin-bottom:6px;">Auth User ID</label>
                            <input type="text" id="smtp-user-field" placeholder="example@gmail.com" class="gh-input">
                        </div>
                        <div class="form-group" style="margin-bottom:14px;">
                            <label style="font-weight:700; font-size:1.1rem; display:block; margin-bottom:6px;">Auth Password</label>
                            <input type="password" id="smtp-pass-field" placeholder="Enter app password" class="gh-input">
                        </div>
                    \`;
                } else if (provider === 'Mailgun') {
                    fieldsContainer.innerHTML = \`
                        <div class="form-group" style="margin-bottom:14px;">
                            <label style="font-weight:700; font-size:1.1rem; display:block; margin-bottom:6px;">Mailgun API Key</label>
                            <input type="password" id="mg-api-field" placeholder="key-xxxxxxxxxxxxxxxxxxxxxxxx" class="gh-input">
                        </div>
                        <div class="form-group" style="margin-bottom:14px;">
                            <label style="font-weight:700; font-size:1.1rem; display:block; margin-bottom:6px;">Domain Name</label>
                            <input type="text" id="mg-domain-field" placeholder="mg.yourdomain.com" class="gh-input">
                        </div>
                        <div class="form-group" style="margin-bottom:14px;">
                            <label style="font-weight:700; font-size:1.1rem; display:block; margin-bottom:6px;">Region</label>
                            <select id="mg-region-field" class="gh-select-custom">
                                <option value="US" selected>United States (US)</option>
                                <option value="EU">European Union (EU)</option>
                            </select>
                        </div>
                    \`;
                } else if (provider === 'SES') {
                    fieldsContainer.innerHTML = \`
                        <div class="form-group" style="margin-bottom:14px;">
                            <label style="font-weight:700; font-size:1.1rem; display:block; margin-bottom:6px;">AWS Access Key ID</label>
                            <input type="text" id="aws-key-field" placeholder="AKIAIOSFODNN7EXAMPLE" class="gh-input">
                        </div>
                        <div class="form-group" style="margin-bottom:14px;">
                            <label style="font-weight:700; font-size:1.1rem; display:block; margin-bottom:6px;">AWS Secret Access Key</label>
                            <input type="password" id="aws-secret-field" placeholder="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY" class="gh-input">
                        </div>
                        <div class="form-group" style="margin-bottom:14px;">
                            <label style="font-weight:700; font-size:1.1rem; display:block; margin-bottom:6px;">AWS Region</label>
                            <input type="text" id="aws-region-field" value="us-east-1" class="gh-input">
                        </div>
                    \`;
                }

                const inputs = fieldsContainer.querySelectorAll('input, select');
                inputs.forEach(input => {
                    input.addEventListener('input', saveCurrentSetupFields);
                    input.addEventListener('change', saveCurrentSetupFields);
                    input.addEventListener('blur', saveCurrentSetupFields);
                });

                saveCurrentSetupFields();
            }

            renderSetupFields('SMTP');
            providerSelect.addEventListener('change', (e) => {
                renderSetupFields(e.target.value);
            });

            const submitBtn = document.querySelector('button[type="submit"]') || document.querySelector('.gh-btn-blue') || document.querySelector('button');
            if (submitBtn) {
                submitBtn.addEventListener('click', async (e) => {
                    if (!toggleCheckbox.checked) {
                        try {
                            await fetch('/ghost/v6-setup-smtp-direct-write', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ provider: 'RESET_DIRECT' })
                            });
                        } catch (err) {
                            console.error("Mail sync error:", err);
                        }
                        return;
                    }
                    
                    const validation = validateSetupFields();
                    if (!validation.valid) {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        highlightEmptyInputs();
                        alert(validation.message);
                        return;
                    }
                    
                    await saveCurrentSetupFields();
                }, true);
            }
            return;
        }

        // --- SETTINGS PAGE HANDLER ---
        if (isSettingsPage) {
            if (!cachedMailConfig && !isFetchingMailConfig) {
                isFetchingMailConfig = true;
                try {
                    const res = await fetch('/ghost/v6-setup-smtp-direct-read');
                    const data = await res.json();
                    cachedMailConfig = data;
                    
                    isUnconfigured = !data.success || !data.mail || data.mail.transport === 'Direct';
                    if (isUnconfigured) {
                        isEditing = true;
                    }
                    
                    isFetchingMailConfig = false;
                    injectSettingsUI();
                } catch (e) {
                    console.error("Error loading mail config:", e);
                    isFetchingMailConfig = false;
                }
            } else if (cachedMailConfig) {
                injectSettingsUI();
            }
        }
    }

    function injectSettingsUI() {
        const membershipList = document.querySelector('a#memberemails')?.closest('ul') || document.querySelector('a#members')?.closest('ul');
        if (membershipList && !document.getElementById('mail-config-nav')) {
            const mailConfigLi = document.createElement('li');
            mailConfigLi.setAttribute('data-setting-nav-item', 'true');
            mailConfigLi.id = 'mail-config-nav';
            mailConfigLi.innerHTML = \`
                <a class="mt-px flex h-[36px] w-100 cursor-pointer items-center rounded-md px-3 py-2 text-left text-[14px] font-medium transition-all hover:bg-grey-200 focus:bg-grey-100 dark:text-grey-600 dark:hover:bg-grey-950 dark:focus:bg-grey-925 text-grey-800" id="mail-config-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="pointer-events-none mr-[7px] size-[16px]">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Mail config
                </a>
            \`;
            membershipList.appendChild(mailConfigLi);

            mailConfigLi.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSec = document.getElementById('mail-config-section');
                if (targetSec) {
                    targetSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        }

        const settingsView = document.querySelector('div.mb-\\\\[60vh\\\\]') || document.querySelector('.mb-\\\\[60vh\\\\]');
        if (isUnconfigured && settingsView) {
            if (!document.getElementById('smtp-warning-banner')) {
                const banner = document.createElement('div');
                banner.id = 'smtp-warning-banner';
                banner.className = 'mb-8 p-5 rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20 text-red-800 dark:text-red-200 flex gap-4 items-start shadow-sm';
                banner.style.boxShadow = '0 4px 12px rgba(245, 11, 11, 0.05)';
                banner.style.boxSizing = 'border-box';
                banner.innerHTML = \`
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" style="width: 24px; height: 24px; flex-shrink: 0;">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <div style="display: flex; flex-direction: column; gap: 4px; text-align: left;">
                        <h4 style="margin: 0; font-weight: 700; font-size: 1.4rem; color: #c41d1d;">Email Setup Incomplete</h4>
                        <p style="margin: 0; font-size: 1.25rem; color: #d32f2f; line-height: 1.5; font-weight: 500;">
                            Outbound transactional email infrastructure is currently unconfigured. Member sign-in links will fail until valid mail delivery keys are saved below.
                        </p>
                    </div>
                \`;
                settingsView.insertBefore(banner, settingsView.firstChild);
            }
        } else {
            const warningBanner = document.getElementById('smtp-warning-banner');
            if (warningBanner) warningBanner.remove();
        }

        const membershipContainer = document.querySelector('[data-testid="access"]')?.parentElement;
        if (membershipContainer && !document.getElementById('mail-config-section')) {
            const card = document.createElement('div');
            card.id = 'mail-config-section';
            
            const spamFiltersCard = document.querySelector('[data-testid="spam-filters"]');
            if (spamFiltersCard && spamFiltersCard.nextSibling) {
                membershipContainer.insertBefore(card, spamFiltersCard.nextSibling);
            } else {
                membershipContainer.appendChild(card);
            }
            
            renderMailConfigCard();
        }
    }

    function renderMailConfigCard() {
        const card = document.getElementById('mail-config-section');
        if (!card) return;

        let borderClass = 'border-grey-250 dark:border-grey-925';
        let cardStyle = '';
        if (isUnconfigured) {
            borderClass = '';
        }

        card.className = \`relative flex-col gap-6 rounded-xl transition-all hover:border-grey-200 border p-5 hover:shadow-sm md:p-7 flex bg-white dark:bg-grey-950 \substituteBorderClass\`;
        // Quick replacement of sub-token to avoid interpolation error inside target replacement Content
        card.className = card.className.replace('substituteBorderClass', borderClass);

        if (cardStyle) {
            card.style.cssText = cardStyle;
        } else {
            card.style.cssText = '';
        }

        let buttonHtml = '';
        if (!isUnconfigured) {
            buttonHtml = \`
                <button id="mail-config-edit-btn" class="cursor-pointer text-grey-900 dark:text-white dark:hover:bg-grey-900 hover:bg-grey-200 hover:text-black inline-flex items-center justify-center rounded text-sm whitespace-nowrap transition font-semibold h-7 px-3" type="button">
                    <span>\${isEditing ? 'Close' : 'Edit'}</span>
                </button>
            \`;
        }

        const mail = cachedMailConfig?.mail || {};
        const transport = mail.transport || 'Direct';

        let bodyHtml = '';
        if (isEditing) {
            const currentProvider = selectedProvider || (transport === 'Direct' ? 'SMTP' : transport);
            const options = mail.options || {};

            bodyHtml = \`
                <div class="flex flex-col gap-6 w-full text-left" style="text-align: left; width: 100%;">
                    <div>
                        <label class="block text-sm font-medium tracking-normal text-grey-700 dark:text-grey-500" for="mail-provider-select">Select Provider</label>
                        <div class="relative flex w-full items-center mt-1.5">
                            <select id="mail-provider-select" class="peer z-[1] h-9 w-full bg-transparent px-3 py-1.5 text-sm dark:text-white rounded-lg focus:outline-none cursor-pointer">
                                <option value="SMTP" \${currentProvider === 'SMTP' ? 'selected' : ''}>SMTP (Gmail, Brevo, Custom Server)</option>
                                <option value="Mailgun" \${currentProvider === 'Mailgun' ? 'selected' : ''}>Mailgun (API Transport Mode)</option>
                                <option value="SES" \${currentProvider === 'SES' ? 'selected' : ''}>Amazon SES</option>
                            </select>
                            <div class="absolute inset-0 rounded-lg border text-grey-300 transition-colors peer-hover:bg-grey-100 peer-focus:border-green-500 peer-focus:bg-white peer-focus:shadow-[0_0_0_2px_rgba(48,207,67,.25)] dark:peer-hover:bg-grey-925 dark:peer-focus:bg-grey-950 border-transparent bg-grey-150 dark:bg-grey-900"></div>
                        </div>
                    </div>
                    
                    <div id="mail-dynamic-fields" class="flex flex-col gap-5">
                        \${getDynamicFieldsHtml(currentProvider, options)}
                    </div>
                    
                    <div class="flex gap-3 mt-4">
                        <button type="button" id="mail-save-btn" class="cursor-pointer bg-black dark:bg-white text-white dark:text-black hover:opacity-90 inline-flex items-center justify-center rounded-lg text-sm whitespace-nowrap transition font-semibold h-9 px-4">
                            Update Configuration
                        </button>
                        <button type="button" id="mail-reset-btn" class="cursor-pointer bg-grey-100 dark:bg-grey-900 text-red-500 dark:text-red-400 hover:bg-grey-200 dark:hover:bg-grey-850 inline-flex items-center justify-center rounded-lg text-sm whitespace-nowrap transition font-semibold h-9 px-4">
                            Remove & Reset to Default
                        </button>
                    </div>
                </div>
            \`;
        } else {
            bodyHtml = \`
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-2 text-left" style="text-align: left;">
                    <div class="flex flex-col">
                        <h6 class="block text-sm font-medium tracking-normal text-grey-700 dark:text-grey-600">Active Provider</h6>
                        <div class="flex items-center mt-1 text-md font-semibold text-black dark:text-white">\${transport}</div>
                    </div>
                    <div class="flex flex-col">
                        <h6 class="block text-sm font-medium tracking-normal text-grey-700 dark:text-grey-600">Status</h6>
                        <div class="flex items-center mt-1 text-md font-semibold text-green-500">\${transport !== 'Direct' ? '✓ Configured' : '⚠ Using Direct Fallback'}</div>
                    </div>
                </div>
            \`;
        }

        card.innerHTML = \`
            <div class="absolute" id="mail-config"></div>
            <div class="flex items-start justify-between gap-4 text-left">
                <div style="text-align: left;">
                    <h5 class="md:text-lg font-semibold text-black dark:text-white">Email Configuration</h5>
                    <p class="mt-1 mr-5 text-pretty text-sm text-grey-700 dark:text-grey-600">
                        Configure outbound SMTP, Mailgun, or Amazon SES credentials to send sign-in links and transactional emails.
                    </p>
                </div>
                <div>
                    <div class="flex items-center justify-start rounded gap-2 mt-[-5px] -mr-1">
                        \${buttonHtml}
                    </div>
                </div>
            </div>
            <div class="w-full mt-2">
                \${bodyHtml}
            </div>
        \`;

        if (!isUnconfigured) {
            const editBtn = document.getElementById('mail-config-edit-btn');
            if (editBtn) {
                editBtn.addEventListener('click', () => {
                    isEditing = !isEditing;
                    selectedProvider = null;
                    renderMailConfigCard();
                });
            }
        }

        if (isEditing) {
            const providerSelect = document.getElementById('mail-provider-select');
            if (providerSelect) {
                providerSelect.addEventListener('change', (e) => {
                    selectedProvider = e.target.value;
                    const options = selectedProvider === transport ? (mail.options || {}) : {};
                    const fieldsContainer = document.getElementById('mail-dynamic-fields');
                    if (fieldsContainer) {
                        fieldsContainer.innerHTML = getDynamicFieldsHtml(selectedProvider, options);
                    }
                });
            }

            const saveBtn = document.getElementById('mail-save-btn');
            if (saveBtn) {
                saveBtn.addEventListener('click', function() {
                    sendMailConfiguration(this, false);
                });
            }

            const resetBtn = document.getElementById('mail-reset-btn');
            if (resetBtn) {
                resetBtn.addEventListener('click', function() {
                    if (confirm("Are you sure you want to completely clear out your custom mail credentials and reset back to Ghost's default fallback configuration?")) {
                        sendMailConfiguration(this, true);
                    }
                });
            }
        }
    }

    async function sendMailConfiguration(buttonElement, isReset = false) {
        let payload = {};
        if (isReset) {
            payload.provider = 'RESET_DIRECT';
        } else {
            const providerSelect = document.getElementById('mail-provider-select');
            const currentProvider = providerSelect ? providerSelect.value : 'SMTP';
            payload.provider = currentProvider;

            if (currentProvider === 'SMTP') {
                payload.host = document.getElementById('smtp-host-field').value;
                payload.port = document.getElementById('smtp-port-field').value;
                payload.user = document.getElementById('smtp-user-field').value;
                payload.pass = document.getElementById('smtp-pass-field').value;
            } else if (currentProvider === 'Mailgun') {
                payload.apiKey = document.getElementById('mg-api-field').value;
                payload.domain = document.getElementById('mg-domain-field').value;
                payload.region = document.getElementById('mg-region-field').value;
            } else if (currentProvider === 'SES') {
                payload.awsAccessKey = document.getElementById('aws-key-field').value;
                payload.awsSecretKey = document.getElementById('aws-secret-field').value;
                payload.awsRegion = document.getElementById('aws-region-field').value;
            }
        }

        try {
            if (buttonElement) {
                buttonElement.innerText = "Processing Write...";
                buttonElement.disabled = true;
            }
            const response = await fetch('/ghost/v6-setup-smtp-direct-write', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const result = await response.json();
            if (result.success) {
                if (buttonElement) {
                    buttonElement.innerText = isReset ? "✓ Reset Successfully" : "✓ Updated Successfully";
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
            } else {
                throw new Error(result.error || 'Failed to write config');
            }
        } catch (err) {
            console.error("Mail sync error:", err);
            if (buttonElement) {
                buttonElement.innerText = "Error Saving";
                buttonElement.disabled = false;
            }
        }
    }

    window.addEventListener('hashchange', runLifecycleEngine);
    setInterval(runLifecycleEngine, 1000);
    runLifecycleEngine();
})();
</script>
`;

        fileContent = fileContent.replace('</body>', `${smtpScript}</body>`);
        const hashSum = crypto.createHash('md5');
        hashSum.update(fileContent);
        headers.ETag = hashSum.digest('hex');

        if (config.get('adminFrameProtection')) {
            headers['X-Frame-Options'] = 'sameorigin';
        }

        res.set(headers);
        res.send(fileContent);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new errors.IncorrectUsageError({
                message: tpl(messages.templateError.message, { templatePath }),
                context: tpl(messages.templateError.context),
                help: tpl(messages.templateError.help, { link: 'https://ghost.org/docs/install/source/' }),
                err
            });
        }
        throw err;
    }
};