Feature: Free CRM Login feature 
#Without examples keyword
#Scenario: Free CRM Login Test Scenario
#	Given User is already on Login Page 
#	When Title of login page is Free CRM 
#	Then user enters "alok4u" and "iamalok"
#	Then user clicks on login button 
#	Then user is on Home page
	
	# with examples keyword
	Scenario Outline: Free CRM Create a new contact Scenario
	Given User is already on Login Page 
	When Title of login page is Free CRM 
	Then user enters "<username>" and "<password>"
	Then user clicks on login button 
	Then user is on Home page
	Then close the browser
	
	Examples:
	| username  | password    |
	| alok4u    | iamalok     |
	| jimmy4u   | windowvista | 
	
	
	
	
	