Feature: Hybrid UI + API Login

  Scenario: User logs in with dynamically created API account
    Given a new user account is created via API
    When the user logs into the UI with the created account
    Then the user should be logged in successfully