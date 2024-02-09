/// <reference types="cypress" />

function selectGroupMenueItem(groupName){
    cy.contains('a', groupName).then(menu=>{
        cy.wrap(menu).find('.expand-state g g').invoke('attr','data-name').then(attr=>{
           if(attr.includes('left')){
               cy.wrap(menu).click();
           }
        })
       })
}

class Navigation {
    navigateToForms() {
        selectGroupMenueItem('Forms');
        
        cy.contains('Form Layouts').click();
    }
    navigateToModal() {
        cy.contains('Modal & Overlays').click();
        cy.contains('Toastr').click();
    }
    navigateToTooltip() {
        cy.contains('Modal & Overlays').click();
        cy.contains('Tooltip').click();
    }
    navigateToDatePicker() {
        selectGroupMenueItem('Forms');
        cy.contains('Datepicker').click();
    }
    navigateToTable() {
        cy.contains('Tables & Data').click();
        cy.contains('Smart Table').click();
    }
}


export default Navigation;

//export const navigateTo = new Navigation()