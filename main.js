import * as duckdb from '@duckdb/duckdb-wasm';

// Use jsDelivr CDN URLs for the wasm and worker files — they are resolved
// automatically for the installed version of @duckdb/duckdb-wasm, so there
// is no need to bundle or self-host the wasm files.
const bundle = await duckdb.selectBundle(duckdb.getJsDelivrBundles());
// Worker must be same-origin; use a blob that importScripts the CDN URL (which has CORS headers)
const workerBlob = new Blob([`importScripts('${bundle.mainWorker}')`], { type: 'application/javascript' });
const worker = new Worker(URL.createObjectURL(workerBlob));
const logger = new duckdb.ConsoleLogger();
const db = new duckdb.AsyncDuckDB(logger, worker);
await db.instantiate(bundle.mainModule, bundle.pthreadWorker);

const conn = await db.connect();

let q = await conn.query('PRAGMA version');
console.log('[nu_duck] DuckDB version:', JSON.parse(JSON.stringify(q.toArray())));
async function do_version_check() {
    q = await window.nu_duck.conn.query(` select * from pragma_version();`); // Returns v = 101
    console.log("Query result for pragma_version here: ...")
    console.log(q);
    console.log('**************************************************')
    let xx = JSON.parse(JSON.stringify(q.toArray()));
    console.log(xx);
}
async function do_basic_queries() {

// Basic query
    console.log("Basic query");
    let q = await window.nu_duck.conn.query(`SELECT count(*)::INTEGER as v FROM generate_series(0, 100) t(v)`); // Returns v = 101
    console.log("Query result (Arrow Table):", q);

    q = await window.nu_duck.conn.query(` select * from pragma_version();`); // Returns v = 101
    console.log("Query result pragma_version ):", q);

// Copy of query result (JSON instead of Arrow Table)
    console.log('Query result copy (JSON):', JSON.parse(JSON.stringify(q.toArray())));
    console.log('');

// Prepare query
    console.log("Prepared query statement")
    const stmt = await window.nu_duck.conn.prepare( `SELECT (v + ?) as v FROM generate_series(0, 1000) as t(v);` );

// ... and run the query with materialized results
    const res = await stmt.query(234); // Returns 1001 entries ranging from v = 234 to 1,234
    console.log("Statement result (Table):", res);
    console.log('Statement result copy (JSON):',
        // Bug fix explained at: https://github.com/GoogleChromeLabs/jsbi/issues/30
        JSON.parse(JSON.stringify(res.toArray(), (key, value) =>
            typeof value === 'bigint'
                ? value.toString()
                : value // return everything else unchanged
        ))
    );
}

window.nu_duck = {};

window.nu_duck.conn = conn;
window.nu_duck.db = db;
window.nu_duck.worker = worker;

console.log('duckdb wasm loading complete. variables available as window.nu_duck.conn, window.nu_duck.db and window.nu_duck.worker')

async function do_close() {
    // Closing everything
    await window.nu_duck.conn.close();
    await window.nu_duck.db.terminate();
    await window.nu_duck.worker.terminate();
    window.nu_duck = null;
}

do_version_check();
do_basic_queries();
// do_close(); — call this manually to tear down the connection
