import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://www.google.com/?gws_rd=ssl
  await page.goto('https://www.google.com/?gws_rd=ssl');
  // Click button:has-text("Ich stimme zu")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.google.com/?gws_rd=ssl' }*/),
    page.click('button:has-text("Ich stimme zu")')
  ]);
  // Click [aria-label="Suche"]
  await page.click('[aria-label="Suche"]');
  // Fill [aria-label="Suche"]
  await page.fill('[aria-label="Suche"]', 'Test Search');
  // Press Enter
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.google.com/search?q=Test+Search&source=hp&ei=2rXmYYfuD4ylUrLYvfAF&iflsig=ALs-wAMAAAAAYebD6tsbAXxUXISCLCkyqu2Rf6uigWs6&ved=0ahUKEwiHw-biqbv1AhWMkhQKHTJsD14Q4dUDCAo&uact=5&oq=Test+Search&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgYIABAWEB4yBggAEBYQHjIICAAQFhAKEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB46EQguEIAEELEDEIMBEMcBENEDOggILhCxAxCDAToLCAAQgAQQsQMQgwE6DgguEIAEELEDEMcBEKMCOgsILhCABBCxAxCDAToLCC4QgAQQxwEQrwE6CAgAEIAEELEDOgsIABCABBCxAxDJAzoFCC4QgAQ6CAgAELEDEIMBOg4IABCABBCxAxCDARDJA1CYC1j-GWCDHWgBcAB4AIAB1gSIAdUZkgELMC4xLjQuMy4wLjKYAQCgAQGwAQA&sclient=gws-wiz' }*/),
    page.press('[aria-label="Suche"]', 'Enter')
  ]);
  // Click text=Top 10 Ways to Test Internal Search | UserTesting Blog
  await page.click('text=Top 10 Ways to Test Internal Search | UserTesting Blog');
  await expect(page).toHaveURL('https://www.usertesting.com/blog/top-10-ways-to-test-internal-search');
});