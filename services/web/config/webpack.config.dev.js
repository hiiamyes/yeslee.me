const path = require("path");
const merge = require("webpack-merge");
const base = require("./webpack.config.base.js");
const baseConfig = base({ publicPath: "/" });

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "cheap-module-source-map",
  output: {
    devtoolModuleFilenameTemplate: (info) =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, "/"),
    hotUpdateChunkFilename: "hot/hot-update.js",
    hotUpdateMainFilename: "hot/hot-update.json",
  },
  performance: {
    hints: false,
  },
  devServer: {
    contentBase: [
      path.resolve(__dirname, "../build"),
      path.resolve(__dirname, "../public"),
    ],
    compress: true,
    historyApiFallback: true,
    port: 3003,
  },
});
