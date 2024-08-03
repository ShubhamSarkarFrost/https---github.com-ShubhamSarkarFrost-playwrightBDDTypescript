const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Automation Report",
    pageTitle: "Automated Application",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome"
        },
        device: "Shubham - PC",
        platform: {
            name: "Windows",
            version: "10",
        },
    }
});