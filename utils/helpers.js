function generateRandomEmail() {
  return `testuser_${Date.now()}@mail.com`;
}

module.exports = {
  generateRandomEmail
};