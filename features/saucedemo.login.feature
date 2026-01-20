Feature: SauceDemo Login 

@smoke
    Scenario:  Succesful login with valid credentials
     Given I am on the SauceDemo login page
     When I login with username "standard_user" and password "secret_sauce"
     Then I should be on the inventory page 

@regression
    Scenario: Login failed with locked out user 
     Given I am on the SauceDemo login page
     When I login with username "locked_out_user" and password "secret_sauce"
     Then I should see an error message "Epic sadface: Sorry, this user has been locked out."

@regression
    Scenario: Login failed with invalid password 
     Given I am on the SauceDemo login page
     When I login with username "standard_user" and password "wrongpass"
     Then I should see an error message "Epic sadface: Username and password do not match any user in this service"

@regression
    Scenario: Login failed with empty username
     Given I am on the SauceDemo login page 
     When I login with username "" and password "secret_sauce"
     Then I should see an error message "Epic sadface: Username is required"

@regression
    Scenario: Login failed with empty password 
     Given I am on the SauceDemo login page
     When I login with username "standard_user" and password ""
     Then I should see an error message "Epic sadface: Password is required"
 