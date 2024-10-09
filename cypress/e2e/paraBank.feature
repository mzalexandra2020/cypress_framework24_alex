@para
Feature: User Registration and Account Management in ParaBank

@para1  
  Scenario: Automate User Registration process
    Given I open the parabank Site
    When I click on the Register link
    When I add valid registration data
    When I click on the Register button
    Then I verify user registered successfully

@para2
  Scenario: Automate that user is able to login successfully
    Given I open the parabank Site
    When I enter the valid username "GGG"
    When I enter the valid password "p@ssword"
    When I click the Login button
    Then I verify that the user is able to login successfully in the ParaBank application

@para3  
  Scenario: Automate that User is able to Open the Account successfully
    Given I open the parabank Site
    When I enter the valid username "GGG"
    When I enter the valid password "p@ssword"
    When I click the Login button
    # And I navigate to my account page - redundant, by clicking log in you land on the account page 
    When I click on Open New Account
    Then I verify that the Account Overview page is displayed


#   Scenario: Automate that Overview page is displayed
#     Given I open the parabank Site
#     When I enter the valid username "amart"
#     When I enter the valid password "1234"
#     And I click the Login button
#     # And I navigate to my account page - redundant, by clicking log in you are on the account page 
#     And I click on Open New Account
#     Then I verify that the Account Overview page is displayed

#   Scenario: Automate that User is able to view the Account Overview page
#     Given I open the URL "https://parabank.parasoft.com/parabank/index.htm"
#     When I enter the valid username
#     And I enter the valid password
#     And I click the Login button
#     And I navigate to my account page
#     And I click on Open New Account
#     And I click on Accounts Overview
#     Then I verify that the user is able to view the Account Overview page
