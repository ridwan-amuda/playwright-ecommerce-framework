const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { ProductAPI } = require('../../api/ProductAPI');

When('the user sends a POST request to search product API with {string}', async function (productName) {
  const productAPI = new ProductAPI();

  this.response = await productAPI.searchProduct(productName);
});

Then('the response should contain searched product data', async function () {
  const responseBody = await this.response.json();

  assert.ok(responseBody.products.length > 0);
});