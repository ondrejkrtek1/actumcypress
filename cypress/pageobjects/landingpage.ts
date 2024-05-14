export default class LandingPage{

    elements = {
        headerElement : () => cy.get('#narvbarx'),
        clickableLogo : () => cy.get('#nava'),
        footerElement : () => cy.get('#footc')
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
}

