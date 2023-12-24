describe('template spec', () => {
  it('Login with valid user using Cypress Studio', () => {
    
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Cypress_studio_Ass3', function() {
    //==== Generated with Cypress Studio ==== 
    cy.visit('https://demoqa.com');
    cy.get(':nth-child(6) > :nth-child(1) > .avatar > svg').click();
    cy.get('#login').click();
    cy.get('#userName').clear('A');
    cy.get('#userName').type('Amrutaaa');
    
    cy.get('#password').type('Amruta05!');
    cy.get('#login').click();
   
    cy.get('#searchBox').type('javascript');
    cy.get('#basic-addon2 > span > svg').click();
    cy.get('#see-book-Learning\\ JavaScript\\ Design\\ Patterns > a').click();
    /* ==== End Cypress Studio ==== */
  });
})