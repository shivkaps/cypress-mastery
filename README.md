# Cypress Mastery

This repository contains 3 cypress frameworks:

1. Cypress-Cucumber
2. Cypress e2e test
3. Cypress Visual Tests

## Project Structure

The project is structured as follows:

```
.
├── Dockerfile - code supporting dockerizing the cypress mastery framework
├── cypress.json - cypress configuration
├── package.json - dependencies and npm scripts
├── package-lock.json - dependencies
├── integration - cypress test files
│   ├── common/ - common step definitions
    ├── cucumber-tests/ - features encoded in Gherkin
    ├── e2e/ - e2e automation framework
    ├── visual-tests/ - visual testing framework cypress
├── page-objects - objects used in e2e test framework
│   ├── components/ - common components of application
    ├── basePage.js - page wise objects
    ├── pages/ - objects that can be used for all pages
├── config - variables for multiple environments
    ├── staging.json - variables for staging environment
    ├── prod.json - variables for production environment
├── plugins
    ├── index.js - enable you to modify/extend the internal behavior
├── support
    ├── commands.js - custom commands (reusable functions)
    ├── index.js - processed and loaded automatically before test files
└── README.md - this file
```

### Dependencies

#### cypress

#### cypress-image-snapshot

#### cypress-cucumber-preprocessor

#### cypress-xpath

#### prettier

## Configuration for E2E

The project uses configuration files located in the root of the codebase under the directory config
`prod.json` and `staging.json`.

## Running

In order to execute the complete mastery framework:

        npm run cy:run-mastery

        docker run cypress-mastery

In order to execute the BDD Cucumber framework:

        npm run cy:bdd

        docker run cypress-mastery cy:bdd

In order to execute the e2e framework in staging environment:

        npm run cy:run-e2e-staging

        docker run cypress-mastery cy:run-e2e-staging

In order to execute the e2e framework in prod environment:

        npm run cy:run-e2e-prod

        docker run cypress-mastery cy:run-e2e-prod

In order to execute the BDD Cucumber framework:

        npm run cy:run-visual-tests

        docker run cypress-mastery cy:run-visual-tests

## Adding New Features/Scenarios

### Add Your `.feature` File

To add a new feature you need to create a new `.feature` file in the
`integration/cucumber-tests` directory. Please use kebab-case for the file name.

Then you need to add one or more scenarios to the feature file. You can refer
to the [Gherkin Language Reference](https://cucumber.io/docs/gherkin/reference/)
and to the already existing `.feature` files for this step.

### Implement Your Steps

The `common/` directory implements the common steps share across all feature files.
The `cucumber-tests/stepName.js/` implements the steps specific to the feature file. stepName should be same as the feature file.
