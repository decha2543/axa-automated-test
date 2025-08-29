import { login } from '@/scenarios/1-authentication/login.ts';
import { verifyAfterLogin } from '@/scenarios/1-authentication/verify.ts';

describe('Login To Axa Dashboard', () => {
	before(() => {
		cy.visit('https://www.axa.co.th/login');
	});

	login();
	verifyAfterLogin();
});
