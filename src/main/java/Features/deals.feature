Feature: Deal data creation

Scenario: Free CRM Create a new deal Scenario
	Given User is already on Login Page 
	When Title of login page is Free CRM 
	Then user enters username and password
	|alok4u | iamalok |
	Then user clicks on login button 
	Then user is on Home page
	Then user moves to new deal page
	Then user enters deal details
	| test deal | 1000 | 50 | 10 |
	Then close the browser