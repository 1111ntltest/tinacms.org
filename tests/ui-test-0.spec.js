 // example.spec.js
const { test, expect } = require('@playwright/test');

test('my test', async ({ page, browserName }) => {

  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/',
      size: { width: 640, height: 480 },
    }
  });

  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // Expect an attribute "to be strictly equal" to the value.
  await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');

  await page.screenshot({ path: `example-${browserName}.png` });

  await context.close();

});