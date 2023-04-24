const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      ["@components"]: path.resolve("./src/components"),
      ["@constants"]: path.resolve("./src/constants"),
      ["@contexts"]: path.resolve("./src/contexts"),
      ["@core"]: path.resolve("./src/core"),
      ["@hooks"]: path.resolve("./src/hooks"),
      ["@interfaces"]: path.resolve("./src/interfaces"),
      ["@models"]: path.resolve("./src/models"),
      ["@utils"]: path.resolve("./src/utils"),
      ["@styles"]: path.resolve("./src/styles"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: path.join(__dirname, "./src"),
    historyApiFallback: true,
    port: 3001,
    hot: "only",
    compress: true,
    open: true,
  },
};
