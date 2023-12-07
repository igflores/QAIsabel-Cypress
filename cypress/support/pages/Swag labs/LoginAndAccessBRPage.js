class LoginSwagLabPage {
	get = {
		userNameInput: () => cy.get('[data-test="username"]'),
		passwordInput: () => cy.get('[data-test="password"'),
		loginButton: () => cy.get('[data-test="login-button"]'),
		errorMessageDisplay: () => cy.get('[data-test="error"]'),
	};

	Login(username, password) {
		username && this.get.userNameInput().type(username);
		password && this.get.passwordInput().type(password);
		this.get.loginButton().click();
	}
}
export const loginSwagLabsPage = new LoginSwagLabPage();
