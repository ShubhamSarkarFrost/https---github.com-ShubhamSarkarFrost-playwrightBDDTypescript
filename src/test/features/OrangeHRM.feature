Feature: Validate Orange HRM Functionality

@regressionTest
Scenario: As a User i want to Validate Orange HRM Login Functionality
   Given User navigate to Orange HCM Login Page
   When User Enter the username as "Admin"
   And User Enters the password as "admin123"
   And User clicks on submit button in Login Page
   Then I verify user is navigated to HRM Main Page

@smokeTest
Scenario: As a User i want to Assign a ESS role to the User
   Given User navigate to Orange HCM Login Page
   When User Enter the username as "Admin"
   And User Enters the password as "admin123"
   And User clicks on submit button in Login Page
   Then I verify user is navigated to HRM Main Page 
   When I click on Admin Button from Orange HRM side menu
   And I click on Add user button from User Management
   And I select users role as "ESS"
   And I select users role status as "Enabled"
   And I enter role for "Ranga Akunuri" in User Management
   And I enter usersname as "Aku_nuri" in Username textbox
   And I enter the password as "Akunuri12@"
   And I reconfirm the password as "Akunuri12@"
   And I click on save button
   And User waits for "30" seconds
   Then User verifies that they are back to add users Page
   When I search the created user using the username entered
   And User waits for "30" seconds
   Then I verify whether the User is Created


