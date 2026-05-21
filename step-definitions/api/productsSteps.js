const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { ProductAPI } = require('../../api/ProductAPI');

When('the user sends a GET request to the products API', async function () {

  const productAPI = new ProductAPI();

  this.response = await productAPI.getAllProducts();
});

Then('the API response status should be 200', async function () {

  assert.strictEqual(this.response.status(), 200);
});

Then('the response should contain product data', async function () {

  const responseBody = await this.response.json();

  assert.ok(responseBody.products.length > 0);
});