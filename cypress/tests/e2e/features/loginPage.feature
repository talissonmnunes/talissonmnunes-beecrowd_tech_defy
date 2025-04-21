Feature: Login Page

Scenario: Login on Site
    Given I access the site login page 
    When I enter "email" and "password"
    Then I can see the home page

Scenario: Login on Site using invalid email
    Given I access the site login page 
    When I enter "invalid_email" and "password"
    Then I can see the fail login alert

Scenario: Login on Site using invalid password
    Given I access the site login page 
    When I enter "email" and "invalid_password"
    Then I can see the fail login alert

Scenario: Login on Site without inform email or password
    Given I access the site login page 
    When I enter "empty_email" and "empty_password"
    Then I can see the fail login alert by required fields