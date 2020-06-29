const path = require("path");
const merge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const base = require("./webpack.config.base.js");
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== "false";
const baseConfig = base();

if (process.env.NODE_ENV !== "production") {
  throw new Error("Production builds must have NODE_ENV=production.");
}

module.exports = merge(baseConfig, {
  mode: "production",
  bail: true,
  devtool: shouldUseSourceMap ? "source-map" : false,
  output: {
    devtoolModuleFilenameTemplate: (info) =>
      path
        .relative(path.resolve(__dirname, "../src"), info.absoluteResourcePath)
        .replace(/\\/g, "/"),
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true,
        sourceMap: shouldUseSourceMap,
      }),
    ],
  },
});
