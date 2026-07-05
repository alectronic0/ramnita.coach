# raminta.coach — Domain, GitHub Pages & Email Setup Guide

This guide covers the three one-time setup jobs:

1. Publishing this site on GitHub Pages
2. Pointing the `raminta.coach` domain at GitHub Pages
3. Forwarding email from `@raminta.coach` to `ptwithminty@gmail.com`

---

## 1. Enable GitHub Pages

1. Go to the repository on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment**, set:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (folder: `/ (root)`)
3. Click **Save**. Within a minute or two the site will be live at
   `https://<your-username>.github.io/<repo-name>/`.

> The `CNAME` file in this repo already contains `raminta.coach`, so GitHub
> will automatically pick up the custom domain once DNS is configured below.

## 2. Point raminta.coach at GitHub Pages (DNS)

Log in to the registrar where you bought `raminta.coach` and open its
**DNS management / DNS records** page. Add these records:

### Apex domain (raminta.coach)

Create **four A records**, all with host/name `@`:

| Type | Host | Value           |
|------|------|-----------------|
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

Optionally also add AAAA records (IPv6): `2606:50c0:8000::153`,
`2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.

### www subdomain

| Type  | Host | Value                        |
|-------|------|------------------------------|
| CNAME | www  | `<your-username>.github.io.` |

(Replace `<your-username>` with the GitHub account/org that owns this repo.)

### Finish in GitHub

1. Back in **Settings → Pages**, enter `raminta.coach` in the
   **Custom domain** field and click **Save**.
2. Wait for the DNS check to pass (can take from a few minutes up to
   24–48 hours, usually well under an hour).
3. Tick **Enforce HTTPS** once it becomes available — GitHub provisions a
   free TLS certificate automatically.

## 3. Forward @raminta.coach email to ptwithminty@gmail.com

Email forwarding is configured at your **domain provider**, not GitHub.
The site's links use `mailto:info@raminta.coach`, so at minimum forward
`info@raminta.coach`. Find the setup for your provider below.

> ⚠️ Whichever provider you use: forwarding needs **MX records** on the
> domain. These live alongside the A/CNAME records above and do not
> interfere with the website.

### Option A — Cloudflare (free, recommended)

If your DNS is on (or moved to) Cloudflare:

1. In the Cloudflare dashboard, select the `raminta.coach` zone.
2. Go to **Email** → **Email Routing** and click **Get started**.
3. Cloudflare adds the required MX and TXT (SPF) records for you — accept them.
4. Under **Destination addresses**, add `ptwithminty@gmail.com` and click the
   verification link Cloudflare emails to that inbox.
5. Under **Routing rules**, either:
   - add a custom address `info@raminta.coach` → forward to
     `ptwithminty@gmail.com`, or
   - enable **Catch-all** to forward *everything* `@raminta.coach`.

### Option B — Namecheap

1. **Domain List** → **Manage** next to `raminta.coach`.
2. On the **Domain** tab, find **Redirect Email** and click **Add Forwarder**
   (or set a **Catch-all**).
3. Alias: `info` → Forward to: `ptwithminty@gmail.com`. Save.
4. Namecheap requires its own **Email Forwarding MX** preset: on the
   **Advanced DNS** tab, under **Mail Settings**, choose **Email Forwarding**
   (this sets the MX records automatically). Changes take up to an hour.

### Option C — GoDaddy

GoDaddy no longer includes free forwarding on new domains — it may offer a
paid forwarding/Microsoft 365 add-on. If you have the forwarding feature:

1. **My Products** → **Domains** → select `raminta.coach`.
2. Open **Email Forwarding** → **Create forward**.
3. Forward `info@raminta.coach` → `ptwithminty@gmail.com`. Save (GoDaddy sets
   the MX records automatically).

If GoDaddy asks you to pay for forwarding, the free route is to move just the
DNS to Cloudflare (keep the domain registered at GoDaddy) and use Option A.

### Replying *as* info@raminta.coach from Gmail (optional)

Forwarding is receive-only. To also send from the branded address:

1. Gmail (ptwithminty@gmail.com) → ⚙️ **Settings** → **Accounts and Import**.
2. **Send mail as** → **Add another email address**.
3. Enter `info@raminta.coach`, untick "Treat as an alias" if unsure, and follow
   the SMTP steps for your provider (Cloudflare users typically pair this with
   a free SMTP relay or use Gmail's confirmation-code flow where offered).
4. Add an SPF TXT record at your DNS so replies don't land in spam, e.g. for
   Cloudflare Email Routing: `v=spf1 include:_spf.mx.cloudflare.net ~all`.

### Activate the contact form (one-time)

The website's contact form posts to [FormSubmit](https://formsubmit.co/), a free
service that emails submissions to `info@raminta.coach` — no backend needed.
One-time activation: after email forwarding works, submit the form once
yourself; FormSubmit sends a confirmation email to `info@raminta.coach`
(forwarded to `ptwithminty@gmail.com`) — click **Activate** in it. Submissions
flow normally from then on.

### Test it

Send a test email to `info@raminta.coach` from another account and confirm it
arrives at `ptwithminty@gmail.com`. Check spam the first time.
