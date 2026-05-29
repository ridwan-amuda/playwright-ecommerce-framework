const { apiBaseUrl } = require('../utils/env');
const { request } = require('@playwright/test');



class UserAPI {

async loginUser(email, password) {
  const apiContext = await request.newContext();

  const response = await apiContext.post(
      `${apiBaseUrl}/verifyLogin`,
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

}

module.exports = { UserAPI };
