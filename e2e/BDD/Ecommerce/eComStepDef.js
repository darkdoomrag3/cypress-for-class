import { When,Given,Then,Step ,Before, BeforeStep, After, AfterStep,And } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../../PageObject/HomePage'
import ProductPage from '../../PageObject/ProductPage'
     const homepage= new HomePage();
     const productPage = new ProductPage()    


Given("I open Ecomemrce page",()=>{

    cy.visit('https://rahulshettyacademy.com/angularpractice/');
})

When("I add items to Cart",()=>{
    homepage.getNameInForm().type(this.data.name)
    homepage.getEmailFrom().type(this.data.email)
    homepage.getPasswordForm().type(this.data.password)
    homepage.getCheckBoxAfterForm().check()
    homepage.getGender().select(this.data.gender)
    homepage.getCheckBox().check('option2')
    cy.get(':nth-child(2) > .nav-link').click()
})

When("Validate the total prices",()=>{
    productPage.totalProductCount()
    cy.get(':nth-child(5) > :nth-child(5) > .btn').click()
   
  
})

Then("Select the counrt submit and verify thank you",()=>{
    cy.get('div input:nth-child(2)').type("Iran")
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({ force: true })
    cy.get('.ng-untouched > .btn').click()
    cy.get('.alert').invoke('text').should('include', ' Thank you! Your order will be delivered in next few weeks :-)')
})