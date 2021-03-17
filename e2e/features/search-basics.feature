Feature: Search page initial display

    This feature is about the initial rendering of the search page

    Scenario: Search page is loaded correctly
        Given I visit the application search page
        Then I should see the search component rendered correctly