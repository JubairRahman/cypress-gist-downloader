///<reference types="cypress"/>

it('Google search',()=>{
    cy.visit('https://www.google.com')
    cy.get('#APjFqb').type('github')
    cy.contains('Google Search').click()
    // cy.get('.w7Nvcd').type('JubairRahman')
    cy.get('.w7Nvcd', { timeout: 10000 }).should('exist').type('JubairRahman');

    cy.get('.JOmIqc').click()
   
    cy.pause(); // Add this line to pause the test and inspect the state
    cy.get(':nth-child(1) > .MjjYud > .g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb').click();

    
     cy.origin('https://gist.github.com', () => {

     // Now you can interact with elements inside the iframe
        cy.get('.link-overlay > :nth-child(1)').first().click({force: true})
       cy.get('.flex-items-center > :nth-child(3) > .btn').click({force: true})

     })
})

