import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on empty home page", () => {
    cy.visit('https://www.demoblaze.com/index.html')
})

When("I type and submit in the board name", () => {
    cy.get('#narvbarx')
})

Then("I should be redirected to the board detail", () => {
    cy.get('#narvbarx').should('be.visible')
})
