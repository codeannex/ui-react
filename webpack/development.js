const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./app.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/"),
    publicPath: "",
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
  devtool: "inline-source-map",
  resolve: {
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
    extensions: [".js", ".json", ".ts", ".tsx", "scss"],
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
            },
          },
          {
            loader: "ts-loader",
            options: {
              configFile: require.resolve("./config.json"),
              context: __dirname,
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name]-styles.[contenthash].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      template: "./app.html",
      filename: "./index.html",
    }),
  ],
};
