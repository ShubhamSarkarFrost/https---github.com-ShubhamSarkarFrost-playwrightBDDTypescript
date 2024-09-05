Feature: Validate Orange HRM Functionality

@smokeTest
Scenario: As a User i want to Validate Orange HRM Login Functionality
   Given User navigate to Orange HCM Login Page
   When User Enter the username as "Admin"
   And User Enters the password as "admin123"
   And User clicks on submit button in Login Page
   Then I verify user is navigated to HRM Main Page

@smokeTest
Scenario: As a User i want to Add a User in Orange HRM Systems
   Given User navigate to Orange HCM Login Page
   When User Enter the username as "Admin"
   And User Enters the password as "admin123"
   And User clicks on submit button in Login Page
   Then I verify user is navigated to HRM Main Page 
   When I click on Admin Button from Orange HRM side menu
   And I click on Add user button from User Management
