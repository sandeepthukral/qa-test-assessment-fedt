// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  allScriptsTimeout: 11000,
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'http://localhost:4200/',
  cucumberOpts: {
    strict: true,
    require: [
      './e2e/**/*.steps.ts'
    ],
    plugin: ['progress', 'json:test-reports/cucumber-test-results.json']
  },
  debug: false,
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  getPageTimeout: 60000,
  specs: [
    './e2e/features/*.feature'
  ],
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './e2e/tsconfig.e2e.json')
    });
  }
};
