window.addEventListener('load', function() {
    if (typeof CookieConsent === 'undefined') return;

    function handleConsentUpdate() {
        const analyticsAccepted = CookieConsent.acceptedCategory('analytics');

        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': analyticsAccepted ? 'granted' : 'denied'
            });
        }

        if (!analyticsAccepted) {
            const cookies = document.cookie.split(';');
            const domain = window.location.hostname;
            const parts = domain.split('.');
            const rootDomain = parts.length > 1 ? parts.slice(-2).join('.') : domain;

            cookies.forEach(function(c) {
                const name = c.split('=')[0].trim();
                if (name.startsWith('_ga') || name.startsWith('_gid') || name.startsWith('_gat')) {
                    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + domain + ';';
                    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + rootDomain + ';';
                }
            });
        }
    }

    CookieConsent.run({
        autoClearCookies: true,
        guiOptions: {
            consentModal: {
                layout: 'box',
                position: 'bottom left',
                equalWeightButtons: true,
                flipButtons: false
            },
            preferencesModal: {
                layout: 'box',
                position: 'left',
                equalWeightButtons: true,
                flipButtons: false
            }
        },
        categories: {
            necessary: {
                readOnly: true
            },
            analytics: {
                autoClear: {
                    cookies: [
                        { name: /^(_ga|_gid|_gat|_ga_.*)/ }
                    ]
                }
            }
        },
        language: {
            default: 'en',
            translations: {
                en: {
                    consentModal: {
                        title: "Privacy & Cookies Notice 🍪",
                        description: "We use cookies to enhance your browsing experience and analyze site traffic anonymously.",
                        acceptAllBtn: "Accept All",
                        acceptNecessaryBtn: "Reject Non-Essential",
                        showPreferencesBtn: "Cookie Settings"
                    },
                    preferencesModal: {
                        title: "Cookie Settings",
                        acceptAllBtn: "Accept All",
                        acceptNecessaryBtn: "Reject Non-Essential",
                        closeIconLabel: "Close",
                        sections: [
                            {
                                title: "Cookie Policy",
                                description: "We use cookies to ensure basic website features work seamlessly and to understand site usage."
                            },
                            {
                                title: "Strictly Necessary Cookies",
                                description: "Essential for site navigation and secure functioning.",
                                category: "necessary"
                            },
                            {
                                title: "Analytics Cookies",
                                description: "Allows us to count visits and traffic sources to measure and improve performance.",
                                category: "analytics"
                            }
                        ]
                    }
                }
            }
        },
        onAccept: handleConsentUpdate,
        onChange: handleConsentUpdate
    });

    // Bind floating cookie button strictly to open the initial consent modal
    document.addEventListener('click', function(e) {
        const btn = e.target.closest('.cookie-floating-btn') || e.target.closest('[data-cc="show-preferencesModal"]');
        if (btn) {
            e.preventDefault();
            e.stopPropagation();
            if (typeof CookieConsent !== 'undefined' && typeof CookieConsent.show === 'function') {
                CookieConsent.show(true);
            }
        }
    }, true);
});
