describe('Visual Regression Testing', () => {
  let timestamp;

  before(() => {
    cy.log('Clearing screenshots before starting the test');
    cy.task('clearScreenshots');

    timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    cy.log(`Timestamp for this run: ${timestamp}`);

    cy.log('Visiting the work.co page');
    cy.visit('https://work.co');

    cy.log('Checking for Allow Cookies button');
    cy.get('button').contains('Allow Cookies').then(($btn) => {
      if ($btn.length) {
        cy.log('Found Allow Cookies button, attempting to click');
        $btn.click({ force: true });
        cy.log('Clicked Allow Cookies button successfully');
      } else {
        cy.log('Allow Cookies button not found, proceeding without clicking');
      }
    });

    cy.log('Capturing baseline screenshot');
    cy.matchImageSnapshot(`baseline-${timestamp}`).then(() => {
      cy.log('Baseline screenshot captured successfully');
    });
  });

  it('should capture and compare screenshot', () => {
    cy.log('Visiting the work.co page again for comparison');
    cy.visit('https://work.co');

    cy.log('Capturing and comparing screenshot with baseline');
    cy.matchImageSnapshot(`baseline-${timestamp}`, {
      failureThreshold: 0.1, 
      failureThresholdType: 'percent',
    }).then(() => {
      cy.log('Screenshot comparison completed');
    });
  });

  after(() => {
    cy.log('Clearing screenshots after the test');
    cy.task('clearScreenshots');
  });
});
