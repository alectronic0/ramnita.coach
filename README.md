# raminta.coach

Static website for **Raminta Coaching** — online fitness & nutrition coaching
for busy men and women, with in-person personal training in Welwyn Garden City,
Hertfordshire.

## Stack

- Plain HTML / CSS / JS — no build step, deploys straight to GitHub Pages
- Design system: white, soft green and soft beige palette
  (Fraunces display serif + Inter body font)

## Structure

```
index.html          Landing page shell — sections rendered from js/content.js by js/app.js
calculator.html     Standalone calorie & macro calculator
store.html          Shop — affiliate picks (Amazon tag minty03-21) + Linktree
client.html         Client progress dashboard (beta, noindex)
thanks.html         Contact-form success page
404.html            Not-found page
css/style.css       Design system & layout (all styles)
js/content.js       Site content: sections, header/footer, FAQ, client data
js/app.js           Renders content, nav, scroll-reveal, map, calculator, analytics
js/cookie.js        Cookie consent (Vanilla CookieConsent + Google consent mode)
scripts/prerender.js  CI step: bakes rendered HTML into index.html for crawlers
worker/index.js     Cloudflare Worker — emails lead-quiz submissions via SMTP2GO
terraform/          Cloudflare infrastructure
assets/             Logos, gym logos, vendored Leaflet, img/ (coach photo)
CNAME               Custom domain for GitHub Pages (raminta.coach)
robots.txt          Crawler rules + sitemap pointer
sitemap.xml         Sitemap for search engines
SETUP.md            DNS, GitHub Pages, email-forwarding & form-activation guide
```

## Local preview

Any static server works:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deployment & domain

See [SETUP.md](SETUP.md) for GitHub Pages configuration, DNS records for
`raminta.coach`, and forwarding `info@raminta.coach` →
`ptwithminty@gmail.com`.

## Links

- Coaching plans: https://app.hubfit.com/plans/688387865c56841b3dd9c6ea
- Instagram: https://www.instagram.com/ramintacoaching/
- TikTok: https://www.tiktok.com/@ramintacoaching
- Linktree: https://linktr.ee/ramintacoaching
