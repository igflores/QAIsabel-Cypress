import { removeLogs } from '../../support/utils/RemoveLogs';
import { practiceFormPage } from '../../support/pages/DemoQA/practiceForm';

//* ----------------------- TEST SET -----------------------------------------------------------------------
describe('GX-34872 | ✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('Precondition: to use the Practice Form', () => {
		cy.visit(`${Cypress.env('baseUrlDemoQA')}/automation-practice-form`);
		cy.url().should('contain', 'practice-form');
	});

//* ----------------------- TEST CASES -----------------------------------------------------------------------
	it('GX-34871 | TC01: Validate that a popup displays all the valid data', () => {
		const formData = practiceFormPage.fillAndGetInputData();
		const check = [
			{ data: 'firstNameInput', value: formData.firstName },
			{ data: 'lastNameInput', value: formData.lastName },
			{ data: 'emailInput', value: formData.email },
			{ data: 'mobileInput', value: formData.mobile },
			{ data: 'currentAddressInput', value: formData.address },
		];
		check.forEach(({ data, value }) => {
			practiceFormPage.get[data]().should('have.value', value);
		});

		practiceFormPage.selectGender();
		practiceFormPage.get.gender().then(select => {
			expect(select.text()).to.contain(Cypress.env('genderSelected'));
		});

		practiceFormPage.SelectHobbies();
		practiceFormPage.get.hobbies().then(selectHobbie => {
			expect(selectHobbie.text()).to.contain(Cypress.env('hobbiesSelected'));
		});

		practiceFormPage.uploadPicture();
		practiceFormPage.get.pictureButton().should('contain.value', 'upexlogo.png');

		practiceFormPage
			.fillAndSelectSubject()
			.invoke('text')
			.then(subjectName => {
				cy.log(subjectName);
				practiceFormPage.get.subjectsContainer().should('contain.text', subjectName);
			});

		practiceFormPage.selectBirthDay();
		practiceFormPage.get.BirthdayInputCompleted().should('not.have.value', '');
		const dateOfBirthField = practiceFormPage.get.BirthdayInputCompleted();
		dateOfBirthField.invoke('val').then(dateOfBirth => {
			expect(dateOfBirth).to.match(/^(0[1-9]|[12]\d|3[01]) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (19\d\d|20\d\d|2100)$/);
		});

		practiceFormPage
			.selectState()
			.invoke('text')
			.then(state => {
				cy.log(state);
				practiceFormPage.get.state().should('be.visible');
			});

		practiceFormPage
			.selectCity()
			.invoke('text')
			.then(city => {
				cy.log(city);
				practiceFormPage.get.city().should('be.visible');
			});

		practiceFormPage.submitForm();
		practiceFormPage.get.popup().should('contain.text', 'Thanks for submitting the form');
	});
});

removeLogs();