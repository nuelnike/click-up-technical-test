import { testCases } from "../fixtures/repo-test-cases"

export const RepoCreation = (i) => { 
    cy.get('#repo-name').type(testCases[i].repoName ?? '{backspace}', { delay: 200 });
    cy.get('#repo-description').type(testCases[i].repoDesc ?? '{backspace}', { delay: 200 });
    cy.get('#create-repo-button').click();
}