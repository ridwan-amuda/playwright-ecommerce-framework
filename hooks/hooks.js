const { Before, After, AfterStep, BeforeStep, setDefaultTimeout, Status} = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { POManager } = require('../pages/POManager');

setDefaultTimeout(60000);

Before(async function () {
  this.browser = await chromium.launch({
    headless: false,
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
  
  
  
  
  
  
  // await this.page.close();
  // await this.context.close();
  // await this.browser.close();
  
});





AfterStep ( async function ({result}) 
{
  if (result.status === Status.FAILED) 
    {
    await this.page.screenshot({path : 'screenshot1.png'});
    }

    });



// this.browser = await chromium.launch({ headless: false });
//   this.context = await this.browser.newContext();
//   this.page = await this.context.newPage();
//   this.poManager = new POManager(this.page)



// const browser = await chromium.launch({ headless: false });
//   const context = await browser.newContext();
//   this.page = await context.newPage();
//   this.poManager = new POManager(this.page);