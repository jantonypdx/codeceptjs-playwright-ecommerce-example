Feature: Category
  In order to purchase a product
  As a user on the Category page
  I want to be able to add a product to the Cart

  Scenario: can add product to cart
    Given I am on the home page
    And I search for "dress"
    And I add product "random" to cart
    Then I should see 1 product in cart