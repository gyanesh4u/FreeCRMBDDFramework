$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/BCSM13/FreeCRMBDDFramework/src/main/java/Features/dealsmap.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal Scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "alok4u",
        "iamalok"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 13
    },
    {
      "cells": [
        "test deal1",
        "1000",
        "50",
        "10"
      ],
      "line": 14
    },
    {
      "cells": [
        "test deal2",
        "2000",
        "60",
        "20"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal",
        "3000",
        "70",
        "30"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepWithMapDefinition.User_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 46305512300,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.Title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 295519500,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 1718839600,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 10636985300,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_is_on_Home_page()"
});
formatter.result({
  "duration": 7255600,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 15206231200,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_enters_contacts_details(DataTable)"
});
formatter.result({
  "duration": 16127355700,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.close_the_browser()"
});
formatter.result({
  "duration": 852187400,
  "status": "passed"
});
});