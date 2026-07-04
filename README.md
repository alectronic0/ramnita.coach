# raminta.coach

Static website for **Raminta Coaching** — online fitness & nutrition coaching
for busy women, with in-person personal training in Welwyn Garden City,
Hertfordshire.

## Stack

- Plain HTML / CSS / JS — no build step, deploys straight to GitHub Pages
- Design system: white, soft green and soft beige palette
  (Fraunces display serif + Inter body font)

## Structure

```
index.html        Landing page (hero, about, journey, services, PT, FAQ, contact)
404.html          Not-found page
css/style.css     Design system & layout
js/main.js        Mobile nav, scroll-reveal, footer year
assets/           Favicon and images
CNAME             Custom domain for GitHub Pages (raminta.coach)
robots.txt        Crawler rules + sitemap pointer
sitemap.xml       Sitemap for search engines
SETUP.md          DNS, GitHub Pages & email-forwarding setup guide
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
