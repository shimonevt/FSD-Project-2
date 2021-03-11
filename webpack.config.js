const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    context: path.resolve(__dirname, "source"),    
    resolve: {
        alias: {
          
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx']
        
      },
      devtool: 'source-map',
      entry: './index/index.ts',
      output: {
        filename: "index.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "./"
      },
    module: {
        rules: [
            {

            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new CheckerPlugin()
    ]
}
