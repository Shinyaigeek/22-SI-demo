const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/app.tsx",
  },
  output: {
    path: path.join(__dirname, "public"),
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
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
      // {
      //   test: /\.(jpeg|png|jpg|gif)$/,
      //   loader: "file-loader"
      // }
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
