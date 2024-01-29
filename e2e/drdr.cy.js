/// <reference types="Cypress" />

describe('task for dr dr', function () {

    it('First Test', function () {
        cy.visit("https://play2.automationcamp.ir/")
        cy.title().should('eq', 'Try Testing This')
        cy.get('#fname').type('RAD')
        cy.get('#owc').select('option 2')

    })

})