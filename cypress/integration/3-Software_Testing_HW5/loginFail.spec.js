describe("testing failed login attempt", () => {
   it("goes to sign in page from learning center", () => {
      cy.viewport(1280, 720);
      cy.visit("https://www.alibaba.com/");
      cy.contains("Learning Center").invoke("removeAttr", "target").click();
      cy.get(".NoLanded").click();
      cy.url().should("include", "login");
   });

   it("types invalid email and password", () => {
      cy.get("#fm-login-id")
         .type("invalid@gmail.com")
         .should("have.value", "invalid@gmail.com");

      cy.get("#fm-login-password")
         .type("invalidPassword")
         .should("have.value", "invalidPassword");
   });

   it("uncheck stay signed in", () => {
      if (cy.get("#fm-keep-login").check()) {
         cy.get("#fm-keep-login").click();
      }
   });

   it("check the error", () => {
      //cy.get("#fm-login-submit").click();

      //const iconErrorExistsFlag = cy.find(".icon-error").length > 0;
      //expect(iconErrorExistsFlag).to.equal(true);
      cy.get("#fm-login-submit").should("be.disabled");
   });
});
