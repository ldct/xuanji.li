# xuanji-worker

Cloudflare Worker serving xuanji.li.

## What it does

- `/` — retro-styled homepage listing all redirects
- `/github`, `/ldct`, `/swift`, etc. — 302 redirects defined in the `redirects` object at the top of `src/index.js`

The homepage auto-generates from the `redirects` map, so adding a redirect automatically updates the listing.

## Adding a redirect

Add an entry to the `redirects` object in `src/index.js`:

```js
const redirects = {
  '/github': 'https://github.com/ldct',
  '/new-path': 'https://example.com',
};
```

## Deploy

```sh
cd /home/exedev/xuanji-worker
wrangler deploy
```

Auth is via the `CLOUDFLARE_API_TOKEN` env var. The token needs Workers Scripts Edit and Workers Routes Edit permissions.

## Structure

- `src/index.js` — worker source
- `wrangler.toml` — Cloudflare config (account ID, routes)
