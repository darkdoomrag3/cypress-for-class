/// <reference types="cypress" />

beforeEach(() => {

    cy.viewport(1280, 720)
})

describe('Validate Form', () => {

    it('validate Email', () => {
        cy.visit('http://localhost:4200/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();
        cy.get("input[type='Email']").first().type("emad@gmail.com");

    })

    it('Tehory behind cypress for interact with DOM and element for students', () => {
        cy.visit('http://localhost:4200/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        //by Tag name    
        cy.get('input');

        //by ID
        cy.get('#inputEmail');
        //by Class Value
        cy.get('.input-full-width');
        //by attribute name 
        cy.get('[fullwidth]');
        //by attribute and value
        cy.get('[placeholder="Email"]');
        //by entire class
        cy.get('[class="input-full-width size-medium shape-rectangle"]');
        //by two attribute
        cy.get('[placeholder="Email"][fullwidth]');
        //by tag,attribue, id and class

        cy.get('input[placeholder="Email"]#inputEmail.input-full-width');
        //by data-testid
        cy.get('[data-cy="inputEmail1"]');

        //Theory behid cypress
        //get() - find element on the page by locator globally
        //find()- find child elements by locator
        //contains()- find HTML text and by text and locator 

        cy.contains('[status="primary"]','Sign in');
        cy.contains('nb-card','Horizontal form').contains('Sign in').get("[status='warning']");
        cy.contains('nb-card','Horizontal form').find('button');
        //cypress chains and DOM
        cy.get('#inputEmail3').parents('form').find('nb-checkbox').click().should('be.checked');
    
    })

    it.only('Saving subject of the command',()=>{
        cy.visit('http://localhost:4200/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();
        cy.get('nb-card').find('[for="inputEmail1"]').should('contain','Email');
     
        // this is not correct since cypress is asynchronous and it has his own method to assign variable 
        // const usingTheGridForm = cy.contains('nb-card','Using the Grid');
        // usingTheGridForm.find('[for="inputPassword2"]').should('have.text','Password');
    
        // 1 using cypress Alies( its global which means that you can use it in all part of project)
        cy.contains('nb-card','Using the Grid').as('usingTheGridForm')
        cy.get('@usingTheGridForm').find('[for="inputPassword2"]').should('have.text','Password');

        // 2 then() method(singel method and its not global)
        cy.contains('nb-card','Using the Grid').then((usingTheGridForm)=>{
            cy.wrap(usingTheGridForm).find('[for="inputEmail1"]').should('contain','Email');
            cy.wrap(usingTheGridForm).find('[for="inputPassword2"]').should('have.text','Password');  
        })

    })

}) 