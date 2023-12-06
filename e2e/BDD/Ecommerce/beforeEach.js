beforeEach(function () {
    const self = this;
    cy.fixture('example').then(function (data) {
      self.data = data;
    });
  });
  