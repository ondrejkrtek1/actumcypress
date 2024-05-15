export default class LandingPage{

    elements = {
        headerElement : () => cy.get('#narvbarx'),
        footerElement : () => cy.get('#footc'),
        clickableLogo : () => cy.get('#nava'),
        navbar : () => cy.get('#navbarExample')

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
}