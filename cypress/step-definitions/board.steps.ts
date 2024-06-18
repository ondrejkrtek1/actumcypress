import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import LandingPage from "../pageobjects/landingpage";

const landingPage = new LandingPage()

Given("I visit a page", () => {
    cy.visit('/')
})

When("I load the page", () => {
    cy.get('#narvbarx')
})

Then("I should see the header", () => {
    landingPage.checkExistHeader()
})


Given('Brekeke', () => {
    cy.visit('/')
})

When("Mekeke", () => {
    cy.get('#narvbarx')
})

Then("Bukake", () => {
    landingPage.checkExistHeader()
})