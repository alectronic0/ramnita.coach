# raminta.coach — Cloudflare, GitHub Pages & Email Setup Guide

DNS, edge and email for `raminta.coach` run on **Cloudflare (free plan)**; the
site itself is hosted on **GitHub Pages**. This guide covers the four one-time
jobs, in the order that avoids the GitHub Pages certificate deadlock:

1. Publishing this site on GitHub Pages
2. Pointing `raminta.coach` at GitHub Pages via Cloudflare DNS
3. Forwarding `@raminta.coach` email to `ptwithminty@gmail.com` (free)
4. Turning on the worthwhile free-tier Cloudflare settings

> There is a companion cross-domain runbook (this zone plus `alectronic.co`)
> with copy-paste record tables — ask if you need the link again.

---

## 1. Enable GitHub Pages

1. Repo → **Settings** → **Pages**.
2. **Build and deployment** → **Source:** Deploy from a branch,
   **Branch:** `main` (folder: `/ (root)`), **Save**.
3. The `CNAME` file in this repo already contains `raminta.coach`, so GitHub
   picks up the custom domain automatically once DNS resolves.

## 2. DNS on Cloudflare → GitHub Pages

Add `raminta.coach` as a zone in Cloudflare and switch the nameservers at your
registrar to the two Cloudflare provides. Then add these records.

### Apex (`raminta.coach`) — four A records, host `@`

| Type | Name | Value           |
|------|------|-----------------|
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

Optional IPv6 (AAAA, host `@`): `2606:50c0:8000::153`, `2606:50c0:8001::153`,
`2606:50c0:8002::153`, `2606:50c0:8003::153`.

### www

| Type  | Name | Value                    |
|-------|------|--------------------------|
| CNAME | www  | `alectronic0.github.io`  |

### Proxy staging — the important bit

Keep every record above **DNS-only (grey cloud)** at first. GitHub Pages must
reach the domain unproxied to issue its TLS certificate:

1. In **Settings → Pages**, set the custom domain to `raminta.coach` and wait
   for the DNS check to pass.
2. Tick **Enforce HTTPS** once it becomes available.
3. *Only then* switch the records to **proxied (orange cloud)** and set
   Cloudflare **SSL/TLS → Full (strict)** (see §4).

> ⚠️ Proxying before the certificate exists, or using SSL/TLS mode
> **Flexible**, causes cert errors or an infinite redirect loop. Use
> **Full (strict)** — GitHub already presents a valid certificate.

## 3. Forward @raminta.coach email — Cloudflare Email Routing (free)

Email forwarding is free and separate from the website records.

1. Cloudflare → select the `raminta.coach` zone → **Email** → **Email Routing**
   → **Get started**. Accept the MX + SPF (TXT) records it adds for you.
2. Under **Destination addresses**, add `ptwithminty@gmail.com` and click the
   verification link Cloudflare emails to that inbox.
3. Under **Routing rules**:
   - add `info@raminta.coach` → forward to `ptwithminty@gmail.com`, and
   - enable **Catch-all** so nothing sent to the domain is lost.

> Cloudflare Email Routing and a full mailbox provider (e.g. Google Workspace)
> can't share MX records on the same domain. Forwarding is receive-only.

### Replying *as* info@raminta.coach from Gmail (optional)

1. Gmail (`ptwithminty@gmail.com`) → ⚙️ **Settings** → **Accounts and Import**
   → **Send mail as** → **Add another email address**.
2. Enter `info@raminta.coach` and follow the SMTP/confirmation steps.
3. Keep the SPF TXT record Cloudflare added
   (`v=spf1 include:_spf.mx.cloudflare.net ~all`) so replies avoid spam. A
   `_dmarc` TXT of `v=DMARC1; p=none;` is a good monitoring default.

### Activate the contact form (one-time)

The form posts to [FormSubmit](https://formsubmit.co/), which emails
submissions to `info@raminta.coach` — no backend needed. After forwarding
works, submit the form once yourself and click **Activate** in the confirmation
email (forwarded to `ptwithminty@gmail.com`). Submissions flow normally after.

## 4. Free-tier Cloudflare settings worth enabling

Apply per zone once the records are proxied (§2 step 3). All are $0:

| Setting | Value | Why |
|---------|-------|-----|
| SSL/TLS mode | **Full (strict)** | End-to-end TLS to GitHub's cert. Most important toggle. |
| Always Use HTTPS | On | Edge-redirects `http://` → `https://`. |
| Automatic HTTPS Rewrites | On | Upgrades mixed-content links. |
| Brotli | On | Free compression. |
| Cache Rule | Long edge TTL | The site is fully static — cache hard for a real speed win. |
| DNSSEC | Enable | Add the DS record at your registrar; stops DNS spoofing. |
| Bot Fight Mode | On | Baseline bot protection. |
| HSTS | On *after* HTTPS is proven | Sticky and hard to undo — enable only when confident. |
| Web Analytics | On | Privacy-first, cookieless stats. |

Optional: transfer the domain to **Cloudflare Registrar** later for at-cost
pricing and free WHOIS privacy (confirm `.coach` is supported first).

### Test it

Send a test email to `info@raminta.coach` from another account and confirm it
reaches `ptwithminty@gmail.com` (check spam the first time). Load
`https://raminta.coach` and `https://www.raminta.coach` and confirm both serve
the site over HTTPS with no certificate warning.
