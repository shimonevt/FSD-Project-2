const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CheckerPlugin } = require('awesome-typescript-loader');
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
module.exports = {
    context: path.resolve(__dirname, "source"),    
    resolve: {
        alias: {
          
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx']
        
      },
      devtool: 'source-map',
      entry: './index/index.js',
      output: {
        filename: "index.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "./"
      },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ["pug-loader"]
              },
              {
                test: /\.scss$/,
                use: [
                  {
                    loader: MiniCSSExtractPlugin.loader
                  },
                  {
                    loader: "css-loader"
                  },
                  {
                    loader: "resolve-url-loader"
                  },
                  {
                    loader: "sass-loader",
                    options: {
                      sourceMap: true
                    }
                  }
                ]
              },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new CheckerPlugin(),
        new HTMLWebpackPlugin({
            filename: "index.html",
            chunks: ["index"],
            template: "./index/index.pug"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new MiniCSSExtractPlugin({
            filename: "[name].css"
        }), 
    ]
}
