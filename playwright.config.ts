import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 45 * 1000,
  expect: { timeout: 15 * 1000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 5,
  maxFailures: process.env.CI ? 20: 20,
  reporter: [
    ['junit', { outputFile: '../results.xml' }],
    ['html'],
  ],
  use: {
    baseURL: 'https://demo.playwright.dev/todomvc',
    trace: 'on-first-retry',
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});
