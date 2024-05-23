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
        categories : () => cy.get('.list-group'),
        // categories for each name
        // categoriesPhones : () => cy.get('.list-group #itemc').contains('Phones').should('be.visible'),
        // categoriesLaptops : () => cy.get('.list-group #itemc').contains('Laptops').should('be.visible'),
        // categoriesMonitors : () => cy.get('.list-group #itemc').contains('Monitors').should('be.visible'),
        body : () => cy.get('#tbodyid'),
        previous : () => cy.get('#prev2'),
        next : () => cy.get('#next2')
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
    checkExistBody()
    {
        this.elements.body().should('be.visible')
    }
}