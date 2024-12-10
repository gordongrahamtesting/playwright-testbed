# playwright-testbed

Requires Node!

Install Playwright
`npm init playwright@latest`

Run tests
`npx playwright test`

The playwright.config.ts file includes several mechanisms for adjusting the test runs, for example:
- `timeout: 45 * 1000` Increasing the default test timeout from 30s
- `expect: { timeout: 15 * 1000 }` Increasing the default expect timeout from 5s
- `maxFailures: process.env.CI ? 20: 20` Introducing maxFailures to stop test runs that are significantly broken
- `screenshot: 'only-on-failure'` Producing test result screenshots on failure for review