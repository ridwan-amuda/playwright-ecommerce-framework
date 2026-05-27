const { acceptCookiesIfVisible } = require('../utils/cookieHelper');


class LoginPage {
 

  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[data-qa="login-email"]');
    this.passwordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.loggedInText = page.locator('text=Logged in as');
    this.invalidLoginErrorMessage = page.locator('text=Your email or password is incorrect!');
  }

 
  async clickLogin() {
    await this.loginButton.click();
  }


  async login(email, password) 
  {
   await acceptCookiesIfVisible(this.page);
  
  await this.emailInput.waitFor({ state: 'visible' });
  await this.emailInput.fill(email);

  await this.passwordInput.waitFor({ state: 'visible' });
  await this.passwordInput.fill(password);

  await this.loginButton.waitFor({ state: 'visible' });
  await this.loginButton.click();
    
  }

  

  async isUserLoggedIn() 
  {
    
    await this.loggedInText.waitFor({
    state: 'visible',
    timeout: 10000
  });
    
    return await this.loggedInText.isVisible();
  }


  async isInvalidLoginErrorVisible() {
    return await this.invalidLoginErrorMessage.isVisible();
  }
}


module.exports = { LoginPage };