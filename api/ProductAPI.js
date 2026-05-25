const { request } = require('@playwright/test');

class ProductAPI {

  async getAllProducts() {

    const apiContext = await request.newContext();

    const response = await apiContext.get(
      'https://automationexercise.com/api/productsList'
    );

    return response;
  }



async searchProduct(productName) {
  const apiContext = await request.newContext();

  const response = await apiContext.post(
    'https://automationexercise.com/api/searchProduct',
    {
      form: {
        search_product: productName
      }
    }
  );

  return response;
}




async loginUser(email, password) {
  const apiContext = await request.newContext();

  const response = await apiContext.post(
    'https://automationexercise.com/api/verifyLogin',
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
    'https://automationexercise.com/api/createAccount',
    {
      form: userData
    }
  );

  return response;
}



}

module.exports = { ProductAPI };