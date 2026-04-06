# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn install        # Install dependencies
yarn dev            # Dev server at localhost:5173 (hot reload)
yarn build          # Build to dist/
yarn preview        # Preview the production build
```

Use `yarn` (not `npm`) — a `yarn.lock` is present and there's an existing `yarn-error.log` suggesting npm was tried and failed.

## Purpose

This repo is a **build tool/pipeline** for producing a self-contained `duck_wasm.js` bundle that can be dropped into other projects (specifically a Flask app). It is not a standalone app — the `dist/` output is what gets published elsewhere.

The build produces fixed-name files (no content hashes) via `vite.config.js` rollup settings, making the dist assets easy to reference by name in the consuming project.

## Architecture

**Single entry point:** `main.js` is the only source file of substance.

**What it does at runtime:**
1. Imports duckdb-wasm and its two bundle variants (MVP = broad compatibility, EH = exception handling / modern browsers)
2. Calls `duckdb.selectBundle()` to auto-pick the right bundle for the current browser
3. Instantiates `AsyncDuckDB` with a Web Worker
4. Exposes the connection, db, and worker on `window.nu_duck` for use by the consuming page

**Key architectural detail — `window.nu_duck`:** The built `duck_wasm.js` is designed to be loaded as a script tag in other pages. It exposes `window.nu_duck.conn`, `window.nu_duck.db`, and `window.nu_duck.worker` as globals. Downstream code calls `window.nu_duck.conn.query(...)` to run SQL.

**Worker files in dist:** The `.wasm` and `.worker.js` files in `dist/` must be served alongside `duck_wasm.js` — DuckDB-wasm fetches them at runtime via URL. The Vite config uses `?url` imports to wire up the correct paths at build time.

## Updating the duckdb-wasm version

1. Update the version in `package.json`
2. Run `yarn install`
3. Run `yarn build`
4. Copy `dist/` assets to the consuming project (nudata repo)

The README has detailed manual steps if the automated build doesn't work correctly.