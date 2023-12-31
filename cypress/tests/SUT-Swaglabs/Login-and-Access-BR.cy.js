import { loginSwagLabsPage } from '../../support/pages/Swag labs/LoginAndAccessBRPage';

const { baseUrlSawglab } = Cypress.env();
const { login: loginProperties, endpoint } = Cypress.env('SawglabSUT'); //-> loginProperties = Cypress.env('swagLabs').login

const fillLoginFormAndGetErrorMessage = (userName, password, errorMessage) => {
	loginSwagLabsPage.Login(userName, password);
	cy.url().should('contain', baseUrlSawglab);
	if (errorMessage !== undefined) {
		loginSwagLabsPage.get.errorMessageDisplay().should('contain', errorMessage);
	}
};

const visitInvalidEndpoint = (endpoint, errorMessage) => {
    cy.visit(baseUrlSawglab + endpoint, { failOnStatusCode: false });
	cy.url().should('contain', baseUrlSawglab);
	loginSwagLabsPage.get.errorMessageDisplay().should('contain', errorMessage);
};

describe('GX3-385 | SwagLabs | Account | Login and sccessBR', () => {
	beforeEach('Preconditions: ', () => {
		cy.visit(baseUrlSawglab);
		cy.url().should('contain', 'saucedemo.com');
	});

	it('416 | TC01: Check that the user can log in when providing valid credentials', () => {
		fillLoginFormAndGetErrorMessage(loginProperties.users.correctUser, loginProperties.users.correctPass);
	});

	it('416 | TC02: Check that the user can not log in when the username is locked', () => {
		fillLoginFormAndGetErrorMessage(loginProperties.users.lockUser, loginProperties.users.correctPass);
	});

	it('416 | TC03: Check that the user can not log in with an incorrect or nonexistent username', () => {
		fillLoginFormAndGetErrorMessage(loginProperties.users.userInv, loginProperties.users.correctPass);
	});

	it('416 | TC04: Check that the user cannot log in with an incorrect or nonexistent password', () => {
		fillLoginFormAndGetErrorMessage(loginProperties.users.correctUser, loginProperties.users.passInv);
	});

	it('416 | TC05: Check that the user can not log in with an incorrect or nonexistent username and password', () => {
		fillLoginFormAndGetErrorMessage(loginProperties.users.userInv, loginProperties.users.passInv);
	});

	it('416 | TC06: Check that the user can not log in when leaving the username empty in the form', () => {
		fillLoginFormAndGetErrorMessage('', loginProperties.users.correctPass);
	});

	it('416 | TC07: Check that the user can not log in when leaving the password empty in the form', () => {
		fillLoginFormAndGetErrorMessage(loginProperties.users.correctUser, '');
	});

	it('416 | TC08: Check that the user can not log in when leaving the username and password empty in the form', () => {
		fillLoginFormAndGetErrorMessage('', '');
	});

	it('416 | TC09: Check that the user can not access an endpoint without logging in (/inventory.html)', () => {
        visitInvalidEndpoint(endpoint.inventory, loginProperties.errorMsg.inventoryError);
	});

	it('416 | TC10: Check that the user can not access an endpoint without logging in (/cart.html)', () => {
		visitInvalidEndpoint(endpoint.cart, loginProperties.errorMsg.cartError);
	});

	it('416 | TC11: Check that the user can not access an endpoint without logging in (/checkout-step-one.html)', () => {
		visitInvalidEndpoint(endpoint.checkoutOne, loginProperties.errorMsg.checkoutOneError);
	});

	it('416 | TC12: Check that the user can not access an endpoint without logging in (/checkout-step-two.html)', () => {
		visitInvalidEndpoint(endpoint.checkoutTwo, loginProperties.errorMsg.checkoutTwoError);
	});

	it('416 | TC13: Check that the user can not access an endpoint without logging in (/checkout-complete.html)', () => {
		visitInvalidEndpoint(endpoint.checkoutAll, loginProperties.errorMsg.checkoutAllError);
	});

	it('416 | TC14: Check that the user can not access an endpoint without logging in (/inventory-item.html)', () => {
		visitInvalidEndpoint(endpoint.product, loginProperties.errorMsg.inventoryItemError);
	});
});