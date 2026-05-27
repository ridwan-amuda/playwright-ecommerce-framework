@ui @regression @search

Feature: Product Search

  Scenario: User searches for an existing product
    Given the user is on the home page
    When the user navigates to the products page
    And the user searches for "Tshirt"
    Then searched products should be displayed