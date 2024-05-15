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
    })

    it('Verify that carousel is displayed correctly' , () => {
        landingPage.checkExistCarousel()
    })

    it('Verify that user can click on previous and next arrows' , () => {
        landingPage.checkExistCarousel()
        landingPage.elements.carouselNextArrow().click()
        cy.wait(1000)
        landingPage.elements.carouselPreviousArrow().click()
        cy.wait(1000)
    })
    it('Verify content is changing on clicking previous/next and html classes chaning to active' , () => {
        landingPage.checkExistCarousel()
        landingPage.elements.carouselItemActive().should('exist')
        landingPage.elements.carouselItem().should('exist')
        landingPage.elements.carouselNextArrow().click()
        landingPage.getNthCarouselItem(1).should('have.class', 'active')
        landingPage.getNthCarouselItem(2).should('not.have.class', 'active')
        landingPage.elements.carouselNextArrow().click()
        landingPage.getNthCarouselItem(1).should('have.class', 'active')
        landingPage.getNthCarouselItem(2).should('not.have.class', 'active')
    })
    it('Verify categories list are displayed and present on the page' , () => {
        landingPage.checkExistCategoriesList()
    })
});

