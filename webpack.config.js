// WEBPACK FILE
/* 
this is the initial file that Webpack parses through to make a dependency graph of all the file assets to be bundled
together including your entire frontend React code, imported node modules, imported CSS, image files, etc.
*/

const path = require('path');

module.exports = {
	mode: process.env.NODE_ENV,
	entry: './client/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/build/',
	},
	devServer: {
		hot: true,
		port: 8080,
    static: {
      directory: path.join(__dirname, '/'),
      publicPath: '/',
    },
		proxy: {
			'/api/**': {
        target: 'http://localhost:3000/'
		  },
	  }
  },

	module: {
    rules: [{
      test: /\.jsx?/,
      exclude: /node_modules/, // /(node_modules|bower_components)/
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
    },
    {
        test: /\.s[ac]ss$/i, //this chains the outpout of sass-loader to css-loader. css loader then
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ],
      }]
  }
};