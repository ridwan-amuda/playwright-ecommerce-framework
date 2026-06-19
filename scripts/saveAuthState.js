const { chromium } = require('@playwright/test');
const { baseUrl, headless } = require('../utils/env');
const { acceptCookiesIfVisible } = require('../utils/cookieHelper');
const users = require('../test-data/users.json');

(async () => {
  const browser = await chromium.launch({
    headless: headless
  });

  const page = await browser.newPage();

  await page.goto(baseUrl, {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await acceptCookiesIfVisible(page);

  await page.click('a[href="/login"]');

  await acceptCookiesIfVisible(page);

  await page.fill(
    'input[data-qa="login-email"]',
    users.validUser.email
  );

  await page.fill(
    'input[data-qa="login-password"]',
    users.validUser.password
  );

  await page.click('button[data-qa="login-button"]');

  await page.locator('text=Logged in as').waitFor({
    state: 'visible',
    timeout: 15000
  });

  await page.context().storageState({
    path: 'storage/auth.json'
  });

  await browser.close();
})();