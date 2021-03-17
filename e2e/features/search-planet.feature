Feature: Search for a Star Wars planet
    
    Scenario: Search a person by full name with one record
        Given I visit the application search page
        When I search for planet with text
        | text |
        | Hoth |
        Then I should see the planet details
        | name | population | climate | gravity      |
        | Hoth | unknown    | frozen  | 1.1 standard |


    Scenario: Search a planet by partial name with two records
        Given I visit the application search page
        When I search for planet with text
        | text |
        | ut |
        Then I should see the planet details
        | name | population | climate | gravity      |
        | Utapau | 95000000    | temperate, arid, windy  | 1 standard |
        | Nal Hutta | 7000000000    | temperate  | 1 standard |