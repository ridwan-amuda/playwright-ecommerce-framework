class HomePage {
  
  constructor(page) {
    this.page = page;
    this.signupLoginLink = page.locator('a[href="/login"]');
  }

  async open() {
    await this.page.goto('https://automationexercise.com/');
  }

async acceptCookiesIfVisible() {
  const consentButton = this.page.getByRole('button', { name: 'Consent' });

  if (await consentButton.isVisible({ timeout: 5000 }).catch(() => false)) {
    await consentButton.click();
  }
}


  async clickSignupLogin() {
    await this.signupLoginLink.click();
  }
}

module.exports = { HomePage };

