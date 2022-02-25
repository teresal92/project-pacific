const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
// entry point: go into above file and find index.js
const DIST_DIR = path.join(__dirname, '/client/dist/bundles');
// dump bundle.js here

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              ["@babel/plugin-transform-runtime",
                {
                  "regenerator": true
                }
              ],
            ]
          }
        }
      }
    ],
  }
};