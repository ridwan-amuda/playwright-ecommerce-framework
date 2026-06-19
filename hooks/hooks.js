const { Before, After, AfterStep, BeforeStep, setDefaultTimeout, Status} = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { POManager } = require('../pages/POManager');
const { headless } = require('../utils/env');

setDefaultTimeout(60000);

Before(async function (scenario) {
  this.browser = await chromium.launch({
    headless: headless,
    args: [
      '--disable-save-password-bubble',
      '--disable-features=PasswordManagerOnboarding,PasswordCheck'
    ]
  });

  if (scenario.pickle.tags.some(tag => tag.name === '@authenticated')) {
    this.context = await this.browser.newContext({
      storageState: 'storage/auth.json',
      ignoreHTTPSErrors: true,
      permissions: []
    });
  } else {
    this.context = await this.browser.newContext({
      ignoreHTTPSErrors: true,
      permissions: []
    });
  }

  this.page = await this.context.newPage();
  this.poManager = new POManager(this.page);
});
  

After(async function (scenario) {

  if (scenario.result.status === Status.FAILED) {

    const screenshot = await this.page.screenshot({
      path: `reports/screenshots/${Date.now()}.png`,
      fullPage: true
    });

    this.attach(screenshot, 'image/png');
  }

  if (this.page) await this.page.close();
  if (this.context) await this.context.close();
  if (this.browser) await this.browser.close();

  this.poManager = new POManager(this.page);
});
  
 



AfterStep ( async function ({result}) 
{
  if (result.status === Status.FAILED) 
    {
    await this.page.screenshot({
  path: `reports/screenshots/${Date.now()}.png`
});
    }

    });




