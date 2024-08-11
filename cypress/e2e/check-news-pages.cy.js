import news_slugs from './slugs.js';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('News Pages Test', () => {
    news_slugs.forEach((news) => {
        it(`should have the correct title for ${news.title}`, () => {
            cy.visit(`https://work.co/news/${news.url}`);
            cy.get('h1').should('have.text', news.title);
        });
    });
});
