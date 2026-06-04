// @ts-check

import { defineConfig, devices } from '@playwright/test';

// Provide a stable test URL so route mocks can intercept form submissions
// even without a real .env file. The real URL is used when set.
process.env.VITE_FORMSPARK_URL ??= 'https://submit-form.com/e2e-test';

const isCI = !!process.env.CI;

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './e2e',
  snapshotPathTemplate: '{testDir}/{testFilePath}-snapshots/{arg}-{projectName}{ext}',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* 1 local retry handles transient parallelism flakes; CI uses 2 for network noise */
  retries: process.env.CI ? 2 : 1,
  /* Limit parallelism to 4 locally — unbounded workers cause snapshot flakiness
     under heavy contention; CI already uses 1. */
  workers: process.env.CI ? 1 : 4,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: isCI ? 'http://localhost:4173' : 'http://localhost:5173',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 7'] },
    },
    {
      name: 'Mobile Chrome Landscape',
      use: { ...devices['Pixel 7 landscape']}
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },

    /* Branded browsers are not available in the Playwright Docker image — local only. */
    ...(!isCI ? [
      {
        name: 'Microsoft Edge',
        use: { ...devices['Desktop Edge'], channel: 'msedge' as const },
      },
      {
        name: 'Google Chrome',
        use: { ...devices['Desktop Chrome'], channel: 'chrome' as const },
      },
    ] : []),
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: isCI ? 'npm run build && npm run preview' : 'npm run start',
    url: isCI ? 'http://localhost:4173' : 'http://localhost:5173',
    timeout: 120 * 1000,
    reuseExistingServer: !isCI,
  },
});
