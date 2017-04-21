webpack = require('webpack');
path = require('path');
var fs = require('fs');
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

webpackConfig = {
		context: __dirname,
		entry: {
				bundle: './app/app.js',
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
								test: /\.js?$/,
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
						},
            {
              test: /\.(jpe?g|png|gif|svg)$/i,
              loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
              ]
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

console.log("Compile Posts")
let posts =  JSON.stringify( fs.readdirSync("./posts"));
fs.writeFile("./posts.json", posts, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
