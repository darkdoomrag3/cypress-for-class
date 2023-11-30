
describe('template spec', () => {

  beforeEach(function () {
    // "this" points at the test context object
    cy.fixture('example').then((data) => {
      // "this" is still the test context object
      this.data = data
    })
  })

  it('fill form', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    cy.get(':nth-child(1) > .form-control').type(this.data.name)
    cy.get(':nth-child(2) > .form-control').type(this.data.email)
    cy.get(':nth-child(3) > .form-control').type(this.data.password)
    cy.get('#exampleCheck1').check()
    cy.get('#exampleFormControlSelect1').select(this.data.gender)
    cy.get('#inlineRadio2').check('option2')

  })

  it.only('check validation', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');

    cy.get(':nth-child(1) > .form-control').type(this.data.name).should('have.attr', 'minlength', '2')
    cy.get(':nth-child(2) > .form-control').type(this.data.email)
    cy.get(':nth-child(3) > .form-control').type(this.data.password)
    cy.get('.ng-untouched').should("have.value", this.data.name)
    cy.get('#inlineRadio3').should('be.disabled')

  }
  )


})