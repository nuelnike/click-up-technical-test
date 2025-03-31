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
  ├── e2e
  │   ├── login.cy.js  # Test script for login creation
  │   ├── repo-creation.cy.js  # Test script for repository creation
  ├── mixins
  │   ├── login.js  # login reuseable functions 
  │   ├── repo-creation.js  # repository creation reuseable functions 
  ├── support
  │   ├── commands.js           # Custom reusable Cypress commands
  │   ├── e2e.js
  ├── fixtures
  │   ├── login-test-cases      # test case data for login
  │   ├── repo-test-cases       # test case data for repo creation
  ├── cypress.json              # Cypress configuration file
```

## Test Case: Repository Creation
### Steps:
1. Log in with valid credentials.
2. Navigate to the "New Repository" page.
3. Enter repository details (name, description).
4. Click the "Create Repository" button.
5. Verify that the repository was created successfully and appears in the repository list.
  
## Reporting & Logs
Cypress automatically generates reports and logs under the `cypress/videos` and `cypress/screenshots` directories if a test fails.
