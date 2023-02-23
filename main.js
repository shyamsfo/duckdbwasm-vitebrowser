import './style.css'

import * as duckdb from '@duckdb/duckdb-wasm';
import duckdb_wasm from '@duckdb/duckdb-wasm/dist/duckdb-mvp.wasm?url';
import mvp_worker from '@duckdb/duckdb-wasm/dist/duckdb-browser-mvp.worker.js?url';
import duckdb_wasm_next from '@duckdb/duckdb-wasm/dist/duckdb-eh.wasm?url';
import eh_worker from '@duckdb/duckdb-wasm/dist/duckdb-browser-eh.worker.js?url';

const MANUAL_BUNDLES = {
    mvp: {
        mainModule: duckdb_wasm,
        mainWorker: mvp_worker,
    },
    eh: {
        mainModule: duckdb_wasm_next,
        mainWorker: eh_worker
    },
};

console.log('Starting duck connection...')

// Select a bundle based on browser checks
const bundle = await duckdb.selectBundle(MANUAL_BUNDLES);


// Instantiate the asynchronus version of DuckDB-wasm
const worker = new Worker(bundle.mainWorker);
const logger = new duckdb.ConsoleLogger();

const db = new duckdb.AsyncDuckDB(logger, worker);
await db.instantiate(bundle.mainModule, bundle.pthreadWorker);

const conn = await db.connect(); // Connect to db

console.log('Completed duck connection...')


async function do_basic_queries() {

// Basic query
    console.log("Basic query");
    let q = await window.duck.conn.query(`SELECT count(*)::INTEGER as v FROM generate_series(0, 100) t(v)`); // Returns v = 101
    console.log("Query result (Arrow Table):", q);

// Copy of query result (JSON instead of Arrow Table)
    console.log('Query result copy (JSON):', JSON.parse(JSON.stringify(q.toArray())));
    console.log('');

// Prepare query
    console.log("Prepared query statement")
    const stmt = await window.duck.conn.prepare( `SELECT (v + ?) as v FROM generate_series(0, 1000) as t(v);` );

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

window.duck = {};

window.duck.conn = conn;
window.duck.db = db;
window.duck.worker = worker;

console.log('duck loading complete. variables available as window.duck.conn, window.duck.db and window.duck.worker')


async function do_close() {
    // Closing everything
    await window.duck.conn.close();
    await window.duck.db.terminate();
    await window.duck.worker.terminate();
    window.duck = null;
}

// do_basic_queries();
// do_close();

