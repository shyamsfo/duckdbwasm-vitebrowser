# @nudata/nu-duck

A browser script that loads DuckDB-WASM and exposes a ready-to-use connection as `window.nu_duck`. Load it from a CDN and run SQL queries in the browser without bundling DuckDB into your own app.

---

## For Users

### Loading via CDN

jsDelivr and unpkg automatically serve any npm package. Once `@nudata/nu-duck` is published, load it with:

```html
<!-- jsDelivr -->
<script type="module" src="https://cdn.jsdelivr.net/npm/@nudata/nu-duck/dist/duck_wasm.js"></script>

<!-- unpkg -->
<script type="module" src="https://unpkg.com/@nudata/nu-duck/dist/duck_wasm.js"></script>
```

### Waiting for the connection

`window.nu_duck` is set asynchronously. Poll for it before querying:

```js
async function waitForDuck(timeout = 10000) {
    const start = Date.now();
    while (!window.nu_duck?.conn) {
        if (Date.now() - start > timeout) throw new Error('nu_duck timed out');
        await new Promise(r => setTimeout(r, 50));
    }
    return window.nu_duck;
}

const duck = await waitForDuck();
const result = await duck.conn.query('SELECT 42 AS answer');
console.log(result.toArray());
```

### API

`window.nu_duck` exposes three properties:

| Property | Description |
|---|---|
| `conn` | `AsyncDuckDBConnection` — use this to run queries |
| `db` | `AsyncDuckDB` — the database instance |
| `worker` | The underlying `Worker` |

### Running queries

```js
// Simple query — returns an Apache Arrow Table
const result = await window.nu_duck.conn.query('SELECT * FROM generate_series(1, 5) t(v)');
console.log(result.toArray());

// Convert to plain JSON
const rows = JSON.parse(JSON.stringify(result.toArray()));

// Prepared statement (use for repeated queries or user input)
const stmt = await window.nu_duck.conn.prepare('SELECT (v + ?)::INTEGER AS v FROM generate_series(0, 4) t(v)');
const res = await stmt.query(10);
```

### Teardown

```js
await window.nu_duck.conn.close();
await window.nu_duck.db.terminate();
await window.nu_duck.worker.terminate();
window.nu_duck = null;
```

---

## For Developers

### Setup

```bash
yarn install
```

### Daily workflow

```bash
yarn dev          # dev server at localhost:5173 with hot reload
yarn build        # production build → dist/
yarn preview      # serve dist/ locally — closest approximation to CDN delivery
yarn test         # build + serve dist/ + run Playwright tests in Chrome and Firefox
yarn build:watch  # rebuild on file changes (useful when testing against another local app)
```

Use `yarn dev` when iterating on `main.js`. Use `yarn preview` or `yarn test` to validate the actual production artifact.

### Project structure

```
main.js             # entire library — loads DuckDB-WASM and sets window.nu_duck
vite.config.js      # build config: base './' for CDN-relative URLs, fixed output filenames
playwright.config.js
tests/load.spec.js  # smoke tests: conn/db/worker globals, basic query, version, prepared stmt
dist/               # build output — all files must be deployed together
  duck_wasm.js        main bundle
  duck_wasm.css
  duckdb-mvp.wasm     } fetched at runtime by duck_wasm.js
  duckdb-eh.wasm      }
  duckdb-browser-mvp.worker.js  }
  duckdb-browser-eh.worker.js   }
```

### Updating DuckDB-WASM

1. Update `@duckdb/duckdb-wasm` version in `package.json`
2. `yarn install`
3. `yarn test` — confirm nothing broke
4. Bump version in `package.json`
5. Publish (see below)

### Publishing to npm

```bash
npm login         # first time only
npm whoami        # confirm you're on the right account
npm pack --dry-run  # verify only dist/ files are included before publishing
npm publish --access public
```

`prepublishOnly` runs `yarn clean && yarn build` automatically before upload.
`postpublish` pushes the commit and tags to git automatically after a successful publish.

### Useful npm tag commands

```bash
yarn showtags           # list all dist-tags for @nudata/nu-duck
yarn tl                 # yarn tag list (all packages)
yarn tl_2               # npm dist-tag ls @nudata/nu-duck latest
```
