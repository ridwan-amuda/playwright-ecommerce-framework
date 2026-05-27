const { acceptCookiesIfVisible } = require('../utils/cookieHelper');
const { baseUrl } = require('../utils/env');

class ProductPage {
 
   constructor(page) {
    this.page = page;

    this.productsLink = page.locator('a[href="/products"]');
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.searchedProductsTitle = page.locator('text=Searched Products');
    this.productItems = page.locator('.features_items .product-image-wrapper');
   // this.firstAddToCartButton = page.locator('.product-overlay a[data-product-id]').first();
    this.continueShoppingButton = page.locator('button:has-text("Continue Shopping")');
    this.viewCartLink = page.locator('u:has-text("View Cart")');
    this.firstProductCard = page.locator('.product-image-wrapper').first();
    this.firstAddToCartButton = page.locator('.productinfo a[data-product-id]').first();
  }

  async navigateToProductsPage() {
  
  await this.page.goto(`${baseUrl}/products`, {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  
  
  
await this.searchInput.waitFor({
    state: 'visible',
    timeout: 30000
  });
}

  async searchProduct(productName) {
    await this.searchInput.waitFor({ state: 'visible' });
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async isSearchedProductsTitleVisible() {
    return await this.searchedProductsTitle.isVisible();
  }

  async getProductCount() {
    return await this.productItems.count();
  }

  async addFirstProductToCart() {
  await acceptCookiesIfVisible(this.page);

  await this.firstAddToCartButton.waitFor({
    state: 'visible',
    timeout: 10000
  });

  await this.firstAddToCartButton.scrollIntoViewIfNeeded();

  await this.firstAddToCartButton.click();
}


async clickViewCart() {
  await acceptCookiesIfVisible(this.page);

  await this.page.goto(`${baseUrl}/view_cart`, {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
}



}

module.exports = { ProductPage };