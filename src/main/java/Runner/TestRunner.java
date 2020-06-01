package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "D://BCSM13//FreeCRMBDDFramework//src//main//java//Features//deals.feature", glue = {
		"stepDefinitions" }, format = { "pretty", "html:test-output", "json:json_output/cucumber.json",
				"junit:junit_xml/cucumber.xml" }, dryRun = false, strict = true, monochrome = true)
public class TestRunner {

}
