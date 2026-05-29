const { request } = require('@playwright/test');
const { apiBaseUrl } = require('../utils/env');
const { acceptCookiesIfVisible } = require('../utils/cookieHelper');

class ProductAPI {

  async getAllProducts() {

    const apiContext = await request.newContext();
    const response = await apiContext.get(
      `${apiBaseUrl}/productsList`,
    );

    return response;
  }



async searchProduct(productName) {
  const apiContext = await request.newContext();

  const response = await apiContext.post(
    `${apiBaseUrl}/searchProduct`,
    {
      form: {
        search_product: productName
      }
    }
  );

  return response;
}


async deleteUser(email, password) {
  const apiContext = await request.newContext();

  const response = await apiContext.delete(
    `${apiBaseUrl}/deleteAccount`,
    {
      form: {
        email: email,
        password: password
      }
    }
  );

  return response;
}


async createUser(userData) {
  const apiContext = await request.newContext();

  const response = await apiContext.post(
    `${apiBaseUrl}/createAccount`,
    {
      form: userData
    }
  );

  return response;
}



}

module.exports = { ProductAPI };