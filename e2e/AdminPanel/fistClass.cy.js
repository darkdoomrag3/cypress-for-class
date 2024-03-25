/// <reference types="cypress" />

beforeEach(() => {
    cy.openHomePage()
    cy.viewport(1280, 720)
})

describe('first Test', () => {

    it('First Test', () => {
        //Theory behind selector of cypress
        //get() find element on the page by locator
        cy.visit('http://localhost:4200/')
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();
        //by ID
        cy.get('#inputEmail1')
        //by class value
        cy.get('.input-full-width')
        //by attribute name
        cy.get('[fullwidth]')
        //by attribute name and value        
        cy.get('[placeholder="Email"]')
        //by entire class
        cy.get('[class="input-full-width size-medium shape-rectangle"]')
        //by two attribute
        cy.get('[placeholder="Email"][fullwidth]')
        //by tag, attribute, id, class
        cy.get('[placeholder="Email"]#inputEmail1.input-full-width')
        cy.get('[data-cy="imputEmail1"]')

        //find() find child element by locator
        //contain() find HTML text and locator
        cy.contains('Forms').click();
        cy.get('#exampleInputPassword1').type('23445sdfsdr')
        cy.get(':nth-child(3) > .size-medi').type('Emad')

    })


})