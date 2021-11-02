const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: './cucumber.json',
    output: 'test/report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    name:'Student Record Service',
    brandTitle:'REST API Test for Student Record',
    metadata: {
        "App Version":"0.3.2",
        "Test Environment": "localhost port:3000",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options);
    