import loginPage from "../../pageobjects/loginPages";

describe('POM Test', () => {
    beforeEach(() => {
        // Provedení kroku pouze jednou před každým testem
        cy.visit('https://demo.guru99.com/test/newtours/login.php');
        //cy.get('#gdpr-consent-notice').should('be.visible')
        //cy.contains('Accept All').click()
    });

    it('Verify Login successful', () => {
        const loginObj = new loginPage();
        loginObj.enterUsername('selenium@qa');
        loginObj.enterPassword('qa@12345');
        loginObj.clickSubmit();
        loginObj.elements.successTxt().should('have.text', 'Login Successfully');
    });

    it('Verify Login unsuccessful for invalid username/password', () => {
        const loginObj = new loginPage();
        loginObj.enterUsername('selenium');
        loginObj.enterPassword('qa@123');
        loginObj.clickSubmit();
        loginObj.elements.errorTxt().should('contain','Enter your userName and password correct');
    });
    
});