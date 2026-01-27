Feature: sauceDemo cart

@smoke
Scenario: Add single product to cart 
    Given I am login in as "standard_user"
    When I Add product "Sauce Labs Backpack" to cart
    Then cart badge should show "1"
    And I should see "Sauce Labs Backpack" in cart page

@regression
Scenario: Remove product from cart
  Given I am login in as "standard_user"
  And I Add product "Sauce Labs Backpack" to cart
  When I remove product "Sauce Labs Backpack" from cart
  Then cart badge should not be displayed

@regression
Scenario Outline: Add single product to cart
  Given I am login in as "standard_user"
  When I Add product "<product>" to cart
  Then cart badge should show "1"

Examples:
  | product                  |
  | Sauce Labs Backpack       |
  | Sauce Labs Bike Light     |
  | Sauce Labs Bolt T-Shirt   |
  |Sauce Labs Fleece Jacket|
  |Sauce Labs Onesie|

@regression
Scenario Outline: Add two products to cart
  Given I am login in as "standard_user"
  When I Add product "<product1>" to cart
  And I Add product "<product2>" to cart
  And I Add product "<product3>" to cart
  Then cart badge should show "3"

Examples:
  | product1              | product2               | product3                |
  | Sauce Labs Backpack   | Sauce Labs Bike Light  | Sauce Labs Bolt T-Shirt |
  | Sauce Labs Backpack   | Sauce Labs Bolt T-Shirt| Sauce Labs Fleece Jacket|
  | Sauce Labs Backpack   | Sauce Labs Bolt T-Shirt| Sauce Labs Onesie|

@negative
Scenario: Cart badge should not be displayed when cart is empty
  Given I am login in as "standard_user"
  Then cart badge should not be displayed

@negative
Scenario: Remove one product from multiple items
  Given I am login in as "standard_user"
  And I Add product "Sauce Labs Backpack" to cart
  And I Add product "Sauce Labs Bike Light" to cart
  When I remove product "Sauce Labs Backpack" from cart
  Then cart badge should show "1"




