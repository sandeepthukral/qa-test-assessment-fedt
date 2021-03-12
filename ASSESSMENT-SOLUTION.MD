# QA Engineer Assessment Solution

## Introduction

Use this file to document your solution and findings.

Name: your name and optionally contact information

## Remarks 

### Issues getting started
I followed the instructions in the README. I had the following issues
-  Since `ng` is not installed globally, commands like `ng serve` had to be prefixed with `npx`
- running the tests resulted in no feature files found. Fixed the protractor config key `specs`
- The next issue was that formatter wa set to custom but no formatter path was specified. Also found that protractor-cucumber-framework was not installed.
- Bumped the version of webdriver-manager to get around an issue in the given version of the same.
- The key `format` in `cucumberOpts` had to be changed to get the tests running.

Making these changes, I got the tests to start running. Spent about 40 minutes till this stage.

...
