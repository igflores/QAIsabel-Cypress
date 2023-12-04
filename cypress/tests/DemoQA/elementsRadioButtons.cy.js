import { removeLogs } from '../../support/utils/RemoveLogs';

//* ----------------------- TEST SET -----------------------------------------------------------------------
describe('🪶ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('Precondición: Estar ubicado en Radio Button Page', () => {
		cy.visit(`${Cypress.env('baseUrlDemoQA')}/radio-button`);
		cy.url().should('contain', 'radio-button');
	});

//* ----------------------- TEST CASES -----------------------------------------------------------------------
	it('GX-29820 | TC01: Validar visualizar el label "Yes" cuando se selecciona el radio-button "Yes"', () => {
		cy.get('#yesRadio').click({ force: true });
		cy.contains('You have selected').children().should('have.text', 'Yes');
	});

	it.only('GX-29820 | TC02: Validar visualizar el label “Impressive” cuando se selecciona el radio-button "Impressive"', () => {
		cy.get('#impressiveRadio').click({ force: true });
		cy.contains('You have selected').children().should('have.text', 'Impressive');
	});

	it('GX-29820 | TC03: Validar que esté deshabilitado y no se pueda seleccionar el radio-button con label "No"', () => {
		cy.get('#noRadio').should('be.disabled');
		cy.contains('You have selected').should('not.exist');
	});
});

removeLogs();