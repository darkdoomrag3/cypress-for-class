Feature: End to End Ecommerce validation

    application regression

    Scenario: Ecomemrce products delivery
    Given I open Ecomemrce page
    When  I add items to Cart
    When Validate the total prices
    Then Select the counrt submit and verify thank you

    # Scenario: Filling the form to top
    # Given I open Ecomemrce page
    # When I fill the form details
    # Then Validate the forms behaviour 