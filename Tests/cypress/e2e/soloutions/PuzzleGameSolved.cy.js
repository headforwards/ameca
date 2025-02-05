/// <reference types="cypress" />

import {
	completeFirstPuzzle,
	completeSecondPuzzle,
	completeThirdPuzzle
} from "../../support/helpers/puzzleRoomHelpers";

describe("Puzzle solving spec", () => {
	// Before each test, visit the page.
	beforeEach(() => {
		cy.visit("/puzzle_room");
	});

	// First Puzzle solved.
	it("Completes the first pizzle!", () => {
		cy.get('[data-testid="puzzle-button-1"]')
			.wait(1000)
			.click()
			.wait(1000)
			.click()
			.wait(1000)
			.click();

		//Check that the button is disabled this happens when the puzzle is solved!
		cy.get('[data-testid="puzzle-button-1"]').should("be.disabled");
	});

	it("Completes the second puzzle", () => {
		completeFirstPuzzle();

		cy.get('[class^="flash svelte-"]')
			.should("be.visible")
			.then(() => {
				cy.get('[data-testid="puzzle-button-2"]').click();
			});

		cy.get('[data-testid="puzzle-button-2"]').wait(1000).should("be.disabled");
	});

	it("Completes the third puzzle", () => {
		completeFirstPuzzle();
		completeSecondPuzzle();

		//click 4 times on the plus ten button
		cy.get('[data-testid="frequency-plus-ten"]')
			.click()
			.click()
			.click()
			.click();

		//click 2 times on the plus one button
		cy.get('[data-testid="frequency-plus-one"]').click().click();

		cy.get('[data-testid="puzzle-button-3"]').click();
		cy.get('[data-testid="puzzle-button-3"]').wait(1000).should("be.disabled");
	});

	it.only("Finds the database ", () => {
		completeFirstPuzzle();
		completeSecondPuzzle();
		completeThirdPuzzle();

		cy.get('[data-testid="secret-link"]').click();
	});
});
