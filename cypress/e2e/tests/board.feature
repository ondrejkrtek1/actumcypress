Feature: Plank test

    Scenario: Visit a page and check header
        Given I visit a page
        When I load the page
        Then Header is visible

    Scenario: Visit a a page and check the foot
        Given I visit the page
        When I load the page
        Then Footer is visible

    @only
    Scenario: Third
        Given Ondra

