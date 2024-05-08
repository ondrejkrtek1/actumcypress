class header{

    elements = {
        headerElement : () => cy.get('#narvbarx')
        
    }

    checkExistHeader()
    {
        this.elements.headerElement().should('be.visible')
    }

}

export default header;