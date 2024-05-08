import header from "../../pageobjects/header";

describe('POM Test', () => {
    beforeEach(() => {
        // Provedení kroku pouze jednou před každým testem
        cy.visit('https://www.demoblaze.com/index.html');
        //cy.get('#gdpr-consent-notice').should('be.visible')
        //cy.contains('Accept All').click()
    });

    it('Verify that header is visible', () => {
        const headercheck = new header();
        headercheck.checkExistHeader();
    });


});

