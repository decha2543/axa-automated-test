export function verifyAfterLogin() {
	context('Verify After Login Steps', () => {
		it('Verify Welcome Message', () => {
			const welcomeMessageLocator = cy.xpath(`//span[@class='welcome message']`);

			welcomeMessageLocator.should('contain.text', 'Welcome Mr.John');
		});

		it('Verify Dashboard URL', () => {
			cy.url().should('include', '/dashboard');
			cy.url().should('not.include', '/login');
		});
	});
}