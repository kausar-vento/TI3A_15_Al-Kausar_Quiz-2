describe('mt_03', () => {
  it('passes', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/')
    cy.get('.fw-normal').click();
    cy.get('#username').type('sinister');
    cy.get('#password').type('12345678');
    cy.get('form > .btn').click();
    cy.get(':nth-child(10) > .nav-link').click()
    cy.get(':nth-child(3) > :nth-child(5) > form > .btn').click()
  })
})