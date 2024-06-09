describe('Facebook Automated Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.facebook.com/');
  });

  it('should load the Facebook login page', () => {
    cy.url().should('include', 'facebook.com');
    cy.get('h2').should('contain', 'Facebook helps you connect and share with the people in your life.');
  });

  it('should allow a user to log in', () => {
    cy.get('input[name="email"]').type('polak300@onet.pl');
    cy.get('input[name="pass"]').type('mati5863112');
    cy.get('button[name="login"]').click();

    cy.url().should('not.include', 'login');
    cy.get('div[role="navigation"]').should('be.visible');
  });

  it('should display the user homepage', () => {
    cy.url().should('not.include', 'login');
    cy.get('div[role="feed"]').should('be.visible');
  });

  it('should allow the user to log out', () => {
    cy.get('div[aria-label="Account"]').click();
    cy.contains('Log Out').click();

    cy.url().should('include', 'facebook.com');
    cy.get('input[name="email"]').should('be.visible');
  });
});