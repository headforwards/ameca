export function completeFirstPuzzle() {
	cy.get('[data-testid="puzzle-button-1"]')
		.wait(1000)
		.click()
		.wait(1000)
		.click()
		.wait(1000)
		.click();

	//Check that the button is disabled this happens when the puzzle is solved!
	cy.get('[data-testid="puzzle-button-1"]').should("be.disabled");
}
export function completeSecondPuzzle() {
	cy.get('[class^="flash svelte-"]')
		.should("be.visible")
		.then(() => {
			cy.get('[data-testid="puzzle-button-2"]').click();
		});

	cy.get('[data-testid="puzzle-button-2"]').should("be.disabled");
}

export function completeThirdPuzzle() {
	//click 4 times on the plus ten button
	cy.get('[data-testid="frequency-plus-ten"]').click().click().click().click();

	//click 2 times on the plus one button
	cy.get('[data-testid="frequency-plus-one"]').click().click();

	cy.get('[data-testid="puzzle-button-3"]').click();
	cy.get('[data-testid="puzzle-button-3"]').should("be.disabled");
}
