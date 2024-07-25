describe('News Links Test', () => {
    it('Should visit each news link and check the header, only for internal news links', () => {
      cy.visit('https://work.co/');
      cy.get('[data-test-id="index-news-link"]').click();
      cy.url().should('include', '/news/'); 
  
      cy.get('a.NewsListGridItem-link').each(($link, index, $list) => {
        const href = $link.prop('href');  
  
        if (href.startsWith('/news/')) {  
          cy.wrap($link).click();         
          cy.get('h1').should('exist');   
          cy.go('back');                  
          cy.wait(500);                   
        }
      });
    });
  });
  