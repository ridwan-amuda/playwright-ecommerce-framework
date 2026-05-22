const { Before, After, AfterStep, BeforeStep, setDefaultTimeout, Status} = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { POManager } = require('../pages/POManager');

setDefaultTimeout(60000);

Before(async function () {
  this.browser = await chromium.launch({
    headless: true,
    args: [
      '--disable-save-password-bubble',
      '--disable-features=PasswordManagerOnboarding,PasswordCheck'
    ]
  });

  this.context = await this.browser.newContext({
    ignoreHTTPSErrors: true,
    permissions: []
  });

  this.page = await this.context.newPage();

this.poManager = new POManager(this.page);

});
  

After(async function () {
  
  if (this.page) {
    await this.page.close();
  }

  if (this.context) {
    await this.context.close();
  }

  if (this.browser) {
    await this.browser.close();
  }
  
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



