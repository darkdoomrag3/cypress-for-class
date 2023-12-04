class ProductPage {
    getCheckOut() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    totalProductCount() {
        var sum = 0;

        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const amount = $el.text();
            var res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)
        }).then(() => {
            cy.log(sum)
        })

        cy.get('h3 > strong').then((element) => {
            const amount = element.text();
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)

        })

  
    }



}

export default ProductPage;