/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Paleta orgánica: Tierras, piedras, grises
				stone: {
					50: '#fafaf9',
					100: '#f5f5f4',
					200: '#e7e5e4',
					300: '#d6d3d1',
					400: '#a8a29e',
					500: '#78716c',
					600: '#57534e',
					700: '#44403c',
					800: '#292524',
					900: '#1c1917',
					950: '#0c0a09',
				},
				// Tierras / Arcilla
				clay: {
					light: '#D3C4B1',
					DEFAULT: '#A67C52',
					dark: '#7B5028',
				},
				// Musgo / Naturaleza antigua
				moss: {
					light: '#9EA88D',
					DEFAULT: '#6B7A54',
					dark: '#414D32',
				},
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
			},
		},
	},
	plugins: [],
};
