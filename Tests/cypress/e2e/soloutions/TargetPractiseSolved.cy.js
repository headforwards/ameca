/// <reference types="cypress" />

describe("Target Practice Shoot em up 🎯", () => {
	beforeEach(() => {
		cy.visit(
			"https://workshop.headforwards.com/target_practise"
		).wait(1000);
	});

	/**
	 * @param {any} selector
	 */
	function shoot(selector) {
		cy.get(selector).then(($element) => {
			if ($element.length >= 0) {
				cy.log("TARGET ACQUIRED");
				cy.get(selector).click();

				shoot(selector);
			}
		});
	}

	it("Starts the game", () => {
		// Start the game
		cy.get('[data-testid="start-button"]').click();

		shoot('[data-testid^="target-"]');
	});
});
