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
   const productPage= new ProductPage()
    cy.visit('https://rahulshettyacademy.com/angularpractice/shop');

    this.data.phoneName.forEach((element) => cy.addItems(element));
    productPage.getCheckOut().click()
    productPage.totalProductCount()

  }
  )
})