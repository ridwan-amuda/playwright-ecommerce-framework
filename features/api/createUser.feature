@api @regression

Feature: Create User API

  Scenario: Create a new user successfully
    When the user sends a POST request to create a new user
    Then the API response status should be 200
    And the create user API response should confirm account created