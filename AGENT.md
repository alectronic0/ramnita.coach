# Raminta Coaching - Architecture & Implementation Notes

## Architecture Overview (MVC)
The site follows a lightweight client-side MVC pattern:
- **Model** (`js/content.js`): Contains site data, configurations, layout strings (like header/footer), and mock client data.
- **View** (`*.html`): The HTML files represent the presentation layer. They are kept clean and free of duplicated layout components.
- **Controller** (`js/app.js`): The main logic that glues the Model and View together. It dynamically injects the header and footer, handles scroll animations, user interactions, analytics events, and populates `client.html` with data from `content.js`.

## Unified Cookie Consent Strategy
The site uses Vanilla CookieConsent. We consolidated the configuration and library logic into a single `js/cookie.js` file. This reduces HTTP requests and ensures consistent behavior across all pages without duplicating script tags.

## JS-Injected Layout Rules
To prevent duplication across the multiple HTML files, the site relies on `js/app.js` to inject shared layout components (`<header>` and `<footer>`). 
- When `app.js` initializes, it checks for the existence of `window.SiteContent`.
- It then reads `window.SiteContent.header` and `window.SiteContent.footer` and injects them using `insertAdjacentHTML` into the DOM.

## Site-Specific Quirks
- The `client.html` file simulates a dynamic dashboard. It extracts the `data-client` attribute from the `<body>` element to load the corresponding data payload from `window.SiteContent.clients` instead of making network calls.
- CSS styling has been strictly consolidated into `css/style.css` without inline `<style>` tags or multiple CSS files.
- Google Analytics is fully integrated and respects the cookie consent choices via the `gtag` API.
