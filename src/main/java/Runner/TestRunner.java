package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "D://BCSM13//FreeCRMBDDFramework//src//main//java//Features//tagging.feature", glue = {
		"stepDefinitions" }, format = { "pretty", "html:test-output", "json:json_output/cucumber.json",
				"junit:junit_xml/cucumber.xml" }, dryRun = false, strict = true, monochrome = true, tags={"~@SmokeTest" ,"~@RegressionTest","~@End@End"})
public class TestRunner {

}//OR :tags ={"@SmokeTest ,@RegressionTest"} --execute all tests tagged as @SmokeTest OR @RegressionTest

//AND :tags ={"@SmokeTest" ,"@RegressionTest"} --execute all tests tagged as @SmokeTest AND @RegressionTest

// ignoring a test can be done by using ~ this keyword