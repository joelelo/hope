/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				vin1: '#2C3639',
				vin2: '#3F4E4F',
				vin3: '#A27B5C',
				vin4: '#DCD7C9',
				white: '#FFF',
				black: '#000203',
			},
			fontFamily: {
				cursive: ['Splash'],
			},
		},
	},
	plugins: [],
};
