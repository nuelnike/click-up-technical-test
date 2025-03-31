import { testCases } from "../fixtures/login-test-cases";
import { UserLogin } from "../mixins/login";

describe("User Authentication", () => {
  beforeEach(() => {
      cy.visit("https://repomanagement.com/login");
  });

  for (let i = 0; i < testCases.length; i++) {
    it(testCases[i].testCase, () => {
      UserLogin(i); // initate a user login
      if(testCases[i].testTyp == "positive") cy.url().should("include", "/dashboard");
      else{
        cy.get('#error-msg')
        .should('be.visible')
        .and('contain', 'Error!'); // Optional text verification
        cy.url().should("include", "/login"); // ensure user still remains on the login page
      }
    });
  }
});