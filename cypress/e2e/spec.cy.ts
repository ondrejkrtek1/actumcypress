describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})


let test1 : string = 'zadek'
test1 = 'prdell'



beforeEach(() => {
  //cy.visit('src/index.html');
  cy.visit('https://tat-csc.s3.sa-east-1.amazonaws.com/index.html')
});


/*nebo objekt
Cypress.Commands.add('openPage', () => {
  cy.visit('src/index.html');
});
*/


describe('TAT Customer Service Center', () => {
  it('checks the application title1', () => {
    cy.title().should('eq', 'TAT Customer Service Center')
    cy.log('something')
  })
})


describe('Fills in the required fields and submits the form', () => {
  it('sending fields by fields form with success message // happy scenario', () => {
    cy.get('#firstName').type('Ondrejka')
    //cy.get('input[type="text"]').type("zadek")
    cy.get('#lastName').type('Morokar')
    cy.get('input[type="email"]').type('krtek.ondrej@gmail.com')
    //cy.get('input[type="number"]').type('+420774561073')
    cy.get('#phone').type('774561073')
    cy.get('#product').select('youtube')
    cy.get('[type="radio"]').eq(1).check()
    cy.get('#email-checkbox').click()
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas libero. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Maecenas aliquet accumsan leo. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Pellentesque ipsum. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Sed ac dolor sit amet purus malesuada congue. Nullam dapibus fermentum ipsum. Aliquam in lorem sit amet leo accumsan lacinia. Aliquam id dolor. Etiam dictum tincidunt diam. Donec quis nibh at felis congue commodo. Integer imperdiet lectus quis justo.', { delay: 0 })
    cy.get('[type="submit"]').click()
    cy.get('.success').should('be.visible')

  });

  it('Delay try', () => {
    //cy.visit('src/index.html')
    cy.get('#firstName').type('Ondrejka', { delay: 1000 })


  });

  it('Error message', () => {
    cy.get('[type="submit"]').click()
    cy.get('.error').should('be.visible')


  });

  it('Assertion of invalid input', () => {
    cy.get('input[type="number"]').type("InvalidInput").should('have.value', '')
    cy.get('input[type="number"]').type("123").should('have.value', '123')
  });

  it('displays an error message when the phone becomes required but is not filled in before the form submission', () => {
    cy.get('#phone-checkbox').click()
    cy.get('[type=submit]').click()
    cy.get('.error').should('be.visible')

  });
  it('fills and clears the first name, last name, email, and phone fields', () => {
    cy.get('#firstName').type('smradoch', { delay: 100 }).should('have.value', 'smradoch').clear().should('have.value', '')
    cy.get('#lastName').type('smradoch', { delay: 100 }).should('have.value', 'smradoch').clear().should('have.value', '')
    cy.get('#email').type('smradoch@gmail.com', { delay: 100 }).should('have.value', 'smradoch@gmail.com').clear().should('have.value', '')
    cy.get('#phone').type('1234567890', { delay: 100 }).should('have.value', '1234567890').clear().should('have.value', '')


  });
  it('successfully submits the form using a custom command', () => {
  });
});

/* describe('template spec', () => {
  it('passes', () => {
    //cy.visit('src/index.html')
    cy.openPage();
    cy.get('#firstName').type('Ondrejka', { delay: 1000 })
  })
})


// it.skip - testy se skipují pouze pro zvolené .only - možno za describe nebo it etc. 
// it.only - testy se pouští pouze pro zvolené .only - možno za describe nebo it etc. 
describe('template spec', () => {
  it('passes', () => {
    cy.visit('src/index.html')
  })
})
*/
