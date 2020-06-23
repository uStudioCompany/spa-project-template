module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
	[
	  '@babel/plugin-transform-runtime',
	  {
		regenerator: true,
	  },
	],
	['inline-react-svg', { ignorePattern: /^((?![.]inline[.]svg).)*$/ }],
  ],
  env: {
    production: {
      presets: ['@babel/preset-env'],
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
		'@babel/plugin-proposal-nullish-coalescing-operator'
	  ]
	}
  }
};
