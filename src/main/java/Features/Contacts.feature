Feature: Free CRM Create Contacts

Scenario Outline: Free CRM Create a new contact scenario
	Given User is already on Login Page 
	When Title of login page is Free CRM 
	Then user enters "<username>" and "<password>"
	Then user clicks on login button 
	Then user is on Home page
	Then user moves to new contact page
	Then user enters contact details "<firstname>" and "<lastname>" and "<position>"
	Then close the browser
	
	Examples:
	
	|username  | password | firstname | lastname | position |
	|alok4u    | iamalok  | Tom       | Peter    | Manager  |
	|alok4u    | iamalok  | David     | Dsouza   | Director |