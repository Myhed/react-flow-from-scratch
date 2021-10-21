const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, "css-loader" ]
      }
    ]
  },
  resolve: { 
    extensions: ["*", ".css", ".js", ".jsx"],
    alias: {
      Material: path.resolve(__dirname, 'node_modules/@mui/material/'),
      Containers: path.resolve(__dirname, 'src/containers/'),
      Components: path.resolve(__dirname, 'src/components/')
    }
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    open: true,
    static: {
        directory: path.join(__dirname, "public/")
    },
    port: 3000
  }
};