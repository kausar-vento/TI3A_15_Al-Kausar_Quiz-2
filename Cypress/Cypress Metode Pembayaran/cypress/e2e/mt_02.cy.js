describe('mt_02', () => {
  it('passes', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/')
    cy.get('.fw-normal').click();
    cy.get('#username').type('sinister');
    cy.get('#password').type('12345678');
    cy.get('form > .btn').click();
    cy.get(':nth-child(10) > .nav-link').click()
    cy.get('.even > :nth-child(4) > a > .btn').click()
    cy.get(':nth-child(2) > .form-control').clear().type('22109987')
    cy.get(':nth-child(5) > :nth-child(2) > .btn').click()
  })
})