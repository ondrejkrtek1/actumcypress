//import landingPageObjects from "../../pageobjects/landingpage";
import LandingPage from "../../pageobjects/landingpage";
describe('POM Test', () => {

    const landingPage = new LandingPage()

    beforeEach(() => {
        // Provedení kroku pouze jednou před každým testem
        cy.visit('https://www.demoblaze.com/index.html');
        //cy.get('#gdpr-consent-notice').should('be.visible')
        //cy.contains('Accept All').click()
    });
    
    it('Verify header is present', () => {
        landingPage.checkExistHeader()
        landingPage.elements.headerElement().should('be.visible')

    })
    it('Verify footer is present', () => {
        landingPage.checkExistFooter()
        landingPage.elements.footerElement().should('be.visible')

    })
    it('Verify logo is present and clickable', () => {
        landingPage.checkExistLogo()
        landingPage.elements.clickableLogo().should('be.visible')

    })



});

