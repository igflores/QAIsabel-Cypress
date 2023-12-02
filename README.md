# 🧪**Testing Automation - Cypress 13 | Isabel Gonzalez's personal repository for testing practices**

# Project structure
```
    PONER LA ESTRUCTURA AQUI <<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>
```


# How to get started:
>**1. Clone the Project:**
    ```
    git clone git@github.com:igflores/QAIsabel-Cypress.git
    ```

>**2. Install all dependencies:**
    ```
    npm ci
    ```

*The "ci" command is for installing all locked project dependencies

>**3. To open the Cypress app, run the command:**
    ```
    npm test
    ```

>**4. To run tests and generate XML and HTML reports, execute:**
    ```
    npm run file */**/<filename>
    ```
Where the variable "file" is:
```
`cypress run --browser chrome --reporter cypress-multi-reporters --reporter-options configFile=jsconfig.json --record --key {key} --spec`
```
Which is a shortcut to run tests from a specified directory using the Chrome browser, generating an XML report for Jira import, an HTML report for display, and additionally updating the Cypress Project Dashboard.
