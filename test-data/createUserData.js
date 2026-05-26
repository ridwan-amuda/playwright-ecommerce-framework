const { generateRandomEmail } = require('../utils/helpers');


function getCreateUserData()

{
return {
  name: 'Test User',
  email: generateRandomEmail(),
  password: 'Password123',
  title: 'Mr',
  birth_date: '10',
  birth_month: 'May',
  birth_year: '1990',
  firstname: 'Test',
  lastname: 'User',
  company: 'Automation Ltd',
  address1: '123 Test Street',
  address2: 'Flat 1',
  country: 'Canada',
  zipcode: '12345',
  state: 'Ontario',
  city: 'Toronto',
  mobile_number: '1234567890'
};
}

module.exports = { getCreateUserData };