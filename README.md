# 🧪 Testing Automation - Cypress 13 | Isabel Gonzalez's personal repository for testing practices

## Project structure
```
    PONER LA ESTRUCTURA AQUI <<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>
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
```
`cypress run --browser chrome --reporter cypress-multi-reporters --reporter-options configFile=jsconfig.json --record --key {key} --spec`
```
Which is a shortcut to run tests from a specified directory using the Chrome browser, generating an XML report for Jira import, an HTML report for display, and additionally updating the Cypress Project Dashboard.



## Instalación

### Clonar el Repositorio

Puedes clonar este repositorio utilizando el siguiente comando:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
