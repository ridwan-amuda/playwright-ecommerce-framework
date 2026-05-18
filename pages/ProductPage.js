class ProductPage {
 
   constructor(page) {
    this.page = page;

    this.productsLink = page.locator('a[href="/products"]');
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.searchedProductsTitle = page.locator('text=Searched Products');
    this.productItems = page.locator('.features_items .product-image-wrapper');
  }

  async navigateToProductsPage() {
    await this.productsLink.click();
    await this.page.waitForURL('**/products');
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
}

module.exports = { ProductPage };