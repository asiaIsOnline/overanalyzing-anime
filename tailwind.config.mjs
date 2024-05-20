const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
			  '.bg-overlay': {
				'background': 'linear-gradient(var(--overlay-angle, 180deg), var(--overlay-colors)), var(--overlay-image)',
				'background-position': 'center',
				'background-size': 'cover',
			  },
			});
		  }),
	],
}
