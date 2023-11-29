describe('template spec', () => {

    beforeEach(() => {

        cy.viewport(1280, 720)
    })

    it('fill form', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get(':nth-child(1) > .form-control').type("Emad")
        cy.get(':nth-child(2) > .form-control').type("Emad@gmail.com")
        cy.get(':nth-child(3) > .form-control').type("Emad@Deym1370")
        cy.get('#exampleCheck1').check()
        cy.get('#exampleFormControlSelect1').select('Female')
        cy.get('#inlineRadio2').check('option2')

    })
    


})