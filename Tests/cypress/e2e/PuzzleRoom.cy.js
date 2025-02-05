/// <reference types="cypress" />

import {
	completeFirstPuzzle,
	completeSecondPuzzle,
	completeThirdPuzzle
} from "../support/helpers/puzzleRoomHelpers";

describe("template spec", () => {
	beforeEach(() => {
		cy.visit("/puzzle_room");
	});

	// Crack the first puzzle!
	it.only("Completes the first pizzle!", () => {
		const buttonID = "FIND_THE_BUTTON";

		cy.get(`[data-testid="${buttonID}"]`)
			//wait 10ms
			.wait(10)
			.click()
			//wait 100ms
			.wait(100)
			.click()
			//wait 1s
			.wait(1000)
			.click();

		//Check that the button is disabled this happens when the puzzle is solved!
		cy.get(`[data-testid="${buttonID}"]`).should("be.disabled");
	});

	// Good job cracking the first puzzle, now onto the second!
	// Tip: Un comment the helper method to get you started on your way to solving the second puzzle.
	// Tip: Remember to move the .only on the testcase above so it only runs this one!
	//
	it("Completes the second puzzle", () => {
		//completeFirstPuzzle();
		const buttonID = "FIND_THE_BUTTON";

		cy.get('[class^="flash svelte-"]')
			// what should we check for?
			.should("")
			.then(() => {
				// why's nothing happening?!?
				cy.get(`[data-testid="${buttonID}"]`);
			});

		cy.get(`[data-testid="${buttonID}"]`).should("be.disabled");
	});

	// Good job cracking the first & second puzzle your a real whizz!, now onto the third!
	// Tip: Un comment the helper method to get you started on your way to solving the puzzle.
	// Tip: Remember to move the .only on the testcase above so it only runs this one!
	//
	it("Completes the third puzzle", () => {
		// completeFirstPuzzle();
		// completeSecondPuzzle();

		const increaseBy1ButtonID = "FIND_THE_BUTTON";
		const increaseBy10ButtonID = "FIND_THE_BUTTON";
		const buttonID = "FIND_THE_BUTTON";

		// Get the increase by 10 button, how many times should we click it?
		cy.get(`[data-testid="${increaseBy10ButtonID}"]`);

		// Get the increase by 1 button, how many times should we click it?
		cy.get(`[data-testid="${increaseBy1ButtonID}"]`);

		cy.get(`[data-testid="${buttonID}"]`).click();
		cy.get(`[data-testid="${buttonID}"]`).should("be.disabled");
	});

	// Good job! On to the last piece of the puzzle.
	// use your skills from previous challenge to find the secret link to get you to the database!
	// Tip: Un comment the helper method to get you started on your way to solving the second puzzle.
	// Tip: Remember to move the .only on the testcase above so it only runs this one!
	//
	it("Finds the database ", () => {
		// completeFirstPuzzle();
		// completeSecondPuzzle();
		// completeThirdPuzzle();
	});

	// Once you've got to the data base remember to check the data, we need to know the code word for the disabled sector!
});
