const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HTMLWebpackMultiBuildPlugin = require("html-webpack-multi-build-plugin");

require("dotenv").config();

const template =
  process.env.LEGACY === "true"
    ? require.resolve("html-webpack-multi-build-plugin/template.ejs")
    : require.resolve("html-webpack-plugin/default_index.ejs");

module.exports = function (env) {
  return {
    mode: "production",
    entry: {
      main: "./src/app.tsx",
    },
    output: {
      path: path.join(__dirname, "public"),
      publicPath: "/",
      filename:
        process.env.LEGACY === "true"
          ? "[name].legacy.bundle.js"
          : "[name].modern.bundle.js",
      chunkFilename:
        process.env.LEGACY === "true"
          ? "[name].legacy.bundle.js"
          : "[name].modern.bundle.js",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json", ".png", ".jpg"],
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 3030,
      hot: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: "ts-loader",
              options: {
                compilerOptions: {
                  target: process.env.LEGACY === "true" ? "ES5" : "ES2015",
                },
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(jpeg|png|jpg|gif)$/,
          loader: "file-loader",
        },
        {
          test: /\.(md)$/,
          loader: "raw-loader",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/index.html",
        publicPath: "/",
      }),
      new HTMLWebpackMultiBuildPlugin()
    ],
  };
};
