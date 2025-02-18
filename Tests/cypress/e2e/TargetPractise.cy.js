/// <reference types="cypress" />

import { shoot } from "../support/helpers/targetPracticeHelper";

describe("Target Practice Shoot em up 🎯", () => {
	beforeEach(() => {
		cy.visit(
			"https://workshop.headforwards.com/target_practise"
		).wait(1000);
	});

	it("Starts the game", () => {
		// find the button and Start the game
		cy.get('[data-testid=""]').click();

		// pass in your target to our helper method and shoot away!
		shoot('[data-testid=""]');
	});

	//#region Give it a try before looking at the hints
	// use prefix wild card symbol ^ this targets all elements with a data-testid starting with "a certain string"
	// ie: cy.get('[cy-test^="frogs-"]')
	// this would find elements with frog-1, frog-2, frog-3 etc
	// maybe this could be useful for shooting the targets?
	//#endregion
});
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣶⣾⣿⣿⣷⣶⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⣠⣶⣿⣿⠿⠛⠛⠉⠉⠛⠛⠿⣿⣿⣶⣄⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⢀⣴⣿⣿⠟⠁⠀⢀⣠⣤⣤⣄⣀⠀⠈⠻⣿⣿⣧⡀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⣾⣿⡟⠁⠀⣠⣾⣿⡿⠟⠻⢿⣿⣷⣄⠀⠈⢻⣿⣷⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⢸⣿⣿⠁⠀⢰⣿⡿⠋⢀⣤⣤⡀⠈⢿⣿⡆⠀⠀⣿⣿⡇⠀⠀⠀⠀
// ⠀⠀⠀⠀⢸⣿⣿⠀⠀⢸⣿⡇⠀⢺⣿⣿⡷⠀⢸⣿⡗⠀⠀⣿⣿⡇⠀⠀⠀⠀
// ⠀⠀⠀⠀⠸⣿⣿⡀⠀⠘⣿⣿⣄⠀⠉⠉⠀⣠⣾⣿⠇⠀⢀⣿⣿⡇⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⢻⣿⣷⡄⠀⠘⠿⣿⣿⣶⣶⣿⣿⠿⠃⠀⢠⣾⣿⡟⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠹⣿⣿⣦⣀⠀⠀⠉⠉⠉⠉⠀⠀⣀⣴⣿⣿⠟⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⢀⡈⠻⢿⣿⣷⣶⣤⣤⣤⣤⣶⣾⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⣾⣿⣦⠀⠉⠛⠻⠿⠿⠿⠿⠟⠛⠉⠠⣴⣿⡆⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⢸⣿⣿⠇⠀⠀⠀⠀⣶⣶⣶⡆⠀⠀⠀⠀⢻⣿⣿⡀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠉⠉⠉⠀⠀⠀⠀⠀⠉⠉⠉⠁⠀⠀⠀⠀⠈⠉⠉⠁⠀⠀⠀⠀
