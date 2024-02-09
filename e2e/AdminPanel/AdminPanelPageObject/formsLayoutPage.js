/// <reference types="cypress" />



class FormsLayoutPage{
    
    submitInlineFormWithName(name,email){
        cy.contains('nb-card','Inline form').find('form').then(form=>{
            cy.wrap(form).find('[placeholder="Jane Doe"]').type(name);
            cy.wrap(form).find('[placeholder="Email"]').type(email);
            //for checkbox we can use ['class="custom-checkbox"].click()
            cy.wrap(form).find('[type="checkbox"]').check({force : true});
            cy.wrap(form).submit();
        })

    }

    submitBasaicForm(email,password){
        cy.contains('nb-card','Basic form').find('form').then(basicForm=>{
            cy.wrap(basicForm).find('#exampleInputEmail1').type(email);
            cy.wrap(basicForm).find('#exampleInputPassword1').type(password);
            cy.wrap(basicForm).find('[type="checkbox"]').check({force: true});
            cy.wrap(basicForm).submit();
        })
    }


}


export default FormsLayoutPage;

