describe('News Links Test', () => {
    it('Should visit each news link and check the header, only for internal news links', () => {

      cy.visit('https://work.co/');
      //cy.get('.cookie-consent-accept', { timeout: 10000 }).should('be.visible').click();
  
      cy.get('[data-test-id="index-news-link"]').click();
      cy.url().should('include', '/news/'); 
  
 
      cy.get('a.NewsListGridItem-link').as('newsLinks');
  

      cy.get('@newsLinks').then(newsLinks => {
        Cypress._.range(newsLinks.length).forEach(index => {
          cy.get('@newsLinks').eq(index).invoke('attr', 'href').then(href => {
      
            if (href.startsWith('https://work.co/news/')) {
            //if (href.startsWith('/news/')) { 
              cy.get('@newsLinks').eq(index).click(); 
              cy.get('h1').should('exist'); 
              cy.go('back'); 
              cy.wait(500); 
            }
          });
        });
      });
    });
  });
  