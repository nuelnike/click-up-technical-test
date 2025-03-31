import { testCases } from "../fixtures/repo-test-cases";
import { UserLogin } from "../mixins/login";
import { RepoCreation } from "../mixins/repo-creation";

describe('Repository Creation', () => {
    beforeEach(() => {
        cy.visit("https://repomanagement.com/login"); 
        UserLogin(0); // just run the first login test for valid login
        cy.visit("https://repomanagement.com/repositories"); // navigate to repository page
        cy.get("#add-repo-btn").click(); // click on add new repo button
        cy.wait(2000) // wait for 2 sec for page redirection
        cy.url().should("include", "/add-repository"); // ensure user is on the add repository page
    });

    for (let i = 0; i < testCases.length; i++) { 
        it(testCases[i].testCase, () => {
            RepoCreation(i);
            if(testCases[i].testTyp == "positive"){
                cy.contains('Repository created successfully').should('be.visible');
                cy.wait(2000); // wait for 2 sec for page redirection
                cy.title().should('eq', testCases[i].repoName + " Repository"); // confirm page title after repo creation and redirection to open new repository
            }
            else{
                cy.contains('Repository creation failed').should('be.visible');
                cy.url().should("include", "/add-repository"); // ensure user still remains on the add-repository page
            }
        }); 
    }

});