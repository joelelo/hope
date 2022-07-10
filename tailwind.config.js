/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			'center': true,
		},
		extend: {
			fontSize: {
				'tit': '10vh',
			},
			colors: {
				'vin1': '#2C3639',
				'vin2': '#3F4E4F',
				'vin3': '#A27B5C',
				'vin4': '#DCD7C9',
				'white': '#FFF',
				'black': '#000203',
			},
			fontFamily: {
				'cursive': ['Splash'],
			},
			spacing: {
				'1/5': '17.25%',
				'1/10': '10%',
				'2/5': '45%',
				'1/20': '5%',
				'3/5': '72%'
			},
			gridTemplateRows: {
				// Simple 8 row grid
				'8': 'repeat(8, minmax(0, 1fr))',
				'15': 'repeat(15, minmax(0, 1fr))',
			},
		},
	},
	plugins: [],
};
