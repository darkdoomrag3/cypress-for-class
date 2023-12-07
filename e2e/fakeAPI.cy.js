/// <reference types="cypress" />



describe('template spec', () => {
    it("first API test", () => {
       cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        cy.intercept({ method: "GET", url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty" }, 
        { statusCode: 200,body:[{
            "book_name":"RestAssured with Java",
            "isbn": "RSU",
            "aisle":"2301"
        }] }).as("bookAPI")
   cy.get("button[class='btn btn-primary']").click()
   cy.wait("@bookAPI")
    })
})

