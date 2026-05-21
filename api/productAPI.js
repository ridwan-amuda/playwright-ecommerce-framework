const { request } = require('@playwright/test');

class ProductAPI {

  async getAllProducts() {

    const apiContext = await request.newContext();

    const response = await apiContext.get(
      'https://automationexercise.com/api/productsList'
    );

    return response;
  }
}

module.exports = { ProductAPI };