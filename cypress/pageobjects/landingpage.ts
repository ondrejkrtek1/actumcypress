class landingPageHeader{

    elements = {
        headerElement : () => cy.get('#narvbarx')
    }

    checkExistHeader()
    {
        this.elements.headerElement().should('be.visible')
    }
}
class landingPageFooter{

    elements = {
        footerElement : () => cy.get('#footc')
    }
    
    checkExistFooter()
    {
        this.elements.footerElement().should('be.visible')
    }
}


class landingPageLogo{

    elements = {    
        clickableLogo : () => cy.get('#nava')
    }

    checkExistLogo()
    {
        this.elements.clickableLogo().should('be.visible')
    }
}



const landingPageObjects = {
    landingPageHeader,
    landingPageFooter,
    landingPageLogo
};

export default landingPageObjects