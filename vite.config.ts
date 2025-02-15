import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	optimizeDeps: {
		force: true
	},
	plugins: [sveltekit(), tailwindcss()],
	server: {
		watch: {
			ignored: ['**/node_modules/**', 'dist', 'build']
		}
	}
});
