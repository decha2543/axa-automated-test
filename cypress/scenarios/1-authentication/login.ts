import 'cypress-xpath';

export function login() {
	context('Login Steps', () => {
		it('Input Username', () => {
			const usernameLocator = cy.xpath(`//input[@name='username']`);

			usernameLocator.type("Username")
		});

		it('Input Password', () => {
			const passwordLocator = cy.xpath(`//input[@name='password' and @type='password']`);

			passwordLocator.type("Password")
		});

		it('Submit Login', () => {
			const loginButtonLocator = cy.xpath(`//input[@type='submit' and @value='Send Request']`)

			loginButtonLocator.click()
		});
	});
}