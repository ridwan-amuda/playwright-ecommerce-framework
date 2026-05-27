@ui @regression @checkout

Feature: Checkout functionality

  Scenario: User proceeds to checkout successfully

    Given the user is on the home page
    When the user clicks on Signup Login
    And the user enters valid login credentials
    And the user navigates to the products page
    And the user adds the first product to the cart
    And the user views the cart
    And the user proceeds to checkout
    Then the checkout page should be displayed