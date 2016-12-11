webpack = require('webpack');
path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


webpackConfig = {
		context: __dirname,
		entry: {
				bundle: './app/app.jsx',
				styles: './style/main.sass'
		},
		output: {
				filename: '[name].js',
				path: './build',
				publicPath: "/build/",
				library: '[name]'
		},
		resolve: {
				extensions: ['', '.js', '.jsx']
		},
		devtool: '#cheap-module-source-map',
		module: {
				loaders: [
						{
								test: /\.jsx?$/,
								exclude: [/node_modules/],
								loader: "babel-loader",
								query: {
										presets: ['es2015', 'react', 'stage-0', 'stage-1']
								}
						},
						{
								test: /\.sass$/,
								loader: ExtractTextPlugin.extract('css-loader?sourceMap!autoprefixer-loader?{browsers:["last 2 version"]}!sass-loader?indentedSyntax&sourceMap&sourceMapContents')
						},
						{
								test: /\.css$/,
								loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
						},
						{
								test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
								loader: 'file-loader'
						}
				]
		},
		plugins: [
				new ExtractTextPlugin('styles.css', {
						allChunks: true
				})
		]
};
module.exports = webpackConfig;
