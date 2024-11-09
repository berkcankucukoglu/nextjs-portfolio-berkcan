/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "16px",
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1024px",
		},
		fontFamily: {
			primary: "var(--font-roboto)"
		},
		extend: {
			colors: {
				primary: '#020617',
				secondary: '#27374D',
				accent: {
					DEFAULT: '#FFD369',
					hover: '#F4CE14',
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
