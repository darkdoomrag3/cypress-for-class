class HomePage {

    getNameInForm() {
        return cy.get(':nth-child(1) > .form-control')
    }

    getEmailFrom() {
        return cy.get(':nth-child(2) > .form-control')
    }
    getPasswordForm() {
        return cy.get(':nth-child(3) > .form-control')
    }
    getTwoWayDataBinding() {
        return cy.get('.ng-untouched')
    }

    getGender() {
        return cy.get('#exampleFormControlSelect1')
    }
    getEnterpernure() {
        return cy.get('#inlineRadio3')
    }
    getCheckBox() {
        return cy.get('#inlineRadio2')
    }
    getCheckBoxAfterForm() {
        return cy.get('#exampleCheck1')
    }
}

export default HomePage;