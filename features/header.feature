Feature: Header
  In order to perform common tasks
  As a user on the website,
  I should see the Phone Number, Contact Us link, and Sign In link in the Header

  Scenario: can see valid Phone Number, Contact Us link, and Sign In link
    Given I am on the home page
    Then I should see a valid Phone Number
    And I should see a valid Contact Us link
    And I should see a valid Sign In link
