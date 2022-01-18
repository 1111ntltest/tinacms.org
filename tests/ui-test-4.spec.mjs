 import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://www.mozilla.org/de/
  await page.goto('https://www.mozilla.org/de/');
  // Click text=Firefox-Browser
  await page.click('text=Firefox-Browser');
  // Click text=Firefox für Desktop
  await page.click('text=Firefox für Desktop');
  await expect(page).toHaveURL('https://www.mozilla.org/de/firefox/new/');
  // Click text=Mozilla-Hilfe
  await page.click('text=Mozilla-Hilfe');
  await expect(page).toHaveURL('https://support.mozilla.org/de/products/firefox?utm_source=www.mozilla.org&utm_medium=referral&utm_campaign=firefox-desktop&utm_content=mozilla-support');
});