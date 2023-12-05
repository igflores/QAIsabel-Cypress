# 🧪 Testing Automation - Cypress 13 | Isabel Gonzalez's personal repository for testing practices


## Project structure
```plaintext
.
├── crearTest.sh
├── cypress
│   ├── downloads               # Store files that have been downloaded during the execution of tests
│   ├── fixtures                # Store test data
│       ├── data                # Store static test data (.json)
│       ├── images              # Store images are required for certain tests
│   └── support                 # Scripts de soporte y comandos
│       ├── pages               # Organize files related to the Page Object Model (POM)
│           ├── Test SUT        # Store POMs grouped by System Under Test (SUT)
│           ├── ...
│       ├── utils               # Store files containing common functions, methods, or utilities shared across the code
│           ├──RemoveLogs.js    # Default command to prevent exception errors
│       ├── commands.js         # To create custom commands and overwrite existing commands
│       ├── e2e.js              # Automatically processed before test files in Cypress, and used for global configuration and behaviors 
│   ├── tests                   # Store end-to-end tests (E2E) 
│           ├── Test SUT        # Store tests grouped by System Under Test (SUT)
│           ├── ...
├── .gitignore                  # Files and folders excluded from version control
├── cypress.config.js           # Main configuration of Cypress
├── jsconfig.json               # Configures compiler options and provides project structure information
├── package-lock.json           # Ensures the consistency of dependency versions in Node.js projects
├── package.json                # List of dependencies and Scripts
├── regression.json             # Configuration for Regression testing      <<<<-----------------
└── Readme.md                   # Readme

```

## 📦 Instalación y configuración

### 1. **Clona el repositorio**
```bash
git clone git@github.com:igflores/QAIsabel-Cypress.git
```

### 2. Install all dependencies
```bash
npm ci
```

*The "ci" command is for installing all locked project dependencies

### 3. To open the Cypress app, run the command
```bash
npm test
```

### 4. To run tests and generate XML and HTML reports, execute
```bash
npm run file */**/<filename>
```

Where the variable "file" is:
```bash
`cypress run --browser chrome --reporter cypress-multi-reporters --reporter-options configFile=jsconfig.json --record --key {key} --spec`
```
Which is a shortcut to run tests from a specified directory using the Chrome browser, generating an XML report for Jira import, an HTML report for display, and additionally updating the Cypress Project Dashboard.

