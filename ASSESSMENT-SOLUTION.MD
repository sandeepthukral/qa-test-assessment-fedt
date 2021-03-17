# QA Engineer Assessment Solution

## Introduction

Below is my process of solving this assignment, my findings and proposed steps for further tests.

## Executing tests

Unit and component tests can be executing using the following command
` npm test`

UI Cucumber tests can be executed using the following command
`npm run e2e`

## How I proceeded with the assignment 

### Issues getting started
I followed the instructions in the README. I had the following issues
-  Since `ng` is not installed globally, commands like `ng serve` had to be prefixed with `npx`
- running the tests resulted in no feature files found. Fixed the protractor config key `specs`
- The next issue was that formatter was set to custom but no formatter path was specified. Also found that `protractor-cucumber-framework` was not installed.
- Bumped the version of `webdriver-manager` to get around an issue in the given version of the same.
- The key `format` in `cucumberOpts` had to be changed to get the tests running. I later changed it to `plugin` (Google and prior experience with Cucumber Java)

Making these changes, I got the tests to start running. Spent about 40 minutes till this stage.

### Tests
Once I got going, I started by making the person search tests. 
I had to decide between using `ScenarioOutline` for data-driven tests which drive each scenario with different data, or using `Scenario` with data table for verifying multiple search results. I chose the latter.

I added `data-testids` to all useful DOM elements I needed to find in the page.

I refactored the test code as I went along, committing my code at important steps. This gives you an idea of how I proceeded though the steps.

This took me a total of 5 hours 30 minutes. 

### Unit and Component tests
I do not know the Angular framework as well as any other developer would, but I believe the more tests we can add in Unit and Component level, the more we can reduce on UI tests.

In that pursuit, I created one Unit test for the api service and simple Component tests for the character and planet component.

This took me another hour and a half. This is based on my previous experience from the past year pair programming to add such tests for one of the projects I was working on last year.

### Possible component tests
I would love to add more tests that would cover the following 
 
 The search form. 
 + Render the component and check for the parts of the component.
 + Enter nothing in the search bar, click Search button and assert the search() function is not called.
 + Enter text in the search bar, click Search button and assert Search() is called with the correct parameters.
 + Select radio button people, enter text in the search bar, click Search button and assert Search() is called with the correct parameters.

 The search page
 + Simulate search response to return no results, assert no results DOM element is rendered
 + Simulate search response to return one result, search type is person, assert one character component is rendered
 + Simulate search response to return two results, search type is person, assert two character components is rendered
 + Simulate search response to return one result, search type is planet, assert one planet component is rendered
 + Simulate search response to return two results, search type is planet, assert two planet components is rendered

With these tests, I would reduce the number of UI tests.
### Tests not covered

The README mentions the following scenario

I notice that this scenario does not work as described. If the query field is cleared out and the Search button is clicked, no query is made to the backend. Also, if I do make a backend request with an empty query field, I get back 82 responses.
When I checked the appComponent file, I saw this code
`if (searchType && query) {`
So it is clear that this feature will not work as described. Hence it has not been covered.

### Useful links that helped me
https://github.com/angular/angular-cli/issues/2861#issuecomment-581819533
