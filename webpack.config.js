const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const webpack = require("webpack");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  // output: {
  //   filename: "main.js",
  //   path: path.resolve(__dirname, "dist"),
  //   clean: true,
  //   publicPath: "/",
  // },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        // Conditions:
        test: /\.(js|ts|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        // Actions:
        loader: "babel-loader",
        // the loader which should be applied, it'll be resolved relative to the context
        options: {
          presets: ["@babel/env"],
          // plugins: [
          //   // ... other plugins
          //   isDevelopment && require.resolve("react-refresh/babel"),
          // ].filter(Boolean),
        },
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".ts"] },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "App",
    }),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    new VanillaExtractPlugin({
      allowRuntime: true,
    }),
    new MiniCssExtractPlugin(),
    // isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    // compress: true,
    port: 9000,
    publicPath: "http://localhost:9000/dist/",
    hot: true,
  },
  stats: "minimal",
};
