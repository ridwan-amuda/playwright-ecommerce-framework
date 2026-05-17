class LoginPage {

  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[data-qa="login-email"]');
    this.passwordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.loggedInText = page.locator('text=Logged in as');
    this.errorMessage = page.locator('text=Your email or password is incorrect!');
  }

 
  async clickLogin() {
    await this.loginButton.click();
  }


  async login(email, password) 
  {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    
  }

  

  async isUserLoggedIn() 
  {
    return await this.loggedInText.isVisible();
  }


  async isErrorMessageVisible() {
    return await this.errorMessage.isVisible();
  }
}


module.exports = { LoginPage };