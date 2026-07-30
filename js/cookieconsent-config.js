window.addEventListener('load', function() {
    if (typeof CookieConsent === 'undefined') return;

    CookieConsent.run({
        guiOptions: {
            consentModal: {
                layout: 'box',
                position: 'bottom right',
                equalWeightButtons: true,
                flipButtons: false
            },
            preferencesModal: {
                layout: 'box',
                position: 'right',
                equalWeightButtons: true,
                flipButtons: false
            }
        },
        categories: {
            necessary: {
                readOnly: true
            },
            analytics: {}
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
                        savePreferencesBtn: "Save Preferences",
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
        onAccept: function() {
            if (typeof gtag === 'function') {
                gtag('consent', 'update', {
                    'analytics_storage': CookieConsent.acceptedCategory('analytics') ? 'granted' : 'denied'
                });
            }
        },
        onChange: function() {
            if (typeof gtag === 'function') {
                gtag('consent', 'update', {
                    'analytics_storage': CookieConsent.acceptedCategory('analytics') ? 'granted' : 'denied'
                });
            }
        }
    });
});
