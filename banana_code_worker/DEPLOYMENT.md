# Banana Code Worker

Static Cloudflare Worker site for the Banana Code QR destination.

Cloudflare Git settings:

- Project name: `banana-code`
- Production branch: `main`
- Root directory: `banana_code_worker`
- Build command: none
- Deploy command: `npx wrangler deploy`

The root page is the Banana Code Terms of Service. After acceptance, Continue opens `/404.html`. Unknown paths use the custom `404.html` page.
