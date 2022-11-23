describe('mt_01', () => {
  it('passes', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/')
    cy.get('.fw-normal').click();
    cy.get('#username').type('sinister');
    cy.get('#password').type('12345678');
    cy.get('form > .btn').click();
    cy.get(':nth-child(10) > .nav-link').click()
    cy.get('.text').click()
    cy.get(':nth-child(1) > .form-control').select('Mandiri')
    cy.get(':nth-child(2) > .form-control').type('2094476880')
    cy.get(':nth-child(4) > :nth-child(2) > .btn').click()
  })
})