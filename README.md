# Automated Repository Creation Test with Cypress

## Overview
This project contains an automated test script for verifying the repository creation functionality using **Cypress**. The test ensures that users can successfully create a new repository and that it appears in the repository list.

## Prerequisites
Before running the test, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14+ recommended)
- [Cypress](https://www.cypress.io/) installed globally or locally

## Installation
To set up the project, follow these steps:

1. Clone this repository:
   ```sh
   git clone https://github.com/your-repo/cypress-repo-test.git
   cd cypress-repo-test
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Tests
You can run the tests in different modes:

### 1. Run in Cypress Test Runner (GUI mode)
```sh
npx cypress open
```
- Select the test file and run it interactively.

### 2. Run in Headless Mode
```sh
npx cypress run
```
- Executes all tests in the command line without opening a browser.

## Test Structure
The test suite is structured as follows:

```
/cypress
  ├── integration
  │   ├── repoCreation.spec.js  # Test script for repository creation
  ├── support
  │   ├── commands.js           # Custom reusable Cypress commands
  ├── fixtures
  │   ├── testData.json         # Sample test data (optional)
  ├── cypress.json              # Cypress configuration file
```

## Test Case: Repository Creation
### Steps:
1. Log in with valid credentials.
2. Navigate to the "New Repository" page.
3. Enter repository details (name, description).
4. Click the "Create Repository" button.
5. Verify that the repository was created successfully and appears in the repository list.

## Sample Test Code
```javascript
describe('Repository Creation', () => {
    beforeEach(() => {
        cy.visit('https://app.example.com/login');
        cy.get('#username').type('testuser');
        cy.get('#password').type('securepassword');
        cy.get('#login-button').click();
        cy.url().should('include', '/dashboard');
    });

    it('should create a new repository successfully', () => {
        cy.contains('New Repository').click();
        cy.get('#repo-name').type('automated-test-repo');
        cy.get('#repo-description').type('This is a test repository');
        cy.get('#create-repo-button').click();
        cy.contains('Repository created successfully').should('be.visible');
        cy.url().should('include', '/repo/automated-test-repo');
        cy.get('.repo-list').should('contain', 'automated-test-repo');
    });
});
```

## Configuration & Environment Variables
You can store test credentials in `cypress.env.json` to avoid hardcoding:
```json
{
   "username": "testuser",
   "password": "securepassword"
}
```
Then, reference them in the test:
```javascript
cy.get('#username').type(Cypress.env('username'));
cy.get('#password').type(Cypress.env('password'));
```

## Reporting & Logs
Cypress automatically generates reports and logs under the `cypress/videos` and `cypress/screenshots` directories if a test fails.

## Contribution
If you'd like to contribute, feel free to open a PR or report issues.

## License
This project is open-source and available under the [MIT License](LICENSE).

---
Happy testing with Cypress! 🚀

