const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: "./src/ts/main.ts",
    about: "./src/ts/about-page.ts",
    navbar: "./src/ts/navbar.ts",
    navbarEffects: "./src/ts/navbar-effects.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/js"),
    publicPath: "/wp-content/themes/cleython/dist/js/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("tailwindcss"), require("autoprefixer")],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      jquery$: path.resolve(__dirname, "node_modules/jquery/dist/jquery.js"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
};
