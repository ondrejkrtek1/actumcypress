import landingPageObjects from "../../pageobjects/landingpage";
describe('POM Test', () => {
    beforeEach(() => {
        // Provedení kroku pouze jednou před každým testem
        cy.visit('https://www.demoblaze.com/index.html');
        //cy.get('#gdpr-consent-notice').should('be.visible')
        //cy.contains('Accept All').click()
    });

    it('Verify that header is visible', () => {
        const headercheck = new landingPageObjects.landingPageHeader();
        headercheck.checkExistHeader();
    });

    it('Verify that footer is visible', () => {
        const footercheck = new landingPageObjects.landingPageFooter();
        footercheck.checkExistFooter();
    });

    it('Verify logo is present and clickable', () => {
        const logocheck = new landingPageObjects.landingPageLogo()
        logocheck.checkExistLogo();

    })


});

