import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    // Build first, then serve the production dist/ — this tests the actual CDN artifact
    webServer: {
        command: 'yarn build && yarn preview',
        url: 'http://localhost:4173',
        reuseExistingServer: !process.env.CI,
    },
    use: {
        baseURL: 'http://localhost:4173',
    },
    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
        { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    ],
});
