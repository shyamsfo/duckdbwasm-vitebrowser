import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for top-level await in main.js to finish and window.nu_duck to be populated
    await page.waitForFunction(() => window.nu_duck?.conn != null, { timeout: 30000 });
});

test('window.nu_duck exposes conn, db, and worker', async ({ page }) => {
    const keys = await page.evaluate(() => Object.keys(window.nu_duck));
    expect(keys).toEqual(expect.arrayContaining(['conn', 'db', 'worker']));
});

test('can run a basic query', async ({ page }) => {
    const rows = await page.evaluate(async () => {
        const q = await window.nu_duck.conn.query('SELECT 42 AS answer');
        return JSON.parse(JSON.stringify(q.toArray()));
    });
    expect(rows[0].answer).toBe(42);
});

test('DuckDB version string is present', async ({ page }) => {
    const rows = await page.evaluate(async () => {
        const q = await window.nu_duck.conn.query('SELECT * FROM pragma_version()');
        return JSON.parse(JSON.stringify(q.toArray()));
    });
    expect(rows[0].library_version).toMatch(/^v\d+\.\d+/);
});

test('prepared statements work', async ({ page }) => {
    const rows = await page.evaluate(async () => {
        const stmt = await window.nu_duck.conn.prepare(
            'SELECT (v + ?)::INTEGER AS v FROM generate_series(0, 4) AS t(v)'
        );
        const res = await stmt.query(10);
        return JSON.parse(JSON.stringify(res.toArray(), (_, val) =>
            typeof val === 'bigint' ? Number(val) : val
        ));
    });
    expect(rows).toHaveLength(5);
    expect(rows[0].v).toBe(10);
    expect(rows[4].v).toBe(14);
});
