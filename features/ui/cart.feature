@ui @regression @cart

Feature: Cart functionality

  Scenario: User adds a product to cart successfully
    Given the user is on the home page
    When the user navigates to the products page
    And the user adds the first product to the cart
    And the user views the cart
    Then the selected product should be displayed in the cart