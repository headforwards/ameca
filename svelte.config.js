import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

let adapter;
if (process.env.GITHUB_ACTIONS) {
    adapter = require('svelte-adapter-azure-swa').default;
} else {
    adapter = require('@sveltejs/adapter-auto').default;
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
