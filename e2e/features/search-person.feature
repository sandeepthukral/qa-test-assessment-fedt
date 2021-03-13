Feature: Search for a Star Wars character
    
    Scenario: Search a person by full name
        Given I navigate to "localhost"
        When I search for <name>
        | name | Luke Skywalker|
        Then I see the person details
        | name            | gender | birthYear | eyeColor | skinColor |
        | Luke Skywalker  | male   | 19BBY     | blue     | fair      |