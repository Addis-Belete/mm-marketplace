module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'blue-black-1': '#00002C',
				"blue-black-2": "#150000",
				'white-1': "#948EA4",
				'button-1': "#D431BC",
				"active-1": "#139CA8",
			},

			textColor: ['visited', 'active']
		},
	},
	plugins: [],
}
