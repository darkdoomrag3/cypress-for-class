import ProductPage from '../e2e/PageObject/ProductPage'

describe('template spec', () => {
  beforeEach(function () {
    // "this" points at the test context object
    cy.fixture('example').then((data) => {
      // "this" is still the test context object
      this.data = data
    })
  })


  it.only('check validation', function () {

    const productPage = new ProductPage()
    cy.visit(Cypress.env('baseUrl') + "/angularpractice/shop");

    this.data.phoneName.forEach((element) => cy.addItems(element));
    productPage.getCheckOut().click()
    productPage.totalProductCount()
    cy.get(':nth-child(5) > :nth-child(5) > .btn').click()
    cy.get('div input:nth-child(2)').type("Iran")
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({ force: true })
    cy.get('.ng-untouched > .btn').click()
    cy.get('.alert').invoke('text').should('include', ' Thank you! Your order will be delivered in next few weeks :-)')
  }
  )
})