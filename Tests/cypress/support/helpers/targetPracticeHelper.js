/**
 * @param {any} selector
 */
export function shoot(selector) {
	cy.get(selector).then(($element) => {
		if ($element.length >= 0) {
			cy.log("TARGET ACQUIRED");
			cy.get(selector).click();

			shoot(selector);
		}
	});
}
