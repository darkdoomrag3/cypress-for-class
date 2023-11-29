/// <reference types="cypress" />



describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if (text.includes('Python ')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then((price) => {
                    const textPrice = price.text()
                    expect(textPrice).to.equal('25')
                })
            }
        })
    })
it.only('test two',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // cy.get('.mouse-hover').invoke('show')
    cy.contains('Top').click({force: true})
    cy.url().should('contain','top')
})

})