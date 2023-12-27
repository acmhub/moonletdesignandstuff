/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				mauve: "var(--mauve)",
				beige: "var(--beige)",
				green: "var(--green)",
				light: "var(--light)",
				dark: "var(--dark)",
			},
			fontFamily: {
				montserrat: "var(--font-montserrat)",
				lora: "var(--font-lora)",
				taviraj: "var(--font-taviraj)",
				signature: "var(--font-signature)",
			},
			maxWidth: {
				small: "38rem", // 608px
				normal: "38rem", // 708px
				regular: "53.25rem", // 852px
				big: "58.5rem", // 936px
			},
			screens: {
				xs: "455px",
			},
		},
	},
	plugins: [],
};
