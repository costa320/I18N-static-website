const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "library.bundle.js",
    /* EXPOSE BUNDLE TO OUTSIDE CODE */
    library: "LIBRARY",
    libraryTarget: "umd",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
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
  },
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
