Feature: Product API

  Scenario: Verify all products API returns products successfully
    When the user sends a GET request to the products API
    Then the API response status should be 200
    And the response should contain product data