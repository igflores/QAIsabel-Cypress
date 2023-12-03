import { removeLogs } from '../../support/utils/RemoveLogs';
import { practiceForm } from '../../support/pages/DemoQA/practiceForm';

//* ----------------------- TEST SET -----------------------------------------------------------------------
describe('GX-34872 | ✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('Precondition: to use the Practice Form', () => {
		cy.visit(`${Cypress.env('baseUrlDemoQA')}/automation-practice-form`);
		cy.url().should('contain', 'practice-form');
	});

//* ----------------------- TEST CASES -----------------------------------------------------------------------
	it('GX-34871 | TC01: Validate that a popup displays all the valid data', () => {
		const formData = practiceForm.fillAndGetInputData();
		const check = [
			{ data: 'firstNameInput', value: formData.firstName },
			{ data: 'lastNameInput', value: formData.lastName },
			{ data: 'emailInput', value: formData.email },
			{ data: 'mobileInput', value: formData.mobile },
			{ data: 'currentAddressInput', value: formData.address },
		];
		check.forEach(({ data, value }) => {
			practiceForm.get[data]().should('have.value', value);
		});

		practiceForm.selectGender();
		practiceForm.get.gender().then(select => {
			expect(select.text()).to.contain(Cypress.env('genderSelected'));
		});

		practiceForm.SelectHobbies();
		practiceForm.get.hobbies().then(selectHobbie => {
			expect(selectHobbie.text()).to.contain(Cypress.env('hobbiesSelected'));
		});

		practiceForm.uploadPicture();
		practiceForm.get.pictureButton().should('contain.value', 'upexlogo.png');

		practiceForm
			.fillAndSelectSubject()
			.invoke('text')
			.then(subjectName => {
				cy.log(subjectName);
				practiceForm.get.subjectsContainer().should('contain.text', subjectName);
			});

		practiceForm.selectBirthDay();
		practiceForm.get.BirthdayInputCompleted().should('not.have.value', '');
		const dateOfBirthField = practiceForm.get.BirthdayInputCompleted();
		dateOfBirthField.invoke('val').then(dateOfBirth => {
			expect(dateOfBirth).to.match(/^(0[1-9]|[12]\d|3[01]) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (19\d\d|20\d\d|2100)$/);
		});

		practiceForm
			.selectState()
			.invoke('text')
			.then(state => {
				cy.log(state);
				practiceForm.get.state().should('be.visible');
			});

		practiceForm
			.selectCity()
			.invoke('text')
			.then(city => {
				cy.log(city);
				practiceForm.get.city().should('be.visible');
			});

		practiceForm.submitForm();
		practiceForm.get.popup().should('contain.text', 'Thanks for submitting the form');
	});
});

removeLogs();