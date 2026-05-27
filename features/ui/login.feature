@ui @smoke @login

Feature: Login functionality

  Scenario: Login with valid credentials
    Given the user is on the home page
    When the user clicks on Signup Login
    Then the user enters valid login credentials
    Then the user should be logged in successfully

  Scenario: User logs in with invalid credentials
    Given the user is on the home page
    When the user clicks on Signup Login
    And the user enters invalid login credentials
    Then an error message should be displayed