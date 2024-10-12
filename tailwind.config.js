/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
	theme: {
		colors: {
			text: '#110a29',
			background: '#e4def7',
			primary: '#4a2db4',
			secondary: '#d5ccf0',
			accent: '#694BD2',
			darkMode: {
				text: '#e4def7',
				background: '#110a29',
				primary: '#4528A4',
				secondary: '#1b1146',
				accent: '#694BD2',
			},
		},
	},
	plugins: [],
};
