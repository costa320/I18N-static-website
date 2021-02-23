require("dotenv").config;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

/* FOR EXPOSE LIBRARY IN DEV MODE */

module.exports = (env) => {
  const { devServer = false } = env;
  return {
    mode: "development",
    entry: devServer
      ? ["webpack-dev-server/client", "./src/index.js"]
      : "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "js/I18N.bundle.js",
      /* EXPOSE BUNDLE TO OUTSIDE CODE */
      library: "I18N",
      libraryTarget: "var",
    },
    devtool: "source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      open: {
        app: ["chrome", "--incognito", "--other-flag"],
      },
      watchOptions: {
        poll: true,
      },
      watchContentBase: true,
      port: "3008",
      injectClient: false,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
  };
};
