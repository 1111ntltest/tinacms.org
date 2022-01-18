 import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://www.mozilla.org/de/
  await page.goto('https://www.mozilla.org/de/');
  // Click text=Hilfe zu Produkten
  await page.click('text=Hilfe zu Produkten');
  await expect(page).toHaveURL('https://support.mozilla.org/de/?utm_source=www.mozilla.org&utm_medium=referral&utm_campaign=footer&utm_content=support');
  // Click #main-content >> text=Mozilla VPN
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://support.mozilla.org/de/products/firefox-private-network-vpn' }*/),
    page.click('#main-content >> text=Mozilla VPN')
  ]);
});