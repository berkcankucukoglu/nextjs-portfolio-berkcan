/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: '16px',
		},
		screens: {
			xs: '375px',
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1024px',
		},
		fontFamily: {
			primary: 'var(--font-roboto)',
		},
		extend: {
			colors: {
				primary: '#020617',
				secondary: '#27374D',
				accent: {
					DEFAULT: '#608BC1',
					hover: '#7AB2D3',
				},
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
