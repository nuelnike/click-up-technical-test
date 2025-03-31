import { testCases } from "../fixtures/login-test-cases"

export const UserLogin = (i) => {  
    cy.get("#username").type(testCases[i].username ?? '{backspace}', { delay: 200 });
    cy.get("#password").type(testCases[i].password ?? '{backspace}', { delay: 200 })
    cy.get("#login-button").click();
}