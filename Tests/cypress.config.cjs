const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		baseUrl: "https://white-mud-007637c03.4.azurestaticapps.net"
	}
});
