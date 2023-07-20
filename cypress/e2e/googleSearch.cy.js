///<reference types="cypress"/>

it('Google search',()=>{
    cy.visit('https://www.google.com')
    cy.get('#APjFqb').type('github')
    cy.contains('Google Search').click()
    cy.get('.w7Nvcd').type('JubairRahman')
    cy.get('.JOmIqc').click()
    cy.get('#rso > :nth-child(1) > .g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb').click()
    // cy.get('.gist-snippet > :nth-child(1) > .js-gist-file-update-container > a > .link-overlay').click()
    //  cy.visit('https://gist.github.com/JubairRahman/59803cfdfe43a7427225a395582ad527').click()
    // cy.get('.link-overlay > :nth-child(1)').click()
    cy.origin('https://gist.github.com', () => {

    // Now you can interact with elements inside the iframe
        cy.get('.link-overlay > :nth-child(1)').first().click({force: true})
        cy.get('.flex-items-center > :nth-child(3) > .btn').click({force: true})

    })
})

