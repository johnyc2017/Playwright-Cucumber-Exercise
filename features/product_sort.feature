Feature: Product Sorting on SauceDemo

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline: Validate product sort by price <sort>
    Then I will login as 'standard_user'
    And I sort the items by <sort>
    And I validate all 6 items are sorted correctly by price

    Examples:
      | sort         |
      | high to low  |
      | low to high  |
