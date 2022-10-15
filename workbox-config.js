module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,css,jpg,png,1,gif,js,json,txt}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};