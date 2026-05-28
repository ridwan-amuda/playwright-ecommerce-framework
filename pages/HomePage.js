const { baseUrl } = require('../utils/env');
const { acceptCookiesIfVisible } = require('../utils/cookieHelper');

class HomePage {
  
  constructor(page) {
    this.page = page;
    this.signupLoginLink = page.locator('a[href="/login"]');
  }

  async open() {
    await this.page.goto(baseUrl, {
  waitUntil: 'domcontentloaded',
  timeout: 60000
});
  


   await acceptCookiesIfVisible(this.page);

    await this.signupLoginLink.waitFor({
      state: 'visible',
      timeout: 30000
    });
  }




  async clickSignupLogin() {
     await acceptCookiesIfVisible(this.page);
    await this.signupLoginLink.click();
  }
}

module.exports = { HomePage };

