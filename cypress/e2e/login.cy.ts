describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should login', () => {
    cy.login('admin', 'admin');

    cy.url().should('include', '/home');
  });

  it('should not login', () => {
    cy.login('admin', '123');
  });
});
function done() {
  throw new Error('Function not implemented.');
}
