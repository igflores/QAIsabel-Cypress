# 🧪 Testing Automation - Cypress 13 | Isabel Gonzalez's personal repository for testing practices

## ✨ Project structure
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

### **1.** **Clone the repository**
```bash
git clone git@github.com:igflores/QAIsabel-Cypress.git
```

### **2.** Install all dependencies using npm
```bash
npm ci
```

>"npm ci is a preferred option for CI/CD environments where a fast and consistent installation of dependencies is sought, especially when working with lock files (package-lock.json or npm-shrinkwrap.json).


### **3.** To open the Cypress app, run the command
```bash
npm test
```

## ✨ Used Dependencies
These are the dependencies used in this project:
```json
"devDependencies": {
    "@types/node": "20.10.2",
    "cypress": "13.6.0",
    "cypress-plugin-api": "2.11.1",
    "@faker-js/faker": "8.3.1"
  },
```

## ✨ Running tests and generating reports with Allure <<<-----
To run the tests and take advantage of the integration with Allure:

**1.** **Ejecuta tus pruebas con Cypress:**

```bash
yarn cypress run --env allure=true
```

**2.** **After execution, you can generate the report with Allure:**

```bash
allure generate --clean -o allure-report && allure open
```
>This will open a browser window with a detailed report generated by Allure.