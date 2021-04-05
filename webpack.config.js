const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CheckerPlugin } = require('awesome-typescript-loader');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
module.exports = {
    context: path.resolve(__dirname, "source"),    
    resolve: {
        alias: {
           source : path.resolve(__dirname,"source"),
           slider: path.resolve(__dirname,"source/slider")
        },    
        extensions: ['.ts', '.js', '.json']  
      },
      entry: './index/index.ts',
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
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
              {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-typescript'
                      ]
                  }
                } 
              },{
                test: /\test.js$/,
                use: 'mocha-loader',
                exclude: /node_modules/
              }
        ]
    },
    devServer: {
      contentBase: path.join(__dirname, "build"),
      compress: true,
      open: true,
      port: 9000
    },
    plugins: [
        new CheckerPlugin(),
        new HTMLWebpackPlugin({
            filename: "index.html",
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
        new CleanWebpackPlugin()
    ]
}
