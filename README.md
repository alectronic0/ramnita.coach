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
index.html        Landing page (hero, about, journey, services, PT + map, FAQ, contact form)
store.html        Shop — affiliate picks (Amazon tag minty03-21) + Linktree
client.html       Client progress dashboard (beta, noindex)
thanks.html       Contact-form success page
404.html          Not-found page
css/style.css     Design system & layout
css/dashboard.css Client dashboard styles
js/main.js        Mobile nav, scroll-reveal, footer year
js/map.js         Leaflet training-locations map (coords config at top)
js/dashboard.js   Progress charts (weight line, workouts bars, stat tiles)
data/clients/     Per-client JSON data for the dashboard
assets/           Favicon, gym logos, vendored Leaflet
CNAME             Custom domain for GitHub Pages (raminta.coach)
robots.txt        Crawler rules + sitemap pointer
sitemap.xml       Sitemap for search engines
SETUP.md          DNS, GitHub Pages, email-forwarding & form-activation guide
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
