import HomePage from '../e2e/PageObject/HomePage'


describe('template spec', () => {

  beforeEach(function () {
    // "this" points at the test context object
    cy.fixture('example').then((data) => {
      // "this" is still the test context object
      this.data = data
    })
  })

  it.only('fill form', function () {
  const homepage= new HomePage();
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    homepage.getNameInForm().type(this.data.name)
    homepage.getEmailFrom().type(this.data.email)
    homepage.getPasswordForm().type(this.data.password)
    homepage.getCheckBoxAfterForm().check()
    homepage.getGender().select(this.data.gender)
    homepage.getCheckBox().check('option2')
    cy.get(':nth-child(2) > .nav-link').click()

  })

  it('check validation', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');

    cy.get(':nth-child(1) > .form-control').type(this.data.name).should('have.attr', 'minlength', '2')
    cy.get(':nth-child(2) > .form-control').type(this.data.email)
    cy.get(':nth-child(3) > .form-control').type(this.data.password)
    cy.get('.ng-untouched').should("have.value", this.data.name)
    cy.get('#inlineRadio3').should('be.disabled')

  }
  )


})