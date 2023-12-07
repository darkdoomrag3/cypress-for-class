beforeEach(function () {
  cy.fixture('example').then(function (data) {
   return this.data = data;
  });
});
