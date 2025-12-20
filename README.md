# MyReceipt Rest in Proxy (R.I.P.)

---

---

## Maintenance by Prof. NOTA Evergreen Standard

This repository is intentionally **frozen** and designed to remain evergreen
while staying production-safe.

No build system, package manager, or runtime dependency is used by design.

### Runtime

- Runtime: **None (static HTML / CSS / Vanilla JS)**
- Build step: **None**
- Package manager: **None**
- Dependency model:
  - Local static assets only
  - Optional Vercel Insights script via Vercel
- Deploy target:
  - **Vercel (static hosting)**
  - ~~Netlify~~
  - ~~Self-hosted / Docker~~
  - ~~Other platform~~

### Asset & Cache Policy (Frozen)

- JS/CSS filenames are stable (not content-hashed)
- Cache headers rely on platform defaults; avoid `immutable` for JS/CSS unless content-hashed
- HTML files are served with revalidation enabled
- No further JS/CSS changes are expected

### Maintenance Policy

There are **no routine dependency updates**.

Recommended periodic checks (manual, optional):

1. Verify deployment health:
   - No 404 errors
   - No mixed-content warnings
2. Verify headers:
   - Cache-Control
   - Security headers (nosniff, referrer-policy, etc.)
3. Verify external services:
   - Analytics IDs still active
   - CDN links still valid

### Change Policy

- JS/CSS changes: **Not allowed**
- Asset updates: **Not allowed**
- Content updates:
  - HTML-only
  - Must not introduce new runtime dependencies

Any future functional change must be done in a **new repository or versioned successor**.

---

---

> Shush, We are playing, learning, and working. 🤫 🤫 🤫 🤫

- 😄 &nbsp; We are [Prof. NOTA](https://deeplink.endhonesa.com/), per/pers.
- 🤙 &nbsp; We are currently playing.
- 🌱 &nbsp; We are currently learning.
- 🔭 &nbsp; We are currently working.
- 👯 &nbsp; We are not looking to collaborate.
- 🤔 &nbsp; We are not looking for help.
- 💬 &nbsp; Don't ask us about that.
- 📫 &nbsp; Don't try to reach us.
- ⚡ &nbsp; Fun fact: [The King's NFTs project](https://docs.endhonesa.com/)

> Here are some ideas to get you started:

MyReceipt Rest in Proxy (R.I.P.)!!!! Since a home is all he wanted to be, so this is a home for him in 0101 Universe, even just a straight line of our origin.

> Regards
>
> [Prof. NOTA](https://deeplink.endhonesa.com/)
>
> [init.endhonesa.com](https://init.endhonesa.com/)
