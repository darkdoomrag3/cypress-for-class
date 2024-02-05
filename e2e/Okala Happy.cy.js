/// <reference types="Cypress" />

describe('Happy Scenario', function () {

    it('Happy on Dev', function () {
       
        cy.visit("https://dev-customercare.okala.com/");
        cy.get('#mobile').type('09376681856');
        cy.contains('ثبت و ادامه').click();
        cy.get('#password').type('Emad@40304030')
        cy.contains('ورود به اکالا').click();
        cy.get('.main-container > .searchbox > input').click();
        cy.get('input.shadow-lg').type('شیر').type('{enter}')
        // cy.contains('مشاهده همه').click();
     
    })



})