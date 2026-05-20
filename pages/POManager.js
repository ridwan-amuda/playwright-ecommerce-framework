const{HomePage} = require('./HomePage')
const{LoginPage} = require('./LoginPage')
const{ProductPage} = require('./ProductPage')
const{CartPage} = require('./CartPage')
const{CheckoutPage} = require('./CheckoutPage')


class POManager

{


constructor(page)
{
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.homePage = new HomePage(this.page);
    this.productPage = new ProductPage(this.page);
    this.cartPage = new CartPage(this.page);
    this.checkoutPage = new CheckoutPage(this.page);
}  




getLoginPage()
{
    return this.loginPage;
}

getHomePage()
{
    return this.homePage;
}

getProductPage() {
  return this.productPage;
}


getCartPage() {
  return this.cartPage;
}

getCheckoutPage() {
  return this.checkoutPage;
}





}

module.exports = {POManager}