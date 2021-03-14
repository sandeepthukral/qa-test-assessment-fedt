Feature: Search for a Star Wars character
    
    Scenario: Search a person by full name with one record
        Given I navigate to "localhost"
        When I search for text
        | text |
        | Luke Skywalker|
        Then I should see the person details
        | name            | gender | birthYear | eyeColor | skinColor |
        | Luke Skywalker  | male   | 19BBY     | blue     | fair      |


    Scenario: Search a person by full name with two records
        Given I navigate to "localhost"
        When I search for text
        | text  |
        | Darth |
        Then I should see the person details
        | name         | gender | birthYear | eyeColor | skinColor |
        | Darth Vader  | male   | 41.9BBY   | yellow   | white     |
        | Darth Maul   | male   | 54BBY     | yellow   | red       |

    Scenario: Search a person with no results
        Given I navigate to "localhost"
        When I search for text
        | text |
        | blah |
        Then I should see no results found

    Scenario: Search a person by pressing enter on search field
        Given I navigate to "localhost"
        When I search for text and press enter
        | text |
        | Luke |
        Then I should see the person details
        | name            | gender | birthYear | eyeColor | skinColor |
        | Luke Skywalker  | male   | 19BBY     | blue     | fair      |