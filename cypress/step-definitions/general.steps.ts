import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'



Given("I visit a page", () => {
    cy.visit('https://www.demoblaze.com/index.html')
})

When("I load the page", () => {
    cy.get('#narvbarx')
})

Then("I should see the header", () => {
    cy.get('#narvbarx').should('be.visible')
})
