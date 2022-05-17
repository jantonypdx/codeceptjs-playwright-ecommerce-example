Feature: Search
  In order to find products I want to purchase
  As a user on the website
  I should be able to search for different products

  Scenario: can search for "dress"
    Given I am on the home page
    And I search for "dress"
    Then I should see products returned

  Scenario: can search for "shirt"
    Given I am on the home page
    And I search for "shirt"
    Then I should see products returned
