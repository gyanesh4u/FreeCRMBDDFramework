Feature: Deal data creation 

Scenario: Free CRM Create a new deal Scenario
	Given User is already on Login Page 
	When Title of login page is Free CRM 
	Then user enters username and password 
		|username | password |
		| alok4u  | iamalok  |
	Then user clicks on login button 
	Then user is on Home page 
	Then user moves to new deal page 
	Then user enters deal details 
		| title | amount | probability | commission | 
		| test deal1 | 1000 | 50 | 10 |
		| test deal2 | 2000 | 60 | 20 |
		| test deal | 3000 | 70 | 30 |
	Then close the browser