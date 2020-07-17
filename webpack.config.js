const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production", 
  entry: {
    main: "./src/app.tsx",
  },
  output: {
    path: path.join(__dirname, "public"),
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".png"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3030,
    hot: true,
    historyApiFallback:true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpeg|png|jpg|gif)$/,
        loader: "url-loader"
      },
      {
        test: /\.(md)$/,
        loader: "raw-loader"
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      publicPath: "/",
    }),
  ],
};
