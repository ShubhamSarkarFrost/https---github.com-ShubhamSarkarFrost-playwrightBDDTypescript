import report from 'multiple-cucumber-html-reporter';
const path = require('path');
import * as os from 'os'; // Correct way to import the 'os' module

// Get OS information
const platformName = os.type(); // OS name ('Linux', 'Darwin', 'Windows_NT')
const platformVersion = os.release(); // OS version (e.g., '10.0.19042')

report.generate({
  jsonDir: path.resolve('./reports'), // Path to the directory containing the JSON report
  reportPath: path.resolve('./reports/html'), // Output path for the HTML report
  metadata: {
    device: 'Local Test Machine',
    platform: {
      name: platformName,
      version: platformVersion,
    },
  },
  customData: {
    title: 'Test Execution Info',
    data: [
      { label: 'Project', value: 'My Playwright Project' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Execution Start Time', value: new Date().toISOString() },
      { label: 'Execution End Time', value: new Date().toISOString() },
    ],
  },
});
