import { When,Given,Then,Step ,Before, BeforeStep, After, AfterStep,And } from "@badeball/cypress-cucumber-preprocessor";

    
        
Given("I open task page",()=>{

    cy.visit('https://play2.automationcamp.ir/');
})

When("I open the page and check title",function(){
    cy.title().should('eq', 'Try Testing This')
})

When("I write my name which is RAD into input",function(){
    cy.get('#fname').type('RAD')
  
})

Then("Select option 2",()=>{
    cy.get('#owc').select('option 2')
})