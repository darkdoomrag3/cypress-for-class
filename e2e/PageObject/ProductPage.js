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

        // // Retrieve the total sum of the basket
        // cy.get('h3 > strong').invoke('text').then((basketTotal) => {
        //     // Collect individual item prices and calculate their sum
        //     cy.get('tbody > tr').each(($el) => {
        //         cy.wrap($el).find('td:nth-child(4)').then(($price) => {
        //             const numericPrice = parseInt($price.text().replace('₹.', ''));
        //             if (!isNaN(numericPrice)) {
        //                 totalSum += numericPrice;
        //             }
        //         });
        //     }).then(() => {
        //         // Format totalSum for comparison
        //         const formattedTotalSum = totalSum;
        //         const formattedTotalBasket = basketTotal
        //         // Compare the individual item sum with the total basket sum
        //         expect(formattedTotalSum).to.equal(formattedTotalBasket.toString());
        //     });
        // });
    }



}

export default ProductPage;