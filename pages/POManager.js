const{HomePage} = require('./HomePage')
const{LoginPage} = require('./LoginPage')
const{ProductPage} = require('./ProductPage')


class POManager

{


constructor(page)
{
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.homePage = new HomePage(this.page);
    this.productPage = new ProductPage(this.page);
   
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







}

module.exports = {POManager}