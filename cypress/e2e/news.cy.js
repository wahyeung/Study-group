describe('News Links Test', () => {
  it('Should visit each news link and check the header, only for internal news links', () => {
    
    cy.visit('https://work.co/');
    
    // Click on the cookie notice accept button if it is visible
    cy.get('.CookieButton.CookieButton-primary', { timeout: 10000 }).should('be.visible').click();

    cy.get('[data-test-id="index-news-link"]').click();
    cy.url().should('include', '/news/');

    cy.get('a.NewsListGridItem-link').as('newsLinks');

    cy.get('@newsLinks').each((link) => {
      cy.wrap(link).invoke('attr', 'href').then(href => {
        cy.log(`URL: ${href}`);
        if (href.startsWith('https://work.co/news/')) {
          // Click the link
          cy.wrap(link).click();
          // Check if the header exists
          cy.get('h1').should('exist');
          // Go back to the news page
          cy.go('back');
          // Wait for a short time to allow the page to load
          cy.wait(500);
          // Re-fetch the news links after going back to ensure the elements are in the correct state
          cy.get('a.NewsListGridItem-link').as('newsLinks');
        }
      });
    });
  });
});
