@api @regression

Feature: Search Product API

  Scenario: Search for a product successfully
    When the user sends a POST request to search product API with "tshirt"
    Then the API response status should be 200
    And the response should contain searched product data