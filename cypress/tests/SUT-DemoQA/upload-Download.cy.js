import { removeLogs } from '../../support/utils/RemoveLogs';
import { uploadDownloadPage } from '../../support/pages/DemoQA/upload-Download';

describe('ToolsQA | Elements | Upload and Download', () => {
	beforeEach('Preconditions', () => {
		cy.intercept({ resourceType: /^(xhr|fetch)$/ }, { statusCode: 200, body: { data: 'fake data' } });
		cy.visit(`${Cypress.env('baseUrlDemoQA')}/upload-download`);
		cy.url().should('contain', 'upload-download');
	});

	it('TC01: Validate the download of an image into the "download" PC folder', () => {
		uploadDownloadPage.downloadFile();
		expect(uploadDownloadPage.isdownloadButtonClicked()).to.be.true;
	});

	it('TC2: Validate the upload of an image from a local file', () => {
		uploadDownloadPage.selectUploadFile();
		uploadDownloadPage.get.uploadedFilePath().contains('upexgalaxy.gif');
	});
});

removeLogs();
