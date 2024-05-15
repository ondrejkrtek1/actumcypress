export default class LandingPage{

    elements = {
        headerElement : () => cy.get('#narvbarx'),
        footerElement : () => cy.get('#footc'),
        clickableLogo : () => cy.get('#nava'),
        navbar : () => cy.get('#navbarExample'),
        carousel : () => cy.get('#carouselExampleIndicators'),
        carouselPreviousArrow : () => cy.get('.carousel-control-prev-icon'),
        carouselNextArrow : () => cy.get('.carousel-control-next-icon'),
        carouselItem : () => cy.get('.carousel-item'),
        carouselItemActive : () => cy.get('.carousel-item.active'),
        categories : () => cy.get('.list-group')

    }
    

    checkExistHeader()
    {
        this.elements.headerElement().should('be.visible')
    }

    checkExistLogo()
    {
        this.elements.clickableLogo().should('be.visible')
    }
    
    checkExistFooter()
    {
        this.elements.footerElement().should('be.visible')
    }

    checkExistNavbar()
    {
        this.elements.navbar().should('be.visible')
    }
    checkExistCarousel()
    {
        this.elements.carousel().should('be.visible')
    }

    getNthCarouselItem(n: number) {
        return this.elements.carouselItem().eq(n);
    }
    checkExistCategoriesList()
    {
        this.elements.categories().should('be.visible')
    }
}