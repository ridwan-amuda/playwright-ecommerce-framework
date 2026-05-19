class CartPage {

    
  constructor(page) {

    this.page = page;

    this.cartProducts = page.locator('.cart_description');
  }

  async getCartProductCount() {

    return await this.cartProducts.count();
  }
}

module.exports = { CartPage };