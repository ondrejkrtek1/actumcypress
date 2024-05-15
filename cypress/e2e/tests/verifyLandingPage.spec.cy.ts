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

    })
    it('Verify footer is present', () => {
        landingPage.checkExistFooter()

    })
    it('Verify logo is present and clickable', () => {
        landingPage.checkExistLogo()
        landingPage.elements.clickableLogo().should('have.attr' , 'href').and('have.length.greaterThan' , 0 )
        //landingPage.elements.clickableLogo().should('be.visible')
    })

    it('Verify navbar is displayed correctly and contains sections', () => {
        landingPage.checkExistNavbar()
        landingPage.elements.navbar().children('ul').children('li').should('have.length', 8 )
    }

    )



});

