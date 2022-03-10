/* Genesys -- Core Engine */

// Create a default, global, namespace (if not present)
if (typeof GENESYS == "undefined" || !GENESYS) {var GENESYS = {};}

// use an anonymous function so that nothing is added to the global namespace
(function() {

    // set up the UEF ID lookup table
    UEFPatterns = [
        {"id": "uef-in-adrsIntl", "name": "Address (International)", "url" : "#"},
        {"id": "uef-in-addressintl", "name": "Address (International)", "url" : "#"},
        {"id": "uef-in-adrsUS", "name": "Address (US)", "url" : "#"},
        {"id": "uef-in-address", "name": "Address (US)", "url" : "#"},
        {"id": "uef-in-amt", "name": "Amount/Currency", "url" : "#"},
        {"id": "uef-in-amount", "name": "Amount", "url" : "#"},
        {"id": "uef-in-bnkInfo", "name": "Bank Information (US)", "url" : "#"},
        {"id": "uef-in-bank", "name": "Bank Information", "url" : "#"},
        {"id": "uef-in-chkBx", "name": "Check Box", "url" : "#"},
        {"id": "uef-in-checkbox", "name": "Check Box", "url" : "#"},
        {"id": "uef-in-chkLst", "name": "Check List", "url" : "#"},
        {"id": "uef-in-checklist", "name": "Check List", "url" : "#"},
        {"id": "uef-in-cmpd", "name": "Compound", "url" : "#"},
        {"id": "uef-in-compound", "name": "Compound", "url" : "#"},
        {"id": "uef-in-country", "name": "Country", "url" : "#"},
        {"id": "uef-in-cc", "name": "Credit Card", "url" : "#"},
        {"id": "uef-in-creditcard", "name": "Credit Card", "url" : "#"},
        {"id": "uef-in-dt", "name": "Date", "url" : "#"},
        {"id": "uef-in-date", "name": "Date", "url" : "#"},
        {"id": "uef-in-dtPkr", "name": "Date (Calendar)", "url" : "#"},
        {"id": "uef-in-datecal", "name": "Date (Calendar)", "url" : "#"},
        {"id": "uef-in-drpLst", "name": "Drop List", "url" : "#"},
        {"id": "uef-in-droplist", "name": "Drop List", "url" : "#"},
        {"id": "uef-in-ein", "name": "EIN", "url" : "#"},
        {"id": "uef-in-eml", "name": "Email Address", "url" : "#"},
        {"id": "uef-in-email", "name": "Email Address", "url" : "#"},
        {"id": "uef-in-file", "name": "File Upload", "url" : "#"},
        {"id": "uef-in-fileupload", "name": "File Upload", "url" : "#"},
        {"id": "uef-in-gndr", "name": "Gender", "url" : "#"},
        {"id": "uef-in-gender", "name": "Gender", "url" : "#"},
        {"id": "uef-in-nm", "name": "Name", "url" : "#"},
        {"id": "uef-in-name", "name": "Name", "url" : "#"},
        {"id": "uef-in-pwCr", "name": "Password (Create)", "url" : "#"},
        {"id": "uef-in-pw", "name": "Password (Enter)", "url" : "#"},
        {"id": "uef-in-password", "name": "Password", "url" : "#"},
        {"id": "uef-in-phnIntl", "name": "Phone (International)", "url" : "#"},
        {"id": "uef-in-phoneintl", "name": "Phone (International)", "url" : "#"},
        {"id": "uef-in-phnUS", "name": "Phone (US)", "url" : "#"},
        {"id": "uef-in-phone", "name": "Phone (US)", "url" : "#"},
        {"id": "uef-in-plcEvnt", "name": "Place (of Event)", "url" : "#"},
        {"id": "uef-in-placeevent", "name": "Place (of Event)", "url" : "#"},
        {"id": "uef-in-rdoLst", "name": "Radio List", "url" : "#"},
        {"id": "uef-in-radiolist", "name": "Radio List", "url" : "#"},
        {"id": "uef-in-ssn", "name": "SSN", "url" : "#"},
        {"id": "uef-in-st", "name": "State", "url" : "#"},
        {"id": "uef-in-state", "name": "State", "url" : "#"},
        {"id": "uef-in-txtAra", "name": "Text Area", "url" : "#"},
        {"id": "uef-in-textarea", "name": "Text Area", "url" : "#"},
        {"id": "uef-in-txtBx", "name": "Text Box", "url" : "#"},
        {"id": "uef-in-textbox", "name": "Text Box", "url" : "#"},
        {"id": "uef-in-time", "name": "Time", "url" : "#"},
        {"id": "uef-in-timezone", "name": "Time Zone", "url" : "#"},
        {"id": "uef-in-usrNmCr", "name": "Username (Create)", "url" : "#"},
        {"id": "uef-in-ysNo", "name": "Yes/No", "url" : "#"},
        {"id": "uef-in-yesno", "name": "Yes/No", "url" : "#"},
        {"id": "uef-in-zip", "name": "Zip Code", "url" : "#"},
        {"id": "uef-in-zipcode", "name": "Zip Code", "url" : "#"},
        {"id": "uef-co-bsc", "name": "Container", "url" : "#"},
        {"id": "uef-co-basic", "name": "Container", "url" : "#"},
        {"id": "uef-li-hlp", "name": "Help Link", "url" : "#"},
        {"id": "uef-li-shwHd", "name": "Show/Hide Content", "url" : "#"},
        {"id": "uef-li-vdTsr", "name": "Video Teaser", "url" : "#"},
        {"id": "uef-na-subNav", "name": "Sub-Navigation", "url" : "#"}
    ],

    GENESYS.Toolbar = {

        // Loads any Genesys settings from Local Session Storage
        loadSettings: function() {
            if (typeof(Storage) !== "undefined") {
                // Toolbar status
                if (sessionStorage.toolbar == "visible") {
                    // nothing yet
                }
                // Language
                var body = document.getElementsByTagName("BODY")[0];
                var btn = document.getElementById('gns-lang');
                if (sessionStorage.language == "English") {
                    document.getElementsByTagName('html')[0].setAttribute('lang','en');
                    btn.innerHTML = "English";
                }
                if (sessionStorage.language == "Russian") {
                    document.getElementsByTagName('html')[0].setAttribute('lang','ru');
                    btn.innerHTML = "Russian";
                }
                if (sessionStorage.language == "Spanish") {
                    document.getElementsByTagName('html')[0].setAttribute('lang','es');
                    btn.innerHTML = "Spanish";
                }
                // High/Low Fidelity
                if (sessionStorage.fidelity == "low") {
                    GENESYS.Toolbar.fidelity();
                }
                // Show/Hide Notes
                if (sessionStorage.notes == "visible") {
                    GENESYS.Toolbar.notes();
                }
                // Show/Hide Inspector
                if (sessionStorage.inspector == "visible") {
                    GENESYS.Toolbar.inspect();
                }
                // Show/Hide Grid
                if (sessionStorage.grid == "visible") {
                    GENESYS.Toolbar.grid();
                }
                // Show/Hide Redaction
                if (sessionStorage.redact == "on") {
                    GENESYS.Toolbar.redact();
                }
            }
        },

        // Sets Genesys settings from Local Session Storage
        saveSettings: function() {
            if (typeof(Storage) !== "undefined") {
                // Show/Hide Toolbar
                if (body.classList.contains('gns-toolbar-hide')) {
                    sessionStorage.setItem("toolbar", "hidden");
                } else {
                    sessionStorage.setItem("toolbar", "visible");
                }
                // Language
                var body = document.getElementsByTagName("BODY")[0];
                var lang = document.getElementsByTagName('html')[0].getAttribute('lang');
                switch(lang) {
                    case 'en':
                        sessionStorage.setItem("language", "English");
                        break;
                    case 'ru':
                    sessionStorage.setItem("language", "Russian");
                        break;
                    case 'es':
                        sessionStorage.setItem("language", "Spanish");
                        break;
                    default:
                        sessionStorage.setItem("language", "English");
                        break;
                }
                // High/Low Fidelity
                if (body.classList.contains('gns-lofi')) {
                    sessionStorage.setItem("fidelity", "low");
                } else {
                    sessionStorage.setItem("fidelity", "high");
                }
                // Show/Hide Notes
                if (body.classList.contains('gns-notes')) {
                    sessionStorage.setItem("notes", "visible");
                } else {
                    sessionStorage.setItem("notes", "hidden");
                }
                // Show/Hide Inspector
                if (body.classList.contains('gns-inspect')) {
                    sessionStorage.setItem("inspector", "visible");
                } else {
                    sessionStorage.setItem("inspector", "hidden");
                }
                // Show/Hide Grids
                if (body.classList.contains('gns-grid')) {
                    sessionStorage.setItem("grid", "visible");
                } else {
                    sessionStorage.setItem("grid", "hidden");
                }
                // Show/Hide Redaction
                if (body.classList.contains('gns-blur')) {
                    sessionStorage.setItem("redact", "on");
                } else {
                    sessionStorage.setItem("redact", "off");
                }
            }
        },

        init: function () {

            // check to see if we have access to the Internet
            // use navigator.onLine for simple test
            if (navigator.onLine) {
                var genesysURL = "#";
            } else {
                var genesysURL = "#";
            }

            // load Font Awesome
            var FontAwesomeScript = document.createElement('script');
            FontAwesomeScript.setAttribute('src','https://use.fontawesome.com/releases/v5.1.0/js/all.js');
            document.body.appendChild(FontAwesomeScript);

            // load Mavo
            // THIS DOES WORK, BUT THE URL REFERENCES NEED TO BE DYNAMICALLY ADJUSTED TO HTTPS OR LOCALHOST
            /*
            var head = document.getElementsByTagName('head')[0];
            var MavoCSS = document.createElement('link');
            MavoCSS.setAttribute('rel', 'stylesheet');
            MavoCSS.setAttribute('href', '../components/mavo/mavo.css');
            var MavoScript = document.createElement('script');
            MavoScript.setAttribute('src','../components/mavo/mavo.es5.min.js');
            head.appendChild(MavoCSS);
            head.appendChild(MavoScript);
            */

            // check if PolyPage is present
            var pageStatesToolbar = document.getElementById('pp_options');
            if (pageStatesToolbar) {
                var body = document.getElementsByTagName("BODY")[0];
                body.className += ' ' + 'gns-page-states';
            }

            //define our hidden toolbar indicator
            var toolbarIndicator = document.createElement('div');
            toolbarIndicator.id = 'gns-toolbar-indicator';
            toolbarIndicator.title = "Show Genesys Toolbar";
            toolbarIndicator.innerHTML = "<i class='fas fa-bars'></i>";
            toolbarIndicator.addEventListener("click", function() {
                GENESYS.Toolbar.toggle();
            });

            // define our toolbar
            var toolbar = document.createElement('div');
            toolbar.id = "gns-toolbar";
            toolbar.className = "mv-bar mv-fixed mv-ui";

            // Language
            // get current document language setting
            var htmlLang = document.getElementsByTagName('html')[0].getAttribute('lang');
            var curLanguage = 'English';
            switch(htmlLang) {
                case 'en':
                    curLanguage = 'English';
                    break;
                case 'ru':
                    curLanguage = 'Russian';
                    break;
                case 'es':
                    curLanguage = "Spanish";
                    break;
                default:
                    curLanguage = "English";
                    break;
            }

            // Language Toggle
            var el = document.querySelectorAll('[data-lang]');
            if (el.length > 0) {
                // TODO: Create array of languages in document and cycle button thru only those
                // How should we set the default language, if more than one?
                var btnLanguage = document.createElement('button');
                btnLanguage.innerHTML = curLanguage;
                btnLanguage.title = "Toggle Active Language";
                btnLanguage.id = "gns-lang";
                btnLanguage.addEventListener("click", function() {
                    GENESYS.Toolbar.language();
                    GENESYS.Toolbar.saveSettings();
                });
                toolbar.appendChild(btnLanguage);
            }

            // Fidelity (High/Low Fidelity)
            var btnFidelity = document.createElement('button');
            btnFidelity.id = "gns-fidelity";
            btnFidelity.title = "Toggle High/Low Fidelity Display";
            btnFidelity.innerHTML = "Hi-Fi";
            btnFidelity.addEventListener("click", function() {
                GENESYS.Toolbar.fidelity();
                GENESYS.Toolbar.saveSettings();
            });
            toolbar.appendChild(btnFidelity);

            // Walkthru
            // check to see if there are any walkthru items on the page (look for 'data-intro')
            var el = document.querySelectorAll('[data-intro]');
            if (el.length > 0) {
                var btnWalkthru = document.createElement('button');
                btnWalkthru.innerHTML = "<i class='fas fa-bullhorn'></i>";
                btnWalkthru.title = "Start the walk through of the prototype";
                btnWalkthru.id = "gns-walkthru";
                btnWalkthru.addEventListener("click", function() {
                    GENESYS.Toolbar.walkthru();
                });
                toolbar.appendChild(btnWalkthru);
                // now check if the BODY element has the auto-walkthru activated
                var body = document.getElementsByTagName("BODY")[0];
                if (body.classList.contains('gns-walkthru')) {
                    // start the Walkthru
                    GENESYS.Toolbar.walkthru();
                }
            }

            // Notes
            // check to see if there are any notes on the page (look for 'data-hint')
            var el = document.querySelectorAll('[data-hint]');
            var numNotes = el.length;
            if (numNotes > 0) {
                var btnNotes = document.createElement('button');
                btnNotes.innerHTML = "<i class='fas fa-sticky-note'></i>";
                btnNotes.title = "Notes (" + numNotes + ")";
                btnNotes.id = "gns-notes";
                btnNotes.addEventListener("click", function() {
                    GENESYS.Toolbar.notes(el);
                    GENESYS.Toolbar.saveSettings();
                });
                toolbar.appendChild(btnNotes);
            }

            // Specs
            var btnSpecs = document.createElement('button');
            btnSpecs.innerHTML = "<i class='fas fa-file-alt'></i>";
            btnSpecs.title = "Generate Specifications";
            btnSpecs.id = "gns-specs";
            btnSpecs.addEventListener("click", function() {
                GENESYS.Toolbar.specs();
            });
            toolbar.appendChild(btnSpecs);

            // Inspect
            // check to see if there are any supported design systems with associated inspectors
            // current support includes UEF
            var el = document.querySelectorAll('[class*=uef]');
            if (el.length > 0) {
                var btnInspect = document.createElement('button');
                btnInspect.innerHTML = "<i class='fas fa-eye'></i>";
                btnInspect.title = "Inspect Page Components";
                btnInspect.id = "gns-inspect";
                btnInspect.addEventListener("click", function() {
                    GENESYS.Toolbar.inspect();
                    GENESYS.Toolbar.saveSettings();
                });
                toolbar.appendChild(btnInspect);
            }

            // XRay
            var btnXRay = document.createElement('button');
            btnXRay.innerHTML = "<i class='fas fa-crosshairs'></i>";
            btnXRay.title = "View Objects & Properties";
            btnXRay.id = "gns-xray";
            btnXRay.addEventListener("click", function() {
                GENESYS.Toolbar.xray();
            });
            toolbar.appendChild(btnXRay);

            // Grid
            // check to see if there are any supported design systems with associated grid viewers
            // current support includes UEF
            var el = document.querySelectorAll('[class*=uef]');
            if (el.length > 0) {
                var btnGrid = document.createElement('button');
                btnGrid.innerHTML = "<i class='fas fa-th'></i>";
                btnGrid.title = "Layout Grids";
                btnGrid.id = "gns-grid";
                btnGrid.addEventListener("click", function() {
                    GENESYS.Toolbar.grid();
                    GENESYS.Toolbar.saveSettings();
                });
                toolbar.appendChild(btnGrid);
            }

            // Ruler
            var btnRuler = document.createElement('button');
            btnRuler.innerHTML = "<i class='fas fa-ruler-combined'></i>";
            btnRuler.title = "Ruler";
            btnRuler.id = "gns-ruler";
            btnRuler.addEventListener("click", function() {
                GENESYS.Toolbar.ruler();
            });
            toolbar.appendChild(btnRuler);

            // Edit
            var btnEdit = document.createElement('button');
            btnEdit.innerHTML = "<i class='fas fa-edit'></i>";
            btnEdit.title = "Edit Page";
            btnEdit.id = "gns-edit";
            btnEdit.addEventListener("click", function() {
                GENESYS.Toolbar.edit();
            });
            toolbar.appendChild(btnEdit);

            // Resize
            var btnResize = document.createElement('button');
            btnResize.innerHTML = "<i class='fas fa-expand-arrows-alt'></i>";
            btnResize.title = "Resize Browser Window";
            btnResize.id = "gns-resize";
            btnResize.addEventListener("click", function() {
                GENESYS.Toolbar.resize();
                GENESYS.Toolbar.toggle();
            });
            toolbar.appendChild(btnResize);

            // ANDI (Accessibility)
            var btnANDI = document.createElement('button');
            btnANDI.innerHTML = "<i class='fab fa-accessible-icon'></i>";
            btnANDI.title = "ANDI Accessibility Inspector";
            btnANDI.id = "gns-andi";
            btnANDI.addEventListener("click", function() {
                GENESYS.Toolbar.andi();
            });
            toolbar.appendChild(btnANDI);

            // Redact
            // check to see if there are any form elements on the page
            var el = document.querySelectorAll('input[type=text], input[type=radio], input[type=checkbox], textarea');
            if (el.length > 0) {
                var btnRedact = document.createElement('button');
                btnRedact.innerHTML = "<i class='fas fa-eraser'></i>";
                btnRedact.title = "Redact Fake/Realistic Data Input";
                btnRedact.id = "gns-redact";
                btnRedact.addEventListener("click", function() {
                    GENESYS.Toolbar.redact();
                    GENESYS.Toolbar.saveSettings();
                });
                toolbar.appendChild(btnRedact);
            }

            // Test
            var btnTest = document.createElement('button');
            btnTest.innerHTML = "<i class='fas fa-play-circle'></i>";
            btnTest.title = "Start Automated Prototype Test";
            btnTest.id = "gns-test";
            btnTest.addEventListener("click", function() {
                GENESYS.Toolbar.test();
            });
            toolbar.appendChild(btnTest);

            // Analytics
            // check to see if Google Analytics is running on the page
            var scripts = document.getElementsByTagName('script'),
                ga = true, // set to false if you don't want to check for ga.js
                ua = true, // set to false if you don't want to check for analytics.js
                dc = false, // set to false if you don't want to check for dc.js
                i = len = 0;
            if (ga || ua || dc) {
                for (i, len = scripts.length; i < len; i += 1) {
                    if ((ga && /www\.google-analytics\.com\/ga\.js/.test(scripts[i].src)) ||
                        (ua && /www\.google-analytics\.com\/analytics\.js/.test(scripts[i].src)) ||
                        (dc && /stats\.g\.doubleclick\.net\/dc\.js/.test(scripts[i].src)))
                    {
                        var btnAnalytics = document.createElement('button');
                        btnAnalytics.innerHTML = "<i class='fas fa-chart-pie'></i>";
                        btnAnalytics.title = "View Analytics Data";
                        btnAnalytics.id = "gns-analytics";
                        btnAnalytics.addEventListener("click", function() {
                            GENESYS.Toolbar.analytics();
                        });
                        toolbar.appendChild(btnAnalytics);
                    }
                }
            }

            // Import
            var btnImport = document.createElement('button');
            btnImport.innerHTML = "<i class='fas fa-file-import'></i>";
            btnImport.title = "Import Form Data";
            btnImport.className = "mv-import"
            toolbar.appendChild(btnImport);

            // Export
            var btnExport = document.createElement('button');
            btnExport.innerHTML = "<i class='fas fa-file-export'></i>";
            btnExport.title = "Export Form Data";
            btnExport.className = "mv-export"
            toolbar.appendChild(btnExport);

            // Clear
            var btnClear = document.createElement('button');
            btnClear.innerHTML = "<i class='fas fa-trash-alt'></i>";
            btnClear.title = "Clear Persistent Data";
            btnClear.className = "mv-clear"
            toolbar.appendChild(btnClear);

            // Hide Toolbar Button
            var btnHide = document.createElement('button');
            btnHide.innerHTML = "<i class='fas fa-window-close'></i>";
            btnHide.title = "Hide Genesys Toolbar";
            btnHide.id = "gns-hide";
            btnHide.addEventListener("click", function() {
                GENESYS.Toolbar.toggle();
            });
            toolbar.appendChild(btnHide);

            // Attach the Toolbar and Toolbar Indicator to the Page
            var body = document.getElementsByTagName("BODY")[0];
            body.appendChild(toolbarIndicator);
            body.appendChild(toolbar);

            // now hide the Toolbar by default
            var toolbar = document.getElementById('gns-toolbar');
            var content = document.body.children[0];
            var pageStates = document.getElementById("pp_options");
            content.style.marginTop = '-42px';
            toolbar.className += ' ' + 'gns-toolbar-hide';
            if (pageStates) {
                body.classList.remove('gns-page-states');
            }
            sessionStorage.setItem("toolbar", "hidden");

            // Place the Genesys footer at the bottom of the page
            var footer = document.createElement('div');
            footer.className = "gns-footer";
            var footerText = document.createElement('p');
            footerText.innerText = "Genesys Prototype";
            footer.appendChild(footerText);
            body.appendChild(footer);

            // Retrieve any Genesys Session Settings (for maintaining persistence of Genesys settings across pages)

        },

        toggle: function() {
            var body = document.getElementsByTagName("BODY")[0];
            var toolbar = document.getElementById('gns-toolbar');
            var content = document.body.children[0];
            var pageStates = document.getElementById("pp_options");
            if (toolbar.classList.contains('gns-toolbar-hide')) {
                // show the Toolbar and move the page content down to accommodate
                toolbar.classList.remove('gns-toolbar-hide');
                content.style.marginTop = '42px';
                if (pageStates) {
                    body.className += ' ' + 'gns-page-states';
                }
                sessionStorage.setItem("toolbar", "visible");
            } else {
                // hide the Toolbar and move the page content up to accommodate
                content.style.marginTop = '-42px';
                toolbar.className += ' ' + 'gns-toolbar-hide';
                if (pageStates) {
                    body.classList.remove('gns-page-states');
                }
                sessionStorage.setItem("toolbar", "hidden");
            }
            //GENESYS.Toolbar.saveSettings();
        },

        render: function () {
            // nothing yet
        },

        inject: function () {
            // nothing yet
        },

        updateDocument: function () {
            // update document with mv- attributes and property attributes
        },

        loadResources: function () {
            //load all assets

            // Mavo CSS and JS
            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = 'https://get.mavo.io/mavo.css';
            link.media = 'all';
            head.appendChild(link);

            /*
            var script = document.createElement('script');
            script.src = 'https://get.mavo.io/mavo.js';
            head.appendChild(script);
            */

            // Genesys CSS

        },

        notes: function(el) {
            var body = document.getElementsByTagName("BODY")[0];
            if (body.classList.contains('gns-notes')) {
                // hide notes
                body.classList.remove('gns-notes');
                introJs().hideHints();
            } else {
                // show notes
                body.className += ' ' + 'gns-notes';
                introJs().showHints();
            }
        },

        inspect: function() {
            var body = document.getElementsByTagName("BODY")[0];
            if (body.classList.contains('gns-inspect')) {
                // remove inspector
                body.classList.remove('gns-inspect');
            } else {
                // add inspector
                body.className += ' ' + 'gns-inspect';
            }
        },

        grid: function() {
            var body = document.getElementsByTagName("BODY")[0];
            if (body.classList.contains('gns-grid')) {
                // remove grid
                body.classList.remove('gns-grid');
            } else {
                // add grid
                body.className += ' ' + 'gns-grid';
            }
        },

        fidelity: function() {
            var body = document.getElementsByTagName("BODY")[0];
            if (body.classList.contains('gns-lofi')) {
                // remove low-fidelity
                body.classList.remove('gns-lofi');
                var btn = document.getElementById('gns-fidelity');
                btn.innerHTML = "Hi-Fi";
            } else {
                // add low-fidelity
                body.className += ' ' + 'gns-lofi';
                var btn = document.getElementById('gns-fidelity');
                btn.innerHTML = "Lo-Fi";
            }
        },

        language: function() {
            var lang = document.getElementsByTagName('html')[0].getAttribute('lang');
            if (lang == 'en') {
                document.getElementsByTagName('html')[0].setAttribute('lang','ru');
                var btn = document.getElementById('gns-lang');
                btn.innerHTML = "Russian";
            }
            else if (lang == 'ru') {
                document.getElementsByTagName('html')[0].setAttribute('lang','es');
                var btn = document.getElementById('gns-lang');
                btn.innerHTML = "Spanish";
            }
            else if (lang == 'es') {
                document.getElementsByTagName('html')[0].setAttribute('lang','en');
                var btn = document.getElementById('gns-lang');
                btn.innerHTML = "English";
            }
            //GENESYS.Toolbar.saveSettings();
        },

        walkthru: function() {
            introJs().start();
        },

        getPatternName: function(key) {
            for (var i = 0; i < UEFPatterns.length; i++) {
                if (UEFPatterns[i].id == key) {
                    return UEFPatterns[i].name;
                }
            }
            return "Name not found.";
        },

        getPatternURL: function(key) {
            for (var i = 0; i < UEFPatterns.length; i++) {
                if (UEFPatterns[i].id == key) {
                    return UEFPatterns[i].url;
                }
            }
            return "#";
        },

        specs: function() {
            // Include the following info in the Spec doc:

            // Date of Spec doc generation
            var d = new Date();
            var dateTime = d.toLocaleString();

            // Title of the prototype page
            var pageTitle = document.title;

            // URL of the prototype page (sanitize it for security)
            var pageURL = encodeURI(window.location.href);

            // Page inventory, including:
            var pageDesignSystem = "None";

            // Name(s) of design system(s) used
            var el = document.querySelectorAll('[data-uefID]');
            if (el.length > 0) {
                pageDesignSystem = "UEF 2";
            }

            // Name of Page Template (if available)
            var pageTemplate = "None";
            var el = document.querySelectorAll('[class=uef-theme-std]');
            if (el.length > 0) {
                pageTemplate = "UEF Public Page Template";
            }

            // # of UEF Patterns
            var components = document.querySelectorAll('[data-uefID]');
            var numComponents = components.length;

            // Open a new Specifications window and get a handle to it
            var specWin = window.open("", "Specifications");
            specWin.document.title = "Specifications";
            specWin.document.write("<head>");
            specWin.document.write('<link href="../components/genesys/genesys-specs.css" rel="stylesheet" />');
            specWin.document.write("</head>");
            specWin.document.write("<body>");
            specWin.document.write("<h1>Specifications: " + pageTitle + "</h1>");
            specWin.document.write("<p><a href='" + pageURL + "' target='_blank'>" + pageURL + "</a></p>");
            specWin.document.write("<small>" + dateTime + "</small>");
            specWin.document.write("<p><strong>Design System/Library Used:</strong> " + pageDesignSystem + " " + "</p>");
            specWin.document.write("<p><strong>" + pageTemplate + "</strong></p>");
            specWin.document.write("</body>")
            specWin.document.write(numComponents + " UEF Patterns found.");
            specWin.document.title = "Specifications";

            // Start the Specs Table
            specWin.document.write("<table>");
            specWin.document.write("<thead>");
            specWin.document.write("<tr>");
            specWin.document.write("<th>Pattern</th>");
            specWin.document.write("<th>UEF ID</th>");
            specWin.document.write("<th>Content</th>");
            specWin.document.write("<th>Notes</th>");
            specWin.document.write("</tr>");
            specWin.document.write("</thead>");
            specWin.document.write("<tbody>");

            // For each UEF Pattern:
            //      Name
            //      UEF ID
            //      Any language text (in all languages)
            //      Any Notes

            var uefID = "";
            var uefName = "";
            var uefURL = "";
            var uefNote = "";
            var notes;
            var children;

            for (var i = 0; i < components.length; i++) {
                uefID = components[i].getAttribute('data-uefID');
                uefName = GENESYS.Toolbar.getPatternName(uefID);
                uefURL = GENESYS.Toolbar.getPatternURL(uefID);
                // look thru children of this node to see if any have Notes
                children = components[i].children;
                if (children.length > 0) {
                    for (var j = 0; j < children.length; j++) {
                        uefNote = children[j].getAttribute('data-hint');
                    }
                }
                if (uefNote == null) {
                    uefNote = "";
                }
                specWin.document.write("<tr>");
                specWin.document.write("<td><a href='" + uefURL + "' target='_blank'>" + uefName + "</a></td>");
                specWin.document.write("<td>" + uefID + "</td>");
                specWin.document.write("<td></td>");
                specWin.document.write("<td>" + uefNote + "</td>");
                specWin.document.write("</tr>");
            }

            specWin.document.write("</tbody>")
            specWin.document.write("</table>");

            // For elements that are not UEF Patterns:
            //      Type of Element
            //      Any language text (in all languages)

            // List all Page language text (English)
            var el = document.querySelectorAll('[data-lang]');
            // TODO: Should we also explicitly support data-lang-en for English as well?
            var numLangText = el.length;
            if (numLangText > 0) {
                var langItem = "";
                specWin.document.write("<h2>Page Content (English)</h2>");
                specWin.document.write("<ol>");
                for (var i = 0; i < numLangText; i++) {
                    langItem = el[i].getAttribute("data-lang");
                    specWin.document.write("<li>" + langItem + "</li>");
                }
                specWin.document.write("</ol>");
            }

            // List all Page language text (Russian)
            var el = document.querySelectorAll('[data-lang-ru]');
            var numLangText = el.length;
            if (numLangText > 0) {
                var langItem = "";
                specWin.document.write("<h2>Page Content (Russian)</h2>");
                specWin.document.write("<ol>");
                for (var i = 0; i < numLangText; i++) {
                    langItem = el[i].getAttribute("data-lang-ru");
                    specWin.document.write("<li>" + langItem + "</li>");
                }
                specWin.document.write("</ol>");
            }

            // List all Page language text (Spanish)
            var el = document.querySelectorAll('[data-lang-es]');
            var numLangText = el.length;
            if (numLangText > 0) {
                var langItem = "";
                specWin.document.write("<h2>Page Content (Spanish)</h2>");
                specWin.document.write("<ol>");
                for (var i = 0; i < numLangText; i++) {
                    langItem = el[i].getAttribute("data-lang-es");
                    specWin.document.write("<li>" + langItem + "</li>");
                }
                specWin.document.write("</ol>");
            }

            // List all Notes (in numbered order)
            var el = document.querySelectorAll('[data-hint]');
            var numNotes = el.length;
            if (numNotes > 0) {
                var note = "";
                specWin.document.write("<h2>Notes</h2>");
                specWin.document.write("<ol>");
                for (var i = 0; i < numNotes; i++) {
                    note = el[i].getAttribute("data-hint");
                    specWin.document.write("<li>" + note + "</li>");
                }
                specWin.document.write("</ol>");
            }

            specWin.document.close();

        },

        andi: function() {
            andiScript=document.createElement('script');
            andiScript.setAttribute('src','https://www.ssa.gov/accessibility/andi/andi.js');
            document.body.appendChild(andiScript);
        },

        tools: function() {

        },

        test: function() {
            var body = document.getElementsByTagName("BODY")[0];
            if (body.classList.contains('gns-test')) {
                // remove test Gremlins
                gremlins.horde.stop();
                body.classList.remove('gns-test');
            } else {
                // add testing Gremlins
                body.className += ' ' + 'gns-test';
                var horde = gremlins.createHorde();
                horde.after(function stopHorde() {
                    body.classList.remove('gns-test');
                });
                horde.unleash( { nb: 3000 });
            }
        },

        analytics: function() {
            var gaTrackingID = ga.getAll()[0].get('trackingId');
            var r = confirm("This page uses Google Analytics to track UX data.\n\nThe Tracking ID for this page is " + gaTrackingID + "\n\nSelect OK to open Google Analytics to view this data.");
            if (r == true) {
                window.open("https://analytics.google.com");
            }
        },

        ruler: function() {
            (function() {
                var Event = function() {
                  'use strict';
                  this.attach = function(evtName, element, listener, capture) {
                    var evt = '',
                      useCapture = (capture === undefined) ? true : capture,
                      handler = null;
                    if (window.addEventListener === undefined) {
                      evt = 'on' + evtName;
                      handler = function(evt, listener) {
                        element.attachEvent(evt, listener);
                        return listener;
                      };
                    } else {
                      evt = evtName;
                      handler = function(evt, listener, useCapture) {
                        element.addEventListener(evt, listener, useCapture);
                        return listener;
                      };
                    }
                    return handler.apply(element, [evt, function(ev) {
                      var e = ev || event,
                        src = e.srcElement || e.target;
                      listener(e, src);
                    }, useCapture]);
                  };
                  this.detach = function(evtName, element, listener, capture) {
                    var evt = '',
                      useCapture = (capture === undefined) ? true : capture;
                    if (window.removeEventListener === undefined) {
                      evt = 'on' + evtName;
                      element.detachEvent(evt, listener);
                    } else {
                      evt = evtName;
                      element.removeEventListener(evt, listener, useCapture);
                    }
                  };
                  this.stop = function(evt) {
                    evt.cancelBubble = true;
                    if (evt.stopPropagation) {
                      evt.stopPropagation();
                    }
                  };
                  this.prevent = function(evt) {
                    if (evt.preventDefault) {
                      evt.preventDefault();
                    } else {
                      evt.returnValue = false;
                    }
                  };
                };
                var Dragdrop = function(evt) {
                  'use strict';
                  var elem = null,
                    started = 0,
                    self = this,
                    moveHandler = null,
                    doc = document.documentElement,
                    body = document.body,
                    gWidth = (document.body.scrollWidth > document.documentElement.clientWidth) ? document.body.scrollWidth : document.documentElement.clientWidth,
                    gHeight = Math.max(body.scrollHeight, body.offsetHeight, doc.clientHeight, doc.scrollHeight, doc.offsetHeight),
                    move = function(e) {
                      var xDiff = e.clientX - elem.posX,
                        yDiff = e.clientY - elem.posY,
                        x = xDiff - (xDiff % elem.snap) + 'px',
                        y = yDiff - (yDiff % elem.snap) + 'px';
                      if (started === 1) {
                        switch (elem.mode) {
                          case 0:
                            elem.style.top = y;
                            elem.style.left = x;
                            break;
                          case 1:
                            elem.style.left = x;
                            break;
                          case 2:
                            elem.style.top = y;
                            break;
                        }
                        if (elem.mode !== 2) {
                          if (xDiff <= elem.minX) {
                            elem.style.left = elem.minX + 'px';
                          }
                          if (elem.offsetLeft + elem.offsetWidth >= elem.maxX) {
                            elem.style.left = (elem.maxX - elem.offsetWidth) + 'px';
                          }
                        }
                        if (elem.mode !== 1) {
                          if (yDiff <= elem.minY) {
                            elem.style.top = elem.minY + 'px';
                          }
                          if (elem.offsetTop + elem.offsetHeight >= elem.maxY) {
                            elem.style.top = (elem.maxY - elem.offsetHeight) + 'px';
                          }
                        }
                        elem.onMove(elem);
                      }
                    },
                    start = function(e, src) {
                      if (src.className.indexOf('draggable') !== -1) {
                        evt.prevent(e);
                        moveHandler = evt.attach('mousemove', document, move, true);
                        started = 1;
                        elem = src;
                        elem.posX = e.clientX - elem.offsetLeft;
                        elem.posY = e.clientY - elem.offsetTop;
                        if (elem.mode === undefined) {
                          self.set(elem);
                        }
                        elem.onStart(elem);
                        if (elem.setCapture) {
                          elem.setCapture();
                        }
                      }
                    },
                    stop = function() {
                      if (started === 1) {
                        started = 0;
                        elem.onStop(elem);
                        evt.detach('mousemove', document, moveHandler);
                        if (elem.releaseCapture) {
                          elem.releaseCapture();
                        }
                      }
                    };
                  evt.attach('mousedown', document, start, false);
                  evt.attach('mouseup', document, stop, false);
                  this.start = start;
                  this.set = function(element, elemOptions) {
                    var options = elemOptions || {};
                    elem = (typeof element === 'string') ? document.getElementById(element) : element;
                    elem.mode = options.mode || 0;
                    elem.minX = options.minX || 0;
                    elem.maxX = options.maxX || gWidth;
                    elem.minY = options.minY || 0;
                    elem.maxY = options.maxY || gHeight;
                    elem.snap = options.snap || 1;
                    elem.onStart = options.onstart || function() {};
                    elem.onMove = options.onmove || function() {};
                    elem.onStop = options.onstop || function() {};
                    elem.style.left = elem.offsetLeft + 'px';
                    elem.style.top = elem.offsetTop + 'px';
                    elem.unselectable = 'on';
                  };
                };
                var RulersGuides = function(evt, dragdrop) {
                  'use strict';
                  var doc = document.documentElement,
                    body = document.body,
                    wrapper = null,
                    lockHandler = null,
                    locked = 1,
                    hRuler = null,
                    vRuler = null,
                    menu = null,
                    dialogs = [],
                    snapDialog = null,
                    openGridDialog = null,
                    xSnap = 0,
                    ySnap = 0,
                    mode = 2,
                    guides = {},
                    guidesCnt = 0,
                    gUid = '',
                    rulerStatus = 1,
                    guideStatus = 1,
                    hBound = 0,
                    vBound = 0,
                    gridList = null,
                    gridListLen = 0,
                    menuBtn = null,
                    gInfoBlockWrapper = null,
                    detailsStatus = 0,
                    domElements = [],
                    domDimensions = [],
                    resizeTimer = null,
                    snapDom = 0,
                    cssText = 'html,body{margin:0;padding:0}.rg-overlay{position:absolute;top:0;left:0;overflow:hidden}.guide{position:absolute;top:0;left:0;z-index:9991;font-size:0}.guide.v{width:1px;height:7000px;border-right:solid 1px #00f;cursor:col-resize}.guide.h{width:3000px;height:1px;border-bottom:solid 1px #00f;cursor:row-resize}.info{width:50px;height:25px;line-height:25px;text-align:center;position:relative;font-size:13px;background-color:#eee;border:solid 1px #ccc;color:#000}.guide.v .info{left:2px}.guide.h .info{top:2px}.unselectable{-moz-user-select:-moz-none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ruler{background-color:#ccc;position:absolute;top:0;left:0;z-index:9990}.ruler .label{font:12px Arial;color:#000}.ruler,.ruler span{font-size:0}.ruler.h{width:3000px;left:-1px;padding-top:14px;border-bottom:solid 1px #000}.ruler.v{height:7000px;top:-1px;padding-left:16px;width:25px;border-right:solid 1px #000}.ruler.h span{border-left:solid 1px #999;height:9px;width:1px;vertical-align:bottom;display:inline-block;*display:inline;zoom:1}.ruler.v span{display:block;margin-left:auto;margin-right:0;border-top:solid 1px #999;width:9px;height:1px}.ruler.v span.major{border-top:solid 1px #000;width:13px}.ruler.v span.milestone{position:relative;border-top:solid 1px #000;width:17px}.ruler.v span.label{border:0;font-size:9px;position:absolute;text-align:center;width:9px}.ruler.h span.major{border-left:solid 1px #000;height:13px}.ruler.h span.milestone{position:relative;border-left:solid 1px #000;height:17px}.ruler.h span.label{border:0;font-size:9px;position:absolute;text-align:center;top:-14px;width:9px}.ruler.h .l10{left:-5px}.ruler.h .l100{left:-7px}.ruler.h .l1000{left:-10px}.ruler.v .l10,.ruler.v .l100,.ruler.v .l1000{top:-7px}.ruler.v .l10{left:-12px}.ruler.v .l100{left:-17px}.ruler.v .l1000{left:-23px}.menu-btn{position:fixed;left:3px;top:2px;line-height:9px;z-index:9998;width:20px;height:20px;background-color:red;opacity:.5;font-size:20px;text-align:left;color:#fff;font-weight:700;cursor:pointer;border-radius:2px}.rg-menu{position:fixed;top:22px;left:3px;padding:0;margin:0;list-style:0;display:none;font:13px Arial;z-index:9999;box-shadow:2px 2px 10px #ccc}.rg-menu li{border-bottom:solid 1px #999;padding:0}.rg-menu a{background-color:#777;display:block;padding:5px;text-decoration:none;color:#fff;line-height:18px}.rg-menu a:hover,.rg-menu a.selected{color:#fff;background-color:#3b94ec}.rg-menu a.disabled{color:#ccc}.rg-menu .desc{display:inline-block;width:170px}.dialog{position:fixed;background-color:#777;z-index:9999;color:#fff;font-size:13px;display:none;box-shadow:2px 2px 10px #ccc}.dialog button{border:0;color:#333;cursor:pointer;background-color:#eaeaea;background-image:linear-gradient(#fafafa,#eaeaea);background-repeat:repeat-x;border-radius:3px;text-shadow:0 1px 0 rgba(255,255,255,.9)}.dialog input,.dialog select,.dialog button{font-size:13px;margin:3px;padding:3px}.dialog .title-bar{padding:5px;background-color:#aaa;font-weight:700}.dialog .wrapper{padding:10px}.open-dialog select,.open-dialog button{float:left;display:block}.open-dialog .ok-btn,.open-dialog .cancel-btn{margin:10px 3px}.open-dialog .ok-btn{clear:both}.snap-dialog label{font-weight:700;padding:3px}.snap-dialog .ok-btn{margin-left:18px}.snap-dialog .ok-btn,.snap-dialog .cancel-btn{margin-top:10px}.snap-dialog .rg-y-label{margin-left:10px}#rg-x-snap,#rg-y-snap{width:50px}.info-block-wrapper{position:absolute;z-index:9989}.info-block{position:absolute;text-align:left}.info-block.even{background:0;background-color:rgba(0,0,255,.2);-ms-filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#330000FF, endColorstr=#330000FF);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#330000FF, endColorstr=#330000FF);zoom:1}.info-block.odd{background:0;background-color:rgba(255,0,0,.2);-ms-filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#33FF0000, endColorstr=#33FF0000);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#33FF0000, endColorstr=#33FF0000);zoom:1}.info-block-txt{padding:5px;display:inline-block;vertical-align:top;background-color:#777;color:#fff;font-size:13px;*display:inline;zoom:1}',
                    Ruler = function(type, size) {
                      var ruler = document.createElement('div'),
                        i = 0,
                        span = document.createElement('span'),
                        label = null,
                        labelTxt = null,
                        spanFrag = document.createDocumentFragment(),
                        cnt = Math.floor(size / 2);
                      ruler.className = 'ruler ' + type + ' unselectable';
                      for (i; i < cnt; i = i + 1) {
                        span = span.cloneNode(false);
                        if (i % 25 === 0) {
                          span.className = 'milestone';
                          if (i > 0) {
                            label = span.cloneNode(false);
                            label.className = 'label';
                            if (i < 50) {
                              label.className += ' l10';
                            } else if (i >= 50 && i < 500) {
                              label.className += ' l100';
                            } else if (i >= 500) {
                              label.className += ' l1000';
                            }
                            labelTxt = document.createTextNode(i * 2);
                            label.appendChild(labelTxt);
                            span.appendChild(label);
                          }
                          span.className = 'milestone';
                        } else if (i % 5 === 0) {
                          span.className = 'major';
                        } else {
                          span.className = '';
                          span.removeAttribute('class');
                        }
                        spanFrag.appendChild(span);
                      }
                      ruler.appendChild(spanFrag);
                      return ruler;
                    },
                    getWindowSize = function() {
                      var w = Math.max(body.scrollWidth, body.offsetWidth, doc.clientWidth, doc.scrollWidth, doc.offsetWidth),
                        h = Math.max(body.scrollHeight, body.offsetHeight, doc.clientHeight, doc.scrollHeight, doc.offsetHeight);
                      return [w, h];
                    },
                    getScrollPos = function() {
                      var t = Math.max(doc.scrollTop, body.scrollTop),
                        l = Math.max(doc.scrollLeft, body.scrollLeft);
                      return [t, l];
                    },
                    getScrollSize = function() {
                      var w = Math.max(doc.scrollWidth, body.scrollWidth),
                        h = Math.max(doc.scrollHeight, body.scrollHeight);
                      return [w, h];
                    },
                    closeAllDialogs = function() {
                      var i = 0;
                      for (i; i < dialogs.length; i = i + 1) {
                        dialogs[i].close();
                      }
                    },
                    removeInboundGuide = function(guide, gUid) {
                      var scrollPos = getScrollPos();
                      if (rulerStatus === 1 && guideStatus === 1 && ((guide.className === 'guide h draggable' && guide.offsetTop < hBound + scrollPos[0]) || (guide.className === 'guide v draggable' && guide.offsetLeft < vBound + scrollPos[1]))) {
                        wrapper.removeChild(guide);
                        delete guides[gUid];
                        guidesCnt = guidesCnt - 1;
                      }
                    },
                    removeInboundGuides = function() {
                      var i;
                      for (i in guides) {
                        if (guides.hasOwnProperty(i)) {
                          removeInboundGuide(guides[i], i);
                        }
                      }
                    },
                    toggleGuides = function() {
                      var i;
                      guideStatus = 1 - guideStatus;
                      for (i in guides) {
                        if (guides.hasOwnProperty(i)) {
                          guides[i].style.display = (guideStatus === 1) ? 'block' : 'none';
                        }
                      }
                      if (guideStatus === 1) {
                        wrapper.style.display = 'block';
                      }
                    },
                    toggleRulers = function() {
                      rulerStatus = 1 - rulerStatus;
                      if (rulerStatus === 1) {
                        vRuler.style.display = 'block';
                        hRuler.style.display = 'block';
                        wrapper.style.display = 'block';
                        removeInboundGuides();
                      } else {
                        vRuler.style.display = 'none';
                        hRuler.style.display = 'none';
                      }
                    },
                    removeGrid = function(gridName) {
                      if (gridList[gridName] !== undefined) {
                        delete gridList[gridName];
                        window.localStorage.setItem('RulersGuides', JSON.stringify(gridList));
                        gridListLen = gridListLen - 1;
                      }
                    },
                    deleteGuides = function() {
                      var i;
                      if (guidesCnt > 0) {
                        for (i in guides) {
                          if (guides.hasOwnProperty(i)) {
                            wrapper.removeChild(guides[i]);
                            delete guides[i];
                            guidesCnt = guidesCnt - 1;
                          }
                        }
                        gInfoBlockWrapper.style.display = 'none';
                      }
                    },
                    renderGrid = function(gridName) {
                      if (gridList[gridName] !== undefined) {
                        var grid = gridList[gridName],
                          guideId = null,
                          guideElem = null;
                        deleteGuides();
                        for (guideId in grid) {
                          if (grid.hasOwnProperty(guideId)) {
                            guideElem = document.createElement('div');
                            guideElem.id = guideId;
                            guideElem.className = grid[guideId].cssClass;
                            guideElem.style.cssText = grid[guideId].style;
                            wrapper.appendChild(guideElem);
                            guides[guideId] = guideElem;
                            guidesCnt = guidesCnt + 1;
                          }
                        }
                      }
                    },
                    OpenGridDialog = function() {
                      var dialog = null,
                        self = this,
                        select = null,
                        renderSelect = function(insertOrUpdate) {
                          var gridName, options = '',
                            i;
                          gridListLen = 0;
                          if (window.localStorage) {
                            gridList = JSON.parse(encodeURI(window.localStorage.getItem('RulersGuides')));
                            for (i in gridList) {
                              if (gridList.hasOwnProperty(i)) {
                                gridListLen = gridListLen + 1;
                              }
                            }
                          }
                          if (insertOrUpdate === 0) {
                            select = document.createElement('select');
                            select.id = 'grid-list';
                          }
                          if (gridListLen > 0) {
                            for (gridName in gridList) {
                              if (gridList.hasOwnProperty(gridName)) {
                                options += '<option>' + gridName + '</option>';
                              }
                            }
                            select.innerHTML = options;
                          }
                          return select;
                        };
                      this.render = function() {
                        if (dialog === null) {
                          dialog = document.createElement('div');
                          select = renderSelect(0);
                          var text = document.createTextNode(''),
                            titleBar = dialog.cloneNode(false),
                            dialogWrapper = dialog.cloneNode(false),
                            okBtn = document.createElement('button'),
                            cancelBtn = okBtn.cloneNode(false),
                            delBtn = okBtn.cloneNode(false),
                            titleBarTxt = text.cloneNode(false),
                            okBtnTxt = text.cloneNode(false),
                            cancelBtnTxt = text.cloneNode(false),
                            delBtnTxt = text.cloneNode(false);
                          titleBarTxt.nodeValue = 'Open grid';
                          okBtnTxt.nodeValue = 'OK';
                          cancelBtnTxt.nodeValue = 'Cancel';
                          delBtnTxt.nodeValue = 'Delete';
                          dialog.className = 'dialog open-dialog';
                          titleBar.className = 'title-bar';
                          dialogWrapper.className = 'wrapper';
                          okBtn.className = 'ok-btn';
                          cancelBtn.className = 'cancel-btn';
                          delBtn.className = 'del-btn';
                          titleBar.appendChild(titleBarTxt);
                          okBtn.appendChild(okBtnTxt);
                          cancelBtn.appendChild(cancelBtnTxt);
                          delBtn.appendChild(delBtnTxt);
                          dialogWrapper.appendChild(select);
                          dialogWrapper.appendChild(delBtn);
                          dialogWrapper.appendChild(okBtn);
                          dialogWrapper.appendChild(cancelBtn);
                          dialog.appendChild(titleBar);
                          dialog.appendChild(dialogWrapper);
                          body.appendChild(dialog);
                          evt.attach('click', delBtn, function() {
                            if (window.confirm('Are you sure ?')) {
                              if (select.options.length > 0) {
                                removeGrid(select.options[select.selectedIndex].value);
                                select.removeChild(select.options[select.selectedIndex]);
                              }
                              if (select.options.length === 0) {
                                self.close();
                              }
                            }
                          });
                          evt.attach('click', okBtn, function() {
                            renderGrid(select.value);
                            self.close();
                          });
                          evt.attach('click', cancelBtn, function() {
                            self.close();
                          });
                        }
                      };
                      this.render();
                      this.open = function() {
                        closeAllDialogs();
                        renderSelect(1);
                        if (gridListLen > 0) {
                          dialog.style.display = 'block';
                          dialog.style.left = ((doc.clientWidth - dialog.clientWidth) / 2) + 'px';
                          dialog.style.top = ((doc.clientHeight - dialog.clientHeight) / 2) + 'px';
                        }
                      };
                      this.close = function() {
                        dialog.style.display = 'none';
                      };
                    },
                    toggleRulersLock = function() {
                      if (locked === 0) {
                        if (lockHandler !== null) {
                          evt.detach('scroll', window, lockHandler);
                        }
                      } else {
                        lockHandler = evt.attach('scroll', window, function() {
                          var pos = getScrollPos(),
                            size = getScrollSize();
                          hRuler.style.top = pos[0] + 'px';
                          wrapper.style.height = size[1] + 'px';
                          vRuler.style.left = pos[1] + 'px';
                          wrapper.style.width = size[0] + 'px';
                        });
                      }
                      locked = 1 - locked;
                    },
                    saveGrid = function() {
                      var data = {},
                        gridData = {},
                        i, gridName = '';
                      while (gridName === '' && guidesCnt > 0) {
                        gridName = window.prompt('Save grid as');
                        if (gridName !== '' && gridName !== false && gridName !== null && window.localStorage) {
                          for (i in guides) {
                            if (guides.hasOwnProperty(i)) {
                              gridData[i] = {
                                'cssClass': guides[i].className,
                                'style': guides[i].style.cssText
                              };
                            }
                          }
                          if (window.localStorage.getItem('RulersGuides') !== null) {
                            data = JSON.parse(encodeURI(window.localStorage.getItem('RulersGuides')));
                          }
                          data[gridName] = gridData;
                          window.localStorage.setItem('RulersGuides', JSON.stringify(data));
                          gridListLen = gridListLen + 1;
                        }
                      }
                    },
                    showDetailedInfo = function() {
                      var i, j = 0,
                        hGuides = [],
                        vGuides = [],
                        scrollSize = getScrollSize(),
                        infoBlockWrapper = document.createElement('div'),
                        infoFrag = document.createDocumentFragment(),
                        infoBlock = infoBlockWrapper.cloneNode(false),
                        infoBlockTxt = infoBlockWrapper.cloneNode(false),
                        infoData1 = document.createTextNode(''),
                        infoData2 = infoData1.cloneNode(false),
                        text = '',
                        br = document.createElement('br');
                      for (i in guides) {
                        if (guides.hasOwnProperty(i)) {
                          if (guides[i].type === 'h') {
                            hGuides.push(guides[i].y);
                          } else {
                            vGuides.push(guides[i].x);
                          }
                        }
                      }
                      vGuides.unshift(0);
                      vGuides.push(scrollSize[0]);
                      hGuides.unshift(0);
                      hGuides.push(scrollSize[1]);
                      vGuides = vGuides.sort(function(a, b) {
                        return a - b;
                      });
                      hGuides = hGuides.sort(function(a, b) {
                        return a - b;
                      });
                      for (i = 0; i < hGuides.length - 1; i = i + 1) {
                        j = 0;
                        for (j; j < vGuides.length - 1; j = j + 1) {
                          infoBlock = infoBlock.cloneNode(false);
                          infoBlockTxt = infoBlockTxt.cloneNode(false);
                          infoData1 = infoData1.cloneNode(false);
                          infoData2 = infoData2.cloneNode(false);
                          br = br.cloneNode();
                          infoBlockWrapper.className = 'info-block-wrapper';
                          infoBlock.className = 'info-block';
                          infoBlockTxt.className = 'info-block-txt';
                          infoBlock.className += ((i % 2 !== 0 && j % 2 !== 0) || (i % 2 === 0 && j % 2 === 0)) ? ' even' : ' odd';
                          infoBlock.style.top = hGuides[i] + 'px';
                          infoBlock.style.left = vGuides[j] + 'px';
                          infoBlock.style.width = (vGuides[j + 1] - vGuides[j]) + 'px';
                          infoBlock.style.height = (hGuides[i + 1] - hGuides[i]) + 'px';
                          text = (vGuides[j + 1] - vGuides[j]) + ' x ' + (hGuides[i + 1] - hGuides[i]);
                          infoData1.nodeValue = text;
                          text = hGuides[i] + ' : ' + vGuides[j];
                          infoData2.nodeValue = text;
                          infoBlockTxt.appendChild(infoData1);
                          infoBlockTxt.appendChild(br);
                          infoBlockTxt.appendChild(infoData2);
                          infoBlock.appendChild(infoBlockTxt);
                          infoBlockTxt.style.marginTop = (i === 0) ? '31px' : '0';
                          infoBlockTxt.style.marginLeft = (j === 0) ? '42px' : '0';
                          infoFrag.appendChild(infoBlock);
                        }
                      }
                      infoBlockWrapper.appendChild(infoFrag);
                      if (detailsStatus === 1) {
                        wrapper.replaceChild(infoBlockWrapper, gInfoBlockWrapper);
                        gInfoBlockWrapper = infoBlockWrapper;
                      } else {
                        gInfoBlockWrapper.style.display = 'none';
                      }
                    },
                    calculateDomDimensions = function() {
                      var x = [],
                        y = [],
                        dm = [],
                        i = 0,
                        len = domElements.length,
                        findDimensions = function(elem) {
                          var t = 0,
                            l = 0,
                            w = elem.offsetWidth,
                            h = elem.offsetHeight;
                          while (elem) {
                            l += (elem.offsetLeft - elem.scrollLeft + elem.clientLeft);
                            t += (elem.offsetTop - elem.scrollTop + elem.clientTop);
                            elem = elem.offsetParent;
                          }
                          return [l, t, l + w, t + h];
                        },
                        getUnique = function(arr) {
                          var u = {},
                            a = [],
                            idx = 0,
                            arrLen = arr.length;
                          for (idx; idx < arrLen; idx = idx + 1) {
                            if (u.hasOwnProperty(arr[idx]) === false) {
                              a.push(arr[idx]);
                              u[arr[idx]] = 1;
                            }
                          }
                          return a;
                        };
                      for (i; i < len; i = i + 1) {
                        dm = findDimensions(domElements[i]);
                        x.push(dm[0]);
                        x.push(dm[2]);
                        y.push(dm[1]);
                        y.push(dm[3]);
                      }
                      x = getUnique(x).sort(function(a, b) {
                        return a - b;
                      });
                      y = getUnique(y).sort(function(a, b) {
                        return a - b;
                      });
                      return [x, y];
                    },
                    Menu = function() {
                      var menuList = null,
                        status = 0,
                        toggles = {},
                        menuItemsList = [{
                          'text': 'Hide rulers',
                          'hotkey': 'Ctrl + Alt + R',
                          'alias': 'rulers'
                        }, {
                          'text': 'Hide guides',
                          'hotkey': 'Ctrl + Alt + G',
                          'alias': 'guides'
                        }, {
                          'text': 'Hide all',
                          'hotkey': 'Ctrl + Alt + A',
                          'alias': 'all'
                        }, {
                          'text': 'Unlock rulers',
                          'hotkey': 'Ctrl + Alt + L',
                          'alias': 'lock'
                        }, {
                          'text': 'Clear all guides',
                          'hotkey': 'Ctrl + Alt + D',
                          'alias': 'clear'
                        }, {
                          'text': 'Open grid',
                          'hotkey': 'Ctrl + Alt + O',
                          'alias': 'open'
                        }, {
                          'text': 'Save grid',
                          'hotkey': 'Ctrl + Alt + G',
                          'alias': 'save'
                        }, {
                          'text': 'Snap to',
                          'hotkey': 'Ctrl + Alt + C',
                          'alias': 'snap'
                        }, {
                          'text': 'Show detailed info',
                          'hotkey': 'Ctrl + Alt + I',
                          'alias': 'details'
                        }, {
                          'text': 'Snap to DOM',
                          'hotkey': 'Ctrl + Alt + E',
                          'alias': 'snapdom'
                        }],
                        i = 0;
                      this.render = function() {
                        menuBtn = document.createElement('div');
                        menuBtn.className = 'menu-btn unselectable';
                        menuBtn.appendChild(document.createTextNode('\u250C'));
                        menuList = document.createElement('ul');
                        menuList.className = 'rg-menu';
                        var menuItems = document.createDocumentFragment(),
                          li = document.createElement('li'),
                          liLink = document.createElement('a'),
                          liDesc = document.createElement('span'),
                          liHotKey = liDesc.cloneNode(false),
                          liDescTxt = document.createTextNode(''),
                          liHotKeyTxt = liDescTxt.cloneNode(false);
                        liLink.href = 'javascript:';
                        liDesc.className = 'desc';
                        liHotKey.className = 'hotkey';
                        for (i; i < menuItemsList.length; i = i + 1) {
                          li = li.cloneNode(false);
                          liLink = liLink.cloneNode(false);
                          liDesc = liDesc.cloneNode(false);
                          liHotKey = liHotKey.cloneNode(false);
                          liDescTxt = liDescTxt.cloneNode(false);
                          liHotKeyTxt = liHotKeyTxt.cloneNode(false);
                          liDescTxt.nodeValue = menuItemsList[i].text;
                          liHotKeyTxt.nodeValue = menuItemsList[i].hotkey;
                          liDesc.appendChild(liDescTxt);
                          liHotKey.appendChild(liHotKeyTxt);
                          liLink.appendChild(liDesc);
                          liLink.appendChild(liHotKey);
                          li.appendChild(liLink);
                          menuItems.appendChild(li);
                          toggles[menuItemsList[i].alias] = {
                            obj: liLink,
                            txt: liDescTxt
                          };
                        }
                        evt.attach('mousedown', toggles.rulers.obj, function() {
                          toggleRulers();
                        });
                        evt.attach('mousedown', toggles.guides.obj, function() {
                          toggleGuides();
                        });
                        evt.attach('mousedown', toggles.all.obj, function() {
                          if (rulerStatus === 1 || guideStatus === 1) {
                            rulerStatus = guideStatus = 1;
                            wrapper.style.display = 'none';
                          } else {
                            rulerStatus = guideStatus = 0;
                            wrapper.style.display = 'block';
                          }
                          toggleRulers();
                          toggleGuides();
                        });
                        evt.attach('mousedown', toggles.lock.obj, function() {
                          toggleRulersLock();
                        });
                        evt.attach('mousedown', toggles.clear.obj, function() {
                          deleteGuides();
                        });
                        evt.attach('mousedown', toggles.open.obj, function() {
                          openGridDialog.open();
                        });
                        evt.attach('mousedown', toggles.save.obj, function() {
                          saveGrid();
                        });
                        evt.attach('mousedown', toggles.snap.obj, function() {
                          snapDialog.open();
                        });
                        evt.attach('mousedown', toggles.details.obj, function() {
                          detailsStatus = 1 - detailsStatus;
                          showDetailedInfo();
                        });
                        evt.attach('mousedown', toggles.snapdom.obj, function() {
                          snapDom = 1 - snapDom;
                          if (snapDom === 1) {
                            domDimensions = calculateDomDimensions();
                          }
                        });
                        menuList.appendChild(menuItems);
                        body.appendChild(menuBtn);
                        body.appendChild(menuList);
                        evt.attach('mousedown', menuBtn, function() {
                          toggles.rulers.txt.nodeValue = (rulerStatus === 1) ? 'Hide rulers' : 'Show rulers';
                          if (guidesCnt > 0) {
                            toggles.guides.obj.className = '';
                            toggles.clear.obj.className = '';
                            toggles.save.obj.className = '';
                            toggles.guides.txt.nodeValue = (guideStatus === 1) ? 'Hide guides' : 'Show guides';
                          } else {
                            toggles.guides.obj.className = 'disabled';
                            toggles.clear.obj.className = 'disabled';
                            toggles.save.obj.className = 'disabled';
                          }
                          toggles.all.txt.nodeValue = (rulerStatus === 1 || guideStatus === 1) ? 'Hide all' : 'Show all';
                          toggles.lock.txt.nodeValue = (locked === 0) ? 'Lock rulers' : 'Unlock rulers';
                          toggles.details.txt.nodeValue = (detailsStatus === 0) ? 'Show detailed info' : 'Hide detailed info';
                          toggles.snapdom.txt.nodeValue = (snapDom === 0) ? 'Snap to DOM' : 'Turn off snap to DOM';
                          toggles.open.obj.className = (gridListLen > 0) ? '' : 'disabled';
                          menuList.style.display = (status === 0) ? 'inline-block' : 'none';
                          status = 1 - status;
                        });
                      };
                      this.render();
                      this.close = function() {
                        if (menuList !== null) {
                          menuList.style.display = 'none';
                          status = 0;
                        }
                      };
                    },
                    SnapDialog = function() {
                      var dialog = null,
                        xInput = null,
                        yInput = null,
                        self = this;
                      this.render = function() {
                        if (dialog === null) {
                          dialog = document.createElement('div');
                          xInput = document.createElement('input');
                          yInput = xInput.cloneNode(false);
                          var text = document.createTextNode(''),
                            okBtn = document.createElement('button'),
                            xLabel = document.createElement('label'),
                            titleBar = dialog.cloneNode(false),
                            dialogWrapper = dialog.cloneNode(false),
                            inputWrapper = dialog.cloneNode(false),
                            btnWrapper = dialog.cloneNode(false),
                            resetBtn = okBtn.cloneNode(false),
                            cancelBtn = okBtn.cloneNode(false),
                            yLabel = xLabel.cloneNode(false),
                            titleBarTxt = text.cloneNode(false),
                            xLabelTxt = text.cloneNode(false),
                            yLabelTxt = text.cloneNode(false),
                            okBtnTxt = text.cloneNode(false),
                            resetBtnTxt = text.cloneNode(false),
                            cancelBtnTxt = text.cloneNode(false);
                          titleBarTxt.nodeValue = 'Snap guides to';
                          xLabelTxt.nodeValue = 'X';
                          yLabelTxt.nodeValue = 'Y';
                          okBtnTxt.nodeValue = 'OK';
                          resetBtnTxt.nodeValue = 'Reset';
                          cancelBtnTxt.nodeValue = 'Cancel';
                          dialog.className = 'dialog snap-dialog';
                          titleBar.className = 'title-bar';
                          dialogWrapper.className = 'wrapper';
                          xLabel.className = 'rg-x-label';
                          xLabel.setAttribute('for', 'rg-x-snap');
                          yLabel.className = 'rg-y-label';
                          yLabel.setAttribute('for', 'rg-y-snap');
                          xInput.setAttribute('type', 'number');
                          xInput.value = '100';
                          xInput.id = 'rg-x-snap';
                          xInput.setAttribute('type', 'number');
                          yInput.value = '100';
                          yInput.id = 'rg-y-snap';
                          okBtn.className = 'ok-btn';
                          resetBtn.className = 'reset-btn';
                          cancelBtn.className = 'cancel-btn';
                          titleBar.appendChild(titleBarTxt);
                          xLabel.appendChild(xLabelTxt);
                          yLabel.appendChild(yLabelTxt);
                          okBtn.appendChild(okBtnTxt);
                          resetBtn.appendChild(resetBtnTxt);
                          cancelBtn.appendChild(cancelBtnTxt);
                          inputWrapper.appendChild(xLabel);
                          inputWrapper.appendChild(xInput);
                          inputWrapper.appendChild(yLabel);
                          inputWrapper.appendChild(yInput);
                          inputWrapper.appendChild(resetBtn);
                          btnWrapper.appendChild(okBtn);
                          btnWrapper.appendChild(cancelBtn);
                          dialogWrapper.appendChild(inputWrapper);
                          dialogWrapper.appendChild(btnWrapper);
                          dialog.appendChild(titleBar);
                          dialog.appendChild(dialogWrapper);
                          body.appendChild(dialog);
                          evt.attach('mousedown', okBtn, function() {
                            xSnap = parseInt(xInput.value, 10);
                            ySnap = parseInt(yInput.value, 10);
                            self.close();
                          });
                          evt.attach('mousedown', resetBtn, function() {
                            xSnap = 0;
                            ySnap = 0;
                            self.close();
                          });
                          evt.attach('mousedown', cancelBtn, function() {
                            self.close();
                          });
                        }
                      };
                      this.render();
                      this.open = function() {
                        closeAllDialogs();
                        dialog.style.display = 'block';
                        dialog.style.left = ((doc.clientWidth - dialog.clientWidth) / 2) + 'px';
                        dialog.style.top = ((doc.clientHeight - dialog.clientHeight) / 2) + 'px';
                      };
                      this.close = function() {
                        dialog.style.display = 'none';
                      };
                    },
                    prepare = function() {
                      var style = document.createElement('style'),
                        size = getWindowSize(),
                        elements = document.getElementsByTagName('*'),
                        len = elements.length,
                        i = 0;
                      for (i; i < len; i = i + 1) {
                        domElements.push(elements[i]);
                      }
                      style.setAttribute('type', 'text/css');
                      if (style.styleSheet) {
                        style.styleSheet.cssText = cssText;
                      } else {
                        style.appendChild(document.createTextNode(cssText));
                      }
                      body.appendChild(style);
                      setTimeout(function() {
                        hRuler = new Ruler('h', 3000);
                        vRuler = new Ruler('v', 7000);
                        wrapper = document.createElement('div');
                        gInfoBlockWrapper = wrapper.cloneNode(false);
                        wrapper.className = 'rg-overlay';
                        gInfoBlockWrapper.className = 'info-block-wrapper';
                        wrapper.style.width = (size[0]) + 'px';
                        wrapper.style.height = (size[1]) + 'px';
                        wrapper.appendChild(hRuler);
                        wrapper.appendChild(vRuler);
                        wrapper.appendChild(gInfoBlockWrapper);
                        body.appendChild(wrapper);
                        domDimensions = calculateDomDimensions();
                        menu = new Menu();
                        snapDialog = new SnapDialog();
                        openGridDialog = new OpenGridDialog();
                        dialogs = [snapDialog, openGridDialog];
                      }, 10);
                    };
                  prepare();
                  this.status = 1;
                  this.disable = function() {
                    if (vRuler !== null) {
                      deleteGuides();
                      vRuler.style.display = 'none';
                      hRuler.style.display = 'none';
                      wrapper.style.display = 'none';
                      menuBtn.style.display = 'none';
                    }
                    rulerStatus = 0;
                    this.status = 0;
                  };
                  this.enable = function() {
                    if (vRuler !== null) {
                      vRuler.style.display = 'block';
                      hRuler.style.display = 'block';
                      wrapper.style.display = 'block';
                      menuBtn.style.display = 'block';
                    }
                    rulerStatus = 1;
                    this.status = 1;
                  };
                  evt.attach('mousedown', document, function(e, src) {
                    var x = e.clientX,
                      y = e.clientY,
                      guide = null,
                      guideInfo = null,
                      guideInfoText = null,
                      scrollPos = getScrollPos(),
                      snap = 0;
                    if (src.className.indexOf('menu-btn') === -1) {
                      menu.close();
                    }
                    if (vBound === 0) {
                      vBound = vRuler.offsetWidth;
                      hBound = hRuler.offsetHeight;
                    }
                    if (((x > vBound && y < hBound) || (y > hBound && x < vBound)) && rulerStatus === 1) {
                      guide = document.createElement('div');
                      guideInfo = guide.cloneNode(false);
                      guideInfoText = document.createTextNode('');
                      gUid = 'guide-' + guidesCnt;
                      guideInfo.className = 'info';
                      guideInfo.appendChild(guideInfoText);
                      guide.appendChild(guideInfo);
                      if (x > vBound && y < hBound) {
                        guide.className = 'guide h draggable';
                        guide.style.top = (e.clientY + scrollPos[0]) + 'px';
                        guideInfo.style.left = (x + scrollPos[1] + 10) + 'px';
                        guide.type = 'h';
                        snap = ySnap;
                        mode = 2;
                      } else if (y > hBound && x < vBound) {
                        guide.className = 'guide v draggable';
                        guide.style.left = (x + scrollPos[1]) + 'px';
                        guideInfo.style.top = ((y + scrollPos[0]) - 35) + 'px';
                        guide.type = 'v';
                        snap = xSnap;
                        mode = 1;
                      }
                      guide.id = gUid;
                      guide.info = guideInfo;
                      guide.text = guideInfoText;
                      guide.x = 0;
                      guide.y = 0;
                      guides[gUid] = guide;
                      wrapper.appendChild(guide);
                      dragdrop.set(guide, {
                        mode: mode,
                        onstart: function(elem) {
                          var text = (elem.mode === 1) ? parseInt(elem.style.left, 10) + 2 : parseInt(elem.style.top, 10) + 2;
                          elem.text.nodeValue = text + 'px';
                          if (elem.over !== undefined) {
                            evt.detach('mouseover', elem, elem.over);
                            evt.detach('mouseout', elem, elem.out);
                          }
                        },
                        onmove: function(elem) {
                          var text = '',
                            pos = 0,
                            dims = [],
                            len = 0,
                            i = 0;
                          pos = (elem.mode === 1) ? elem.style.left : elem.style.top;
                          pos = parseInt(pos, 10);
                          if (snapDom === 1) {
                            dims = domDimensions[elem.mode - 1];
                            for (i, len = dims.length; i < len; i = i + 1) {
                              if (pos <= dims[i]) {
                                pos = dims[i];
                                break;
                              }
                            }
                          }
                          text = pos + 'px';
                          if (elem.mode === 1) {
                            elem.style.left = (pos - 2) + 'px';
                            elem.x = pos;
                          } else {
                            elem.style.top = (pos - 2) + 'px';
                            elem.y = pos;
                          }
                          elem.text.nodeValue = text;
                        },
                        onstop: function(elem) {
                          elem.over = evt.attach('mouseover', elem, function(e, src) {
                            if (src.className === 'guide v draggable') {
                              elem.info.style.top = ((e.clientY + scrollPos[0]) - 35) + 'px';
                            } else if (src.className === 'guide h draggable') {
                              elem.info.style.left = (e.clientX + scrollPos[1] + 10) + 'px';
                            }
                            elem.info.style.display = 'block';
                          });
                          elem.out = evt.attach('mouseout', elem, function() {
                            elem.info.style.display = 'none';
                          });
                        },
                        snap: snap
                      });
                      dragdrop.start(e, guide);
                      guidesCnt = guidesCnt + 1;
                    }
                  });
                  evt.attach('mouseup', document, function(e, src) {
                    removeInboundGuide(src, src.id);
                    if (detailsStatus === 1) {
                      showDetailedInfo();
                    }
                  });
                  evt.attach('keyup', document, function(e) {
                    if (e.ctrlKey === true && e.altKey === true) {
                      switch (e.keyCode) {
                        case 83:
                          saveGrid();
                          break;
                        case 82:
                          toggleRulers();
                          break;
                        case 79:
                          openGridDialog.open();
                          break;
                        case 76:
                          toggleRulersLock();
                          break;
                        case 73:
                          detailsStatus = 1 - detailsStatus;
                          showDetailedInfo();
                          break;
                        case 71:
                          toggleGuides();
                          break;
                        case 69:
                          snapDom = 1 - snapDom;
                          if (snapDom === 1) {
                            domDimensions = calculateDomDimensions();
                          }
                          break;
                        case 68:
                          deleteGuides();
                          break;
                        case 67:
                          snapDialog.open();
                          break;
                        case 65:
                          if (rulerStatus === 1 || guideStatus === 1) {
                            rulerStatus = guideStatus = 1;
                            wrapper.style.display = 'none';
                          } else {
                            rulerStatus = guideStatus = 0;
                            wrapper.style.display = 'block';
                          }
                          toggleRulers();
                          toggleGuides();
                          break;
                      }
                    }
                  });
                  evt.attach('resize', window, function() {
                    var size = getWindowSize();
                    wrapper.style.width = size[0] + 'px';
                    wrapper.style.height = size[1] + 'px';
                    if (resizeTimer !== null) {
                      window.clearTimeout(resizeTimer);
                    }
                    if (snapDom === 1) {
                      resizeTimer = window.setTimeout(function() {
                        domDimensions = calculateDomDimensions();
                      }, 100);
                    }
                  });
                };
                var evt = new Event(),
                  dragdrop = new Dragdrop(evt);
                if (window.rg === undefined) {
                  window.rg = new RulersGuides(evt, dragdrop);
                  window.rg.status = 0;
                }
                if (window.rg.status === 1) {
                  window.rg.disable();
                } else {
                  window.rg.enable();
                }
              })()(function() {
                var Event = function() {
                  'use strict';
                  this.attach = function(evtName, element, listener, capture) {
                    var evt = '',
                      useCapture = (capture === undefined) ? true : capture,
                      handler = null;
                    if (window.addEventListener === undefined) {
                      evt = 'on' + evtName;
                      handler = function(evt, listener) {
                        element.attachEvent(evt, listener);
                        return listener;
                      };
                    } else {
                      evt = evtName;
                      handler = function(evt, listener, useCapture) {
                        element.addEventListener(evt, listener, useCapture);
                        return listener;
                      };
                    }
                    return handler.apply(element, [evt, function(ev) {
                      var e = ev || event,
                        src = e.srcElement || e.target;
                      listener(e, src);
                    }, useCapture]);
                  };
                  this.detach = function(evtName, element, listener, capture) {
                    var evt = '',
                      useCapture = (capture === undefined) ? true : capture;
                    if (window.removeEventListener === undefined) {
                      evt = 'on' + evtName;
                      element.detachEvent(evt, listener);
                    } else {
                      evt = evtName;
                      element.removeEventListener(evt, listener, useCapture);
                    }
                  };
                  this.stop = function(evt) {
                    evt.cancelBubble = true;
                    if (evt.stopPropagation) {
                      evt.stopPropagation();
                    }
                  };
                  this.prevent = function(evt) {
                    if (evt.preventDefault) {
                      evt.preventDefault();
                    } else {
                      evt.returnValue = false;
                    }
                  };
                };
                var Dragdrop = function(evt) {
                  'use strict';
                  var elem = null,
                    started = 0,
                    self = this,
                    moveHandler = null,
                    doc = document.documentElement,
                    body = document.body,
                    gWidth = (document.body.scrollWidth > document.documentElement.clientWidth) ? document.body.scrollWidth : document.documentElement.clientWidth,
                    gHeight = Math.max(body.scrollHeight, body.offsetHeight, doc.clientHeight, doc.scrollHeight, doc.offsetHeight),
                    move = function(e) {
                      var xDiff = e.clientX - elem.posX,
                        yDiff = e.clientY - elem.posY,
                        x = xDiff - (xDiff % elem.snap) + 'px',
                        y = yDiff - (yDiff % elem.snap) + 'px';
                      if (started === 1) {
                        switch (elem.mode) {
                          case 0:
                            elem.style.top = y;
                            elem.style.left = x;
                            break;
                          case 1:
                            elem.style.left = x;
                            break;
                          case 2:
                            elem.style.top = y;
                            break;
                        }
                        if (elem.mode !== 2) {
                          if (xDiff <= elem.minX) {
                            elem.style.left = elem.minX + 'px';
                          }
                          if (elem.offsetLeft + elem.offsetWidth >= elem.maxX) {
                            elem.style.left = (elem.maxX - elem.offsetWidth) + 'px';
                          }
                        }
                        if (elem.mode !== 1) {
                          if (yDiff <= elem.minY) {
                            elem.style.top = elem.minY + 'px';
                          }
                          if (elem.offsetTop + elem.offsetHeight >= elem.maxY) {
                            elem.style.top = (elem.maxY - elem.offsetHeight) + 'px';
                          }
                        }
                        elem.onMove(elem);
                      }
                    },
                    start = function(e, src) {
                      if (src.className.indexOf('draggable') !== -1) {
                        evt.prevent(e);
                        moveHandler = evt.attach('mousemove', document, move, true);
                        started = 1;
                        elem = src;
                        elem.posX = e.clientX - elem.offsetLeft;
                        elem.posY = e.clientY - elem.offsetTop;
                        if (elem.mode === undefined) {
                          self.set(elem);
                        }
                        elem.onStart(elem);
                        if (elem.setCapture) {
                          elem.setCapture();
                        }
                      }
                    },
                    stop = function() {
                      if (started === 1) {
                        started = 0;
                        elem.onStop(elem);
                        evt.detach('mousemove', document, moveHandler);
                        if (elem.releaseCapture) {
                          elem.releaseCapture();
                        }
                      }
                    };
                  evt.attach('mousedown', document, start, false);
                  evt.attach('mouseup', document, stop, false);
                  this.start = start;
                  this.set = function(element, elemOptions) {
                    var options = elemOptions || {};
                    elem = (typeof element === 'string') ? document.getElementById(element) : element;
                    elem.mode = options.mode || 0;
                    elem.minX = options.minX || 0;
                    elem.maxX = options.maxX || gWidth;
                    elem.minY = options.minY || 0;
                    elem.maxY = options.maxY || gHeight;
                    elem.snap = options.snap || 1;
                    elem.onStart = options.onstart || function() {};
                    elem.onMove = options.onmove || function() {};
                    elem.onStop = options.onstop || function() {};
                    elem.style.left = elem.offsetLeft + 'px';
                    elem.style.top = elem.offsetTop + 'px';
                    elem.unselectable = 'on';
                  };
                };
                var RulersGuides = function(evt, dragdrop) {
                  'use strict';
                  var doc = document.documentElement,
                    body = document.body,
                    wrapper = null,
                    lockHandler = null,
                    locked = 1,
                    hRuler = null,
                    vRuler = null,
                    menu = null,
                    dialogs = [],
                    snapDialog = null,
                    openGridDialog = null,
                    xSnap = 0,
                    ySnap = 0,
                    mode = 2,
                    guides = {},
                    guidesCnt = 0,
                    gUid = '',
                    rulerStatus = 1,
                    guideStatus = 1,
                    hBound = 0,
                    vBound = 0,
                    gridList = null,
                    gridListLen = 0,
                    menuBtn = null,
                    gInfoBlockWrapper = null,
                    detailsStatus = 0,
                    domElements = [],
                    domDimensions = [],
                    resizeTimer = null,
                    snapDom = 0,
                    cssText = 'html,body{margin:0;padding:0}.rg-overlay{position:absolute;top:0;left:0;overflow:hidden}.guide{position:absolute;top:0;left:0;z-index:9991;font-size:0}.guide.v{width:1px;height:7000px;border-right:solid 1px #00f;cursor:col-resize}.guide.h{width:3000px;height:1px;border-bottom:solid 1px #00f;cursor:row-resize}.info{width:50px;height:25px;line-height:25px;text-align:center;position:relative;font-size:13px;background-color:#eee;border:solid 1px #ccc;color:#000}.guide.v .info{left:2px}.guide.h .info{top:2px}.unselectable{-moz-user-select:-moz-none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ruler{background-color:#ccc;position:absolute;top:0;left:0;z-index:9990}.ruler .label{font:12px Arial;color:#000}.ruler,.ruler span{font-size:0}.ruler.h{width:3000px;left:-1px;padding-top:14px;border-bottom:solid 1px #000}.ruler.v{height:7000px;top:-1px;padding-left:16px;width:25px;border-right:solid 1px #000}.ruler.h span{border-left:solid 1px #999;height:9px;width:1px;vertical-align:bottom;display:inline-block;*display:inline;zoom:1}.ruler.v span{display:block;margin-left:auto;margin-right:0;border-top:solid 1px #999;width:9px;height:1px}.ruler.v span.major{border-top:solid 1px #000;width:13px}.ruler.v span.milestone{position:relative;border-top:solid 1px #000;width:17px}.ruler.v span.label{border:0;font-size:9px;position:absolute;text-align:center;width:9px}.ruler.h span.major{border-left:solid 1px #000;height:13px}.ruler.h span.milestone{position:relative;border-left:solid 1px #000;height:17px}.ruler.h span.label{border:0;font-size:9px;position:absolute;text-align:center;top:-14px;width:9px}.ruler.h .l10{left:-5px}.ruler.h .l100{left:-7px}.ruler.h .l1000{left:-10px}.ruler.v .l10,.ruler.v .l100,.ruler.v .l1000{top:-7px}.ruler.v .l10{left:-12px}.ruler.v .l100{left:-17px}.ruler.v .l1000{left:-23px}.menu-btn{position:fixed;left:3px;top:2px;line-height:9px;z-index:9998;width:20px;height:20px;background-color:red;opacity:.5;font-size:20px;text-align:left;color:#fff;font-weight:700;cursor:pointer;border-radius:2px}.rg-menu{position:fixed;top:22px;left:3px;padding:0;margin:0;list-style:0;display:none;font:13px Arial;z-index:9999;box-shadow:2px 2px 10px #ccc}.rg-menu li{border-bottom:solid 1px #999;padding:0}.rg-menu a{background-color:#777;display:block;padding:5px;text-decoration:none;color:#fff;line-height:18px}.rg-menu a:hover,.rg-menu a.selected{color:#fff;background-color:#3b94ec}.rg-menu a.disabled{color:#ccc}.rg-menu .desc{display:inline-block;width:170px}.dialog{position:fixed;background-color:#777;z-index:9999;color:#fff;font-size:13px;display:none;box-shadow:2px 2px 10px #ccc}.dialog button{border:0;color:#333;cursor:pointer;background-color:#eaeaea;background-image:linear-gradient(#fafafa,#eaeaea);background-repeat:repeat-x;border-radius:3px;text-shadow:0 1px 0 rgba(255,255,255,.9)}.dialog input,.dialog select,.dialog button{font-size:13px;margin:3px;padding:3px}.dialog .title-bar{padding:5px;background-color:#aaa;font-weight:700}.dialog .wrapper{padding:10px}.open-dialog select,.open-dialog button{float:left;display:block}.open-dialog .ok-btn,.open-dialog .cancel-btn{margin:10px 3px}.open-dialog .ok-btn{clear:both}.snap-dialog label{font-weight:700;padding:3px}.snap-dialog .ok-btn{margin-left:18px}.snap-dialog .ok-btn,.snap-dialog .cancel-btn{margin-top:10px}.snap-dialog .rg-y-label{margin-left:10px}#rg-x-snap,#rg-y-snap{width:50px}.info-block-wrapper{position:absolute;z-index:9989}.info-block{position:absolute;text-align:left}.info-block.even{background:0;background-color:rgba(0,0,255,.2);-ms-filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#330000FF, endColorstr=#330000FF);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#330000FF, endColorstr=#330000FF);zoom:1}.info-block.odd{background:0;background-color:rgba(255,0,0,.2);-ms-filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#33FF0000, endColorstr=#33FF0000);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#33FF0000, endColorstr=#33FF0000);zoom:1}.info-block-txt{padding:5px;display:inline-block;vertical-align:top;background-color:#777;color:#fff;font-size:13px;*display:inline;zoom:1}',
                    Ruler = function(type, size) {
                      var ruler = document.createElement('div'),
                        i = 0,
                        span = document.createElement('span'),
                        label = null,
                        labelTxt = null,
                        spanFrag = document.createDocumentFragment(),
                        cnt = Math.floor(size / 2);
                      ruler.className = 'ruler ' + type + ' unselectable';
                      for (i; i < cnt; i = i + 1) {
                        span = span.cloneNode(false);
                        if (i % 25 === 0) {
                          span.className = 'milestone';
                          if (i > 0) {
                            label = span.cloneNode(false);
                            label.className = 'label';
                            if (i < 50) {
                              label.className += ' l10';
                            } else if (i >= 50 && i < 500) {
                              label.className += ' l100';
                            } else if (i >= 500) {
                              label.className += ' l1000';
                            }
                            labelTxt = document.createTextNode(i * 2);
                            label.appendChild(labelTxt);
                            span.appendChild(label);
                          }
                          span.className = 'milestone';
                        } else if (i % 5 === 0) {
                          span.className = 'major';
                        } else {
                          span.className = '';
                          span.removeAttribute('class');
                        }
                        spanFrag.appendChild(span);
                      }
                      ruler.appendChild(spanFrag);
                      return ruler;
                    },
                    getWindowSize = function() {
                      var w = Math.max(body.scrollWidth, body.offsetWidth, doc.clientWidth, doc.scrollWidth, doc.offsetWidth),
                        h = Math.max(body.scrollHeight, body.offsetHeight, doc.clientHeight, doc.scrollHeight, doc.offsetHeight);
                      return [w, h];
                    },
                    getScrollPos = function() {
                      var t = Math.max(doc.scrollTop, body.scrollTop),
                        l = Math.max(doc.scrollLeft, body.scrollLeft);
                      return [t, l];
                    },
                    getScrollSize = function() {
                      var w = Math.max(doc.scrollWidth, body.scrollWidth),
                        h = Math.max(doc.scrollHeight, body.scrollHeight);
                      return [w, h];
                    },
                    closeAllDialogs = function() {
                      var i = 0;
                      for (i; i < dialogs.length; i = i + 1) {
                        dialogs[i].close();
                      }
                    },
                    removeInboundGuide = function(guide, gUid) {
                      var scrollPos = getScrollPos();
                      if (rulerStatus === 1 && guideStatus === 1 && ((guide.className === 'guide h draggable' && guide.offsetTop < hBound + scrollPos[0]) || (guide.className === 'guide v draggable' && guide.offsetLeft < vBound + scrollPos[1]))) {
                        wrapper.removeChild(guide);
                        delete guides[gUid];
                        guidesCnt = guidesCnt - 1;
                      }
                    },
                    removeInboundGuides = function() {
                      var i;
                      for (i in guides) {
                        if (guides.hasOwnProperty(i)) {
                          removeInboundGuide(guides[i], i);
                        }
                      }
                    },
                    toggleGuides = function() {
                      var i;
                      guideStatus = 1 - guideStatus;
                      for (i in guides) {
                        if (guides.hasOwnProperty(i)) {
                          guides[i].style.display = (guideStatus === 1) ? 'block' : 'none';
                        }
                      }
                      if (guideStatus === 1) {
                        wrapper.style.display = 'block';
                      }
                    },
                    toggleRulers = function() {
                      rulerStatus = 1 - rulerStatus;
                      if (rulerStatus === 1) {
                        vRuler.style.display = 'block';
                        hRuler.style.display = 'block';
                        wrapper.style.display = 'block';
                        removeInboundGuides();
                      } else {
                        vRuler.style.display = 'none';
                        hRuler.style.display = 'none';
                      }
                    },
                    removeGrid = function(gridName) {
                      if (gridList[gridName] !== undefined) {
                        delete gridList[gridName];
                        window.localStorage.setItem('RulersGuides', JSON.stringify(gridList));
                        gridListLen = gridListLen - 1;
                      }
                    },
                    deleteGuides = function() {
                      var i;
                      if (guidesCnt > 0) {
                        for (i in guides) {
                          if (guides.hasOwnProperty(i)) {
                            wrapper.removeChild(guides[i]);
                            delete guides[i];
                            guidesCnt = guidesCnt - 1;
                          }
                        }
                        gInfoBlockWrapper.style.display = 'none';
                      }
                    },
                    renderGrid = function(gridName) {
                      if (gridList[gridName] !== undefined) {
                        var grid = gridList[gridName],
                          guideId = null,
                          guideElem = null;
                        deleteGuides();
                        for (guideId in grid) {
                          if (grid.hasOwnProperty(guideId)) {
                            guideElem = document.createElement('div');
                            guideElem.id = guideId;
                            guideElem.className = grid[guideId].cssClass;
                            guideElem.style.cssText = grid[guideId].style;
                            wrapper.appendChild(guideElem);
                            guides[guideId] = guideElem;
                            guidesCnt = guidesCnt + 1;
                          }
                        }
                      }
                    },
                    OpenGridDialog = function() {
                      var dialog = null,
                        self = this,
                        select = null,
                        renderSelect = function(insertOrUpdate) {
                          var gridName, options = '',
                            i;
                          gridListLen = 0;
                          if (window.localStorage) {
                            gridList = JSON.parse(encodeURI(window.localStorage.getItem('RulersGuides')));
                            for (i in gridList) {
                              if (gridList.hasOwnProperty(i)) {
                                gridListLen = gridListLen + 1;
                              }
                            }
                          }
                          if (insertOrUpdate === 0) {
                            select = document.createElement('select');
                            select.id = 'grid-list';
                          }
                          if (gridListLen > 0) {
                            for (gridName in gridList) {
                              if (gridList.hasOwnProperty(gridName)) {
                                options += '<option>' + gridName + '</option>';
                              }
                            }
                            select.innerHTML = options;
                          }
                          return select;
                        };
                      this.render = function() {
                        if (dialog === null) {
                          dialog = document.createElement('div');
                          select = renderSelect(0);
                          var text = document.createTextNode(''),
                            titleBar = dialog.cloneNode(false),
                            dialogWrapper = dialog.cloneNode(false),
                            okBtn = document.createElement('button'),
                            cancelBtn = okBtn.cloneNode(false),
                            delBtn = okBtn.cloneNode(false),
                            titleBarTxt = text.cloneNode(false),
                            okBtnTxt = text.cloneNode(false),
                            cancelBtnTxt = text.cloneNode(false),
                            delBtnTxt = text.cloneNode(false);
                          titleBarTxt.nodeValue = 'Open grid';
                          okBtnTxt.nodeValue = 'OK';
                          cancelBtnTxt.nodeValue = 'Cancel';
                          delBtnTxt.nodeValue = 'Delete';
                          dialog.className = 'dialog open-dialog';
                          titleBar.className = 'title-bar';
                          dialogWrapper.className = 'wrapper';
                          okBtn.className = 'ok-btn';
                          cancelBtn.className = 'cancel-btn';
                          delBtn.className = 'del-btn';
                          titleBar.appendChild(titleBarTxt);
                          okBtn.appendChild(okBtnTxt);
                          cancelBtn.appendChild(cancelBtnTxt);
                          delBtn.appendChild(delBtnTxt);
                          dialogWrapper.appendChild(select);
                          dialogWrapper.appendChild(delBtn);
                          dialogWrapper.appendChild(okBtn);
                          dialogWrapper.appendChild(cancelBtn);
                          dialog.appendChild(titleBar);
                          dialog.appendChild(dialogWrapper);
                          body.appendChild(dialog);
                          evt.attach('click', delBtn, function() {
                            if (window.confirm('Are you sure ?')) {
                              if (select.options.length > 0) {
                                removeGrid(select.options[select.selectedIndex].value);
                                select.removeChild(select.options[select.selectedIndex]);
                              }
                              if (select.options.length === 0) {
                                self.close();
                              }
                            }
                          });
                          evt.attach('click', okBtn, function() {
                            renderGrid(select.value);
                            self.close();
                          });
                          evt.attach('click', cancelBtn, function() {
                            self.close();
                          });
                        }
                      };
                      this.render();
                      this.open = function() {
                        closeAllDialogs();
                        renderSelect(1);
                        if (gridListLen > 0) {
                          dialog.style.display = 'block';
                          dialog.style.left = ((doc.clientWidth - dialog.clientWidth) / 2) + 'px';
                          dialog.style.top = ((doc.clientHeight - dialog.clientHeight) / 2) + 'px';
                        }
                      };
                      this.close = function() {
                        dialog.style.display = 'none';
                      };
                    },
                    toggleRulersLock = function() {
                      if (locked === 0) {
                        if (lockHandler !== null) {
                          evt.detach('scroll', window, lockHandler);
                        }
                      } else {
                        lockHandler = evt.attach('scroll', window, function() {
                          var pos = getScrollPos(),
                            size = getScrollSize();
                          hRuler.style.top = pos[0] + 'px';
                          wrapper.style.height = size[1] + 'px';
                          vRuler.style.left = pos[1] + 'px';
                          wrapper.style.width = size[0] + 'px';
                        });
                      }
                      locked = 1 - locked;
                    },
                    saveGrid = function() {
                      var data = {},
                        gridData = {},
                        i, gridName = '';
                      while (gridName === '' && guidesCnt > 0) {
                        gridName = window.prompt('Save grid as');
                        if (gridName !== '' && gridName !== false && gridName !== null && window.localStorage) {
                          for (i in guides) {
                            if (guides.hasOwnProperty(i)) {
                              gridData[i] = {
                                'cssClass': guides[i].className,
                                'style': guides[i].style.cssText
                              };
                            }
                          }
                          if (window.localStorage.getItem('RulersGuides') !== null) {
                            data = JSON.parse(encodeURI(window.localStorage.getItem('RulersGuides')));
                          }
                          data[gridName] = gridData;
                          window.localStorage.setItem('RulersGuides', JSON.stringify(data));
                          gridListLen = gridListLen + 1;
                        }
                      }
                    },
                    showDetailedInfo = function() {
                      var i, j = 0,
                        hGuides = [],
                        vGuides = [],
                        scrollSize = getScrollSize(),
                        infoBlockWrapper = document.createElement('div'),
                        infoFrag = document.createDocumentFragment(),
                        infoBlock = infoBlockWrapper.cloneNode(false),
                        infoBlockTxt = infoBlockWrapper.cloneNode(false),
                        infoData1 = document.createTextNode(''),
                        infoData2 = infoData1.cloneNode(false),
                        text = '',
                        br = document.createElement('br');
                      for (i in guides) {
                        if (guides.hasOwnProperty(i)) {
                          if (guides[i].type === 'h') {
                            hGuides.push(guides[i].y);
                          } else {
                            vGuides.push(guides[i].x);
                          }
                        }
                      }
                      vGuides.unshift(0);
                      vGuides.push(scrollSize[0]);
                      hGuides.unshift(0);
                      hGuides.push(scrollSize[1]);
                      vGuides = vGuides.sort(function(a, b) {
                        return a - b;
                      });
                      hGuides = hGuides.sort(function(a, b) {
                        return a - b;
                      });
                      for (i = 0; i < hGuides.length - 1; i = i + 1) {
                        j = 0;
                        for (j; j < vGuides.length - 1; j = j + 1) {
                          infoBlock = infoBlock.cloneNode(false);
                          infoBlockTxt = infoBlockTxt.cloneNode(false);
                          infoData1 = infoData1.cloneNode(false);
                          infoData2 = infoData2.cloneNode(false);
                          br = br.cloneNode();
                          infoBlockWrapper.className = 'info-block-wrapper';
                          infoBlock.className = 'info-block';
                          infoBlockTxt.className = 'info-block-txt';
                          infoBlock.className += ((i % 2 !== 0 && j % 2 !== 0) || (i % 2 === 0 && j % 2 === 0)) ? ' even' : ' odd';
                          infoBlock.style.top = hGuides[i] + 'px';
                          infoBlock.style.left = vGuides[j] + 'px';
                          infoBlock.style.width = (vGuides[j + 1] - vGuides[j]) + 'px';
                          infoBlock.style.height = (hGuides[i + 1] - hGuides[i]) + 'px';
                          text = (vGuides[j + 1] - vGuides[j]) + ' x ' + (hGuides[i + 1] - hGuides[i]);
                          infoData1.nodeValue = text;
                          text = hGuides[i] + ' : ' + vGuides[j];
                          infoData2.nodeValue = text;
                          infoBlockTxt.appendChild(infoData1);
                          infoBlockTxt.appendChild(br);
                          infoBlockTxt.appendChild(infoData2);
                          infoBlock.appendChild(infoBlockTxt);
                          infoBlockTxt.style.marginTop = (i === 0) ? '31px' : '0';
                          infoBlockTxt.style.marginLeft = (j === 0) ? '42px' : '0';
                          infoFrag.appendChild(infoBlock);
                        }
                      }
                      infoBlockWrapper.appendChild(infoFrag);
                      if (detailsStatus === 1) {
                        wrapper.replaceChild(infoBlockWrapper, gInfoBlockWrapper);
                        gInfoBlockWrapper = infoBlockWrapper;
                      } else {
                        gInfoBlockWrapper.style.display = 'none';
                      }
                    },
                    calculateDomDimensions = function() {
                      var x = [],
                        y = [],
                        dm = [],
                        i = 0,
                        len = domElements.length,
                        findDimensions = function(elem) {
                          var t = 0,
                            l = 0,
                            w = elem.offsetWidth,
                            h = elem.offsetHeight;
                          while (elem) {
                            l += (elem.offsetLeft - elem.scrollLeft + elem.clientLeft);
                            t += (elem.offsetTop - elem.scrollTop + elem.clientTop);
                            elem = elem.offsetParent;
                          }
                          return [l, t, l + w, t + h];
                        },
                        getUnique = function(arr) {
                          var u = {},
                            a = [],
                            idx = 0,
                            arrLen = arr.length;
                          for (idx; idx < arrLen; idx = idx + 1) {
                            if (u.hasOwnProperty(arr[idx]) === false) {
                              a.push(arr[idx]);
                              u[arr[idx]] = 1;
                            }
                          }
                          return a;
                        };
                      for (i; i < len; i = i + 1) {
                        dm = findDimensions(domElements[i]);
                        x.push(dm[0]);
                        x.push(dm[2]);
                        y.push(dm[1]);
                        y.push(dm[3]);
                      }
                      x = getUnique(x).sort(function(a, b) {
                        return a - b;
                      });
                      y = getUnique(y).sort(function(a, b) {
                        return a - b;
                      });
                      return [x, y];
                    },
                    Menu = function() {
                      var menuList = null,
                        status = 0,
                        toggles = {},
                        menuItemsList = [{
                          'text': 'Hide rulers',
                          'hotkey': 'Ctrl + Alt + R',
                          'alias': 'rulers'
                        }, {
                          'text': 'Hide guides',
                          'hotkey': 'Ctrl + Alt + G',
                          'alias': 'guides'
                        }, {
                          'text': 'Hide all',
                          'hotkey': 'Ctrl + Alt + A',
                          'alias': 'all'
                        }, {
                          'text': 'Unlock rulers',
                          'hotkey': 'Ctrl + Alt + L',
                          'alias': 'lock'
                        }, {
                          'text': 'Clear all guides',
                          'hotkey': 'Ctrl + Alt + D',
                          'alias': 'clear'
                        }, {
                          'text': 'Open grid',
                          'hotkey': 'Ctrl + Alt + O',
                          'alias': 'open'
                        }, {
                          'text': 'Save grid',
                          'hotkey': 'Ctrl + Alt + G',
                          'alias': 'save'
                        }, {
                          'text': 'Snap to',
                          'hotkey': 'Ctrl + Alt + C',
                          'alias': 'snap'
                        }, {
                          'text': 'Show detailed info',
                          'hotkey': 'Ctrl + Alt + I',
                          'alias': 'details'
                        }, {
                          'text': 'Snap to DOM',
                          'hotkey': 'Ctrl + Alt + E',
                          'alias': 'snapdom'
                        }],
                        i = 0;
                      this.render = function() {
                        menuBtn = document.createElement('div');
                        menuBtn.className = 'menu-btn unselectable';
                        menuBtn.appendChild(document.createTextNode('\u250C'));
                        menuList = document.createElement('ul');
                        menuList.className = 'rg-menu';
                        var menuItems = document.createDocumentFragment(),
                          li = document.createElement('li'),
                          liLink = document.createElement('a'),
                          liDesc = document.createElement('span'),
                          liHotKey = liDesc.cloneNode(false),
                          liDescTxt = document.createTextNode(''),
                          liHotKeyTxt = liDescTxt.cloneNode(false);
                        liLink.href = 'javascript:';
                        liDesc.className = 'desc';
                        liHotKey.className = 'hotkey';
                        for (i; i < menuItemsList.length; i = i + 1) {
                          li = li.cloneNode(false);
                          liLink = liLink.cloneNode(false);
                          liDesc = liDesc.cloneNode(false);
                          liHotKey = liHotKey.cloneNode(false);
                          liDescTxt = liDescTxt.cloneNode(false);
                          liHotKeyTxt = liHotKeyTxt.cloneNode(false);
                          liDescTxt.nodeValue = menuItemsList[i].text;
                          liHotKeyTxt.nodeValue = menuItemsList[i].hotkey;
                          liDesc.appendChild(liDescTxt);
                          liHotKey.appendChild(liHotKeyTxt);
                          liLink.appendChild(liDesc);
                          liLink.appendChild(liHotKey);
                          li.appendChild(liLink);
                          menuItems.appendChild(li);
                          toggles[menuItemsList[i].alias] = {
                            obj: liLink,
                            txt: liDescTxt
                          };
                        }
                        evt.attach('mousedown', toggles.rulers.obj, function() {
                          toggleRulers();
                        });
                        evt.attach('mousedown', toggles.guides.obj, function() {
                          toggleGuides();
                        });
                        evt.attach('mousedown', toggles.all.obj, function() {
                          if (rulerStatus === 1 || guideStatus === 1) {
                            rulerStatus = guideStatus = 1;
                            wrapper.style.display = 'none';
                          } else {
                            rulerStatus = guideStatus = 0;
                            wrapper.style.display = 'block';
                          }
                          toggleRulers();
                          toggleGuides();
                        });
                        evt.attach('mousedown', toggles.lock.obj, function() {
                          toggleRulersLock();
                        });
                        evt.attach('mousedown', toggles.clear.obj, function() {
                          deleteGuides();
                        });
                        evt.attach('mousedown', toggles.open.obj, function() {
                          openGridDialog.open();
                        });
                        evt.attach('mousedown', toggles.save.obj, function() {
                          saveGrid();
                        });
                        evt.attach('mousedown', toggles.snap.obj, function() {
                          snapDialog.open();
                        });
                        evt.attach('mousedown', toggles.details.obj, function() {
                          detailsStatus = 1 - detailsStatus;
                          showDetailedInfo();
                        });
                        evt.attach('mousedown', toggles.snapdom.obj, function() {
                          snapDom = 1 - snapDom;
                          if (snapDom === 1) {
                            domDimensions = calculateDomDimensions();
                          }
                        });
                        menuList.appendChild(menuItems);
                        body.appendChild(menuBtn);
                        body.appendChild(menuList);
                        evt.attach('mousedown', menuBtn, function() {
                          toggles.rulers.txt.nodeValue = (rulerStatus === 1) ? 'Hide rulers' : 'Show rulers';
                          if (guidesCnt > 0) {
                            toggles.guides.obj.className = '';
                            toggles.clear.obj.className = '';
                            toggles.save.obj.className = '';
                            toggles.guides.txt.nodeValue = (guideStatus === 1) ? 'Hide guides' : 'Show guides';
                          } else {
                            toggles.guides.obj.className = 'disabled';
                            toggles.clear.obj.className = 'disabled';
                            toggles.save.obj.className = 'disabled';
                          }
                          toggles.all.txt.nodeValue = (rulerStatus === 1 || guideStatus === 1) ? 'Hide all' : 'Show all';
                          toggles.lock.txt.nodeValue = (locked === 0) ? 'Lock rulers' : 'Unlock rulers';
                          toggles.details.txt.nodeValue = (detailsStatus === 0) ? 'Show detailed info' : 'Hide detailed info';
                          toggles.snapdom.txt.nodeValue = (snapDom === 0) ? 'Snap to DOM' : 'Turn off snap to DOM';
                          toggles.open.obj.className = (gridListLen > 0) ? '' : 'disabled';
                          menuList.style.display = (status === 0) ? 'inline-block' : 'none';
                          status = 1 - status;
                        });
                      };
                      this.render();
                      this.close = function() {
                        if (menuList !== null) {
                          menuList.style.display = 'none';
                          status = 0;
                        }
                      };
                    },
                    SnapDialog = function() {
                      var dialog = null,
                        xInput = null,
                        yInput = null,
                        self = this;
                      this.render = function() {
                        if (dialog === null) {
                          dialog = document.createElement('div');
                          xInput = document.createElement('input');
                          yInput = xInput.cloneNode(false);
                          var text = document.createTextNode(''),
                            okBtn = document.createElement('button'),
                            xLabel = document.createElement('label'),
                            titleBar = dialog.cloneNode(false),
                            dialogWrapper = dialog.cloneNode(false),
                            inputWrapper = dialog.cloneNode(false),
                            btnWrapper = dialog.cloneNode(false),
                            resetBtn = okBtn.cloneNode(false),
                            cancelBtn = okBtn.cloneNode(false),
                            yLabel = xLabel.cloneNode(false),
                            titleBarTxt = text.cloneNode(false),
                            xLabelTxt = text.cloneNode(false),
                            yLabelTxt = text.cloneNode(false),
                            okBtnTxt = text.cloneNode(false),
                            resetBtnTxt = text.cloneNode(false),
                            cancelBtnTxt = text.cloneNode(false);
                          titleBarTxt.nodeValue = 'Snap guides to';
                          xLabelTxt.nodeValue = 'X';
                          yLabelTxt.nodeValue = 'Y';
                          okBtnTxt.nodeValue = 'OK';
                          resetBtnTxt.nodeValue = 'Reset';
                          cancelBtnTxt.nodeValue = 'Cancel';
                          dialog.className = 'dialog snap-dialog';
                          titleBar.className = 'title-bar';
                          dialogWrapper.className = 'wrapper';
                          xLabel.className = 'rg-x-label';
                          xLabel.setAttribute('for', 'rg-x-snap');
                          yLabel.className = 'rg-y-label';
                          yLabel.setAttribute('for', 'rg-y-snap');
                          xInput.setAttribute('type', 'number');
                          xInput.value = '100';
                          xInput.id = 'rg-x-snap';
                          xInput.setAttribute('type', 'number');
                          yInput.value = '100';
                          yInput.id = 'rg-y-snap';
                          okBtn.className = 'ok-btn';
                          resetBtn.className = 'reset-btn';
                          cancelBtn.className = 'cancel-btn';
                          titleBar.appendChild(titleBarTxt);
                          xLabel.appendChild(xLabelTxt);
                          yLabel.appendChild(yLabelTxt);
                          okBtn.appendChild(okBtnTxt);
                          resetBtn.appendChild(resetBtnTxt);
                          cancelBtn.appendChild(cancelBtnTxt);
                          inputWrapper.appendChild(xLabel);
                          inputWrapper.appendChild(xInput);
                          inputWrapper.appendChild(yLabel);
                          inputWrapper.appendChild(yInput);
                          inputWrapper.appendChild(resetBtn);
                          btnWrapper.appendChild(okBtn);
                          btnWrapper.appendChild(cancelBtn);
                          dialogWrapper.appendChild(inputWrapper);
                          dialogWrapper.appendChild(btnWrapper);
                          dialog.appendChild(titleBar);
                          dialog.appendChild(dialogWrapper);
                          body.appendChild(dialog);
                          evt.attach('mousedown', okBtn, function() {
                            xSnap = parseInt(xInput.value, 10);
                            ySnap = parseInt(yInput.value, 10);
                            self.close();
                          });
                          evt.attach('mousedown', resetBtn, function() {
                            xSnap = 0;
                            ySnap = 0;
                            self.close();
                          });
                          evt.attach('mousedown', cancelBtn, function() {
                            self.close();
                          });
                        }
                      };
                      this.render();
                      this.open = function() {
                        closeAllDialogs();
                        dialog.style.display = 'block';
                        dialog.style.left = ((doc.clientWidth - dialog.clientWidth) / 2) + 'px';
                        dialog.style.top = ((doc.clientHeight - dialog.clientHeight) / 2) + 'px';
                      };
                      this.close = function() {
                        dialog.style.display = 'none';
                      };
                    },
                    prepare = function() {
                      var style = document.createElement('style'),
                        size = getWindowSize(),
                        elements = document.getElementsByTagName('*'),
                        len = elements.length,
                        i = 0;
                      for (i; i < len; i = i + 1) {
                        domElements.push(elements[i]);
                      }
                      style.setAttribute('type', 'text/css');
                      if (style.styleSheet) {
                        style.styleSheet.cssText = cssText;
                      } else {
                        style.appendChild(document.createTextNode(cssText));
                      }
                      body.appendChild(style);
                      setTimeout(function() {
                        hRuler = new Ruler('h', 3000);
                        vRuler = new Ruler('v', 7000);
                        wrapper = document.createElement('div');
                        gInfoBlockWrapper = wrapper.cloneNode(false);
                        wrapper.className = 'rg-overlay';
                        gInfoBlockWrapper.className = 'info-block-wrapper';
                        wrapper.style.width = (size[0]) + 'px';
                        wrapper.style.height = (size[1]) + 'px';
                        wrapper.appendChild(hRuler);
                        wrapper.appendChild(vRuler);
                        wrapper.appendChild(gInfoBlockWrapper);
                        body.appendChild(wrapper);
                        domDimensions = calculateDomDimensions();
                        menu = new Menu();
                        snapDialog = new SnapDialog();
                        openGridDialog = new OpenGridDialog();
                        dialogs = [snapDialog, openGridDialog];
                      }, 10);
                    };
                  prepare();
                  this.status = 1;
                  this.disable = function() {
                    if (vRuler !== null) {
                      deleteGuides();
                      vRuler.style.display = 'none';
                      hRuler.style.display = 'none';
                      wrapper.style.display = 'none';
                      menuBtn.style.display = 'none';
                    }
                    rulerStatus = 0;
                    this.status = 0;
                  };
                  this.enable = function() {
                    if (vRuler !== null) {
                      vRuler.style.display = 'block';
                      hRuler.style.display = 'block';
                      wrapper.style.display = 'block';
                      menuBtn.style.display = 'block';
                    }
                    rulerStatus = 1;
                    this.status = 1;
                  };
                  evt.attach('mousedown', document, function(e, src) {
                    var x = e.clientX,
                      y = e.clientY,
                      guide = null,
                      guideInfo = null,
                      guideInfoText = null,
                      scrollPos = getScrollPos(),
                      snap = 0;
                    if (src.className.indexOf('menu-btn') === -1) {
                      menu.close();
                    }
                    if (vBound === 0) {
                      vBound = vRuler.offsetWidth;
                      hBound = hRuler.offsetHeight;
                    }
                    if (((x > vBound && y < hBound) || (y > hBound && x < vBound)) && rulerStatus === 1) {
                      guide = document.createElement('div');
                      guideInfo = guide.cloneNode(false);
                      guideInfoText = document.createTextNode('');
                      gUid = 'guide-' + guidesCnt;
                      guideInfo.className = 'info';
                      guideInfo.appendChild(guideInfoText);
                      guide.appendChild(guideInfo);
                      if (x > vBound && y < hBound) {
                        guide.className = 'guide h draggable';
                        guide.style.top = (e.clientY + scrollPos[0]) + 'px';
                        guideInfo.style.left = (x + scrollPos[1] + 10) + 'px';
                        guide.type = 'h';
                        snap = ySnap;
                        mode = 2;
                      } else if (y > hBound && x < vBound) {
                        guide.className = 'guide v draggable';
                        guide.style.left = (x + scrollPos[1]) + 'px';
                        guideInfo.style.top = ((y + scrollPos[0]) - 35) + 'px';
                        guide.type = 'v';
                        snap = xSnap;
                        mode = 1;
                      }
                      guide.id = gUid;
                      guide.info = guideInfo;
                      guide.text = guideInfoText;
                      guide.x = 0;
                      guide.y = 0;
                      guides[gUid] = guide;
                      wrapper.appendChild(guide);
                      dragdrop.set(guide, {
                        mode: mode,
                        onstart: function(elem) {
                          var text = (elem.mode === 1) ? parseInt(elem.style.left, 10) + 2 : parseInt(elem.style.top, 10) + 2;
                          elem.text.nodeValue = text + 'px';
                          if (elem.over !== undefined) {
                            evt.detach('mouseover', elem, elem.over);
                            evt.detach('mouseout', elem, elem.out);
                          }
                        },
                        onmove: function(elem) {
                          var text = '',
                            pos = 0,
                            dims = [],
                            len = 0,
                            i = 0;
                          pos = (elem.mode === 1) ? elem.style.left : elem.style.top;
                          pos = parseInt(pos, 10);
                          if (snapDom === 1) {
                            dims = domDimensions[elem.mode - 1];
                            for (i, len = dims.length; i < len; i = i + 1) {
                              if (pos <= dims[i]) {
                                pos = dims[i];
                                break;
                              }
                            }
                          }
                          text = pos + 'px';
                          if (elem.mode === 1) {
                            elem.style.left = (pos - 2) + 'px';
                            elem.x = pos;
                          } else {
                            elem.style.top = (pos - 2) + 'px';
                            elem.y = pos;
                          }
                          elem.text.nodeValue = text;
                        },
                        onstop: function(elem) {
                          elem.over = evt.attach('mouseover', elem, function(e, src) {
                            if (src.className === 'guide v draggable') {
                              elem.info.style.top = ((e.clientY + scrollPos[0]) - 35) + 'px';
                            } else if (src.className === 'guide h draggable') {
                              elem.info.style.left = (e.clientX + scrollPos[1] + 10) + 'px';
                            }
                            elem.info.style.display = 'block';
                          });
                          elem.out = evt.attach('mouseout', elem, function() {
                            elem.info.style.display = 'none';
                          });
                        },
                        snap: snap
                      });
                      dragdrop.start(e, guide);
                      guidesCnt = guidesCnt + 1;
                    }
                  });
                  evt.attach('mouseup', document, function(e, src) {
                    removeInboundGuide(src, src.id);
                    if (detailsStatus === 1) {
                      showDetailedInfo();
                    }
                  });
                  evt.attach('keyup', document, function(e) {
                    if (e.ctrlKey === true && e.altKey === true) {
                      switch (e.keyCode) {
                        case 83:
                          saveGrid();
                          break;
                        case 82:
                          toggleRulers();
                          break;
                        case 79:
                          openGridDialog.open();
                          break;
                        case 76:
                          toggleRulersLock();
                          break;
                        case 73:
                          detailsStatus = 1 - detailsStatus;
                          showDetailedInfo();
                          break;
                        case 71:
                          toggleGuides();
                          break;
                        case 69:
                          snapDom = 1 - snapDom;
                          if (snapDom === 1) {
                            domDimensions = calculateDomDimensions();
                          }
                          break;
                        case 68:
                          deleteGuides();
                          break;
                        case 67:
                          snapDialog.open();
                          break;
                        case 65:
                          if (rulerStatus === 1 || guideStatus === 1) {
                            rulerStatus = guideStatus = 1;
                            wrapper.style.display = 'none';
                          } else {
                            rulerStatus = guideStatus = 0;
                            wrapper.style.display = 'block';
                          }
                          toggleRulers();
                          toggleGuides();
                          break;
                      }
                    }
                  });
                  evt.attach('resize', window, function() {
                    var size = getWindowSize();
                    wrapper.style.width = size[0] + 'px';
                    wrapper.style.height = size[1] + 'px';
                    if (resizeTimer !== null) {
                      window.clearTimeout(resizeTimer);
                    }
                    if (snapDom === 1) {
                      resizeTimer = window.setTimeout(function() {
                        domDimensions = calculateDomDimensions();
                      }, 100);
                    }
                  });
                };
                var evt = new Event(),
                  dragdrop = new Dragdrop(evt);
                if (window.rg === undefined) {
                  window.rg = new RulersGuides(evt, dragdrop);
                  window.rg.status = 0;
                }
                if (window.rg.status === 1) {
                  window.rg.disable();
                } else {
                  window.rg.enable();
                }
              })()
        },

        xray: function() {
            function loadScript(scriptURL) {
                var scriptElem = document.createElement('SCRIPT');
                scriptElem.setAttribute('language', 'JavaScript');
                scriptElem.setAttribute('src', scriptURL);
                document.body.appendChild(scriptElem);
            }
            loadScript('https://westciv.com/xray/thexray.js');
        },

        resize: function() {
           (function(d){if(self!=top||d.getElementById('toolbar')&&d.getElementById('toolbar').getAttribute('data-resizer'))return false;d.write('<!DOCTYPE HTML><html style="opacity:0;"><head><meta charset="utf-8"/></head><body><a data-viewport="320x480" data-icon="mobile">Mobile (e.g. Apple iPhone)</a><a data-viewport="320x568" data-icon="mobile" data-version="5">Apple iPhone 5</a><a data-viewport="375×667" data-icon="mobile" data-version="7">Apple iPhone 7</a><a data-viewport="414×736" data-icon="mobile" data-version="7+">Apple iPhone 7 Plus</a><a data-viewport="600x800" data-icon="small-tablet">Small Tablet</a><a data-viewport="768x1024" data-icon="tablet">Tablet (e.g. Apple iPad 2-3rd, mini)</a><a data-viewport="1280x800" data-icon="notebook">Widescreen</a><a data-viewport="1920×1080" data-icon="tv">HDTV 1080p</a><script src="https://lab.maltewassermann.com/viewport-resizer/resizer.min.js"></script></body></html>')})(document);
        },

        redact: function() {
            var body = document.getElementsByTagName("BODY")[0];
            if (body.classList.contains('gns-blur')) {
                // remove redaction
                body.classList.remove('gns-blur');
            } else {
                // add redaction
                body.className += ' ' + 'gns-blur';
            }
        },

        edit: function() {
            var body = document.getElementsByTagName("BODY")[0];
            if (body.classList.contains('gns-edit')) {
                // turn off page editing
                body.classList.remove('gns-edit');
                document.designMode = "off";
            } else {
                // turn on page editing
                body.className += ' ' + 'gns-edit';
                document.designMode = "on";
            }
        }

    }, // end GENESYS.Toolbar

    GENESYS.includeHTML = {
        init: function () {
            var z, i, el, file, xhttp;
            // loop through a collection of all HTML elements
            z = document.getElementsByTagName("*");
            for (i = 0; i < z.length; i++) {
                el = z[i];
                // search for elements with a certain attribute
                file = el.getAttribute("gns-include-html");
                if (file) {
                // make an HTTP request using the attribute value as the file name
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4) {
                    if (this.status == 200) {el.innerHTML = this.responseText;}
                    if (this.status == 404) {el.innerHTML = "Page not found.";}
                    // remove the attribute, and call this function once more
                    el.removeAttribute("gns-include-html");
                    }
                }
                xhttp.open("GET", file, true);
                xhttp.send();
                return;
                }
            }
        }
    }

    // attach events
    if (document.readyState === 'loading') {
        document.addEventListener("DOMContentLoaded", function() {
            GENESYS.Toolbar.init();
            GENESYS.Toolbar.loadResources();
            GENESYS.Toolbar.loadSettings();
            GENESYS.includeHTML.init();
        });
        document.addEventListener("keyup", function(event) {
            if (event.keyCode == 192) { /* this is the tilde ~ key */
                GENESYS.Toolbar.toggle();
            }
        })
    };

})();  // end the anonymous function

function hasClass( target, className ) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}
