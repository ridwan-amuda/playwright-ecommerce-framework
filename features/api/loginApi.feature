Feature: Login API

  Scenario: Verify login API with valid credentials
    When the user sends a POST request to login API with valid credentials
    Then the API response status should be 200
    And the login API response should confirm user exists

  Scenario: Verify login API with invalid credentials
    When the user sends a POST request to login API with invalid credentials
    Then the API response status should be 200
    And the login API response should show invalid credentials message