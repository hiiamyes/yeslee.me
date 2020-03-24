const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const eslintFormatter = require("react-dev-utils/eslintFormatter");
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
const paths = require("./paths");
const jsRule = require("./rules/js-rule.js");
const cssRule = require("./rules/css-rule.js");

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== "false";
const NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV) {
  throw new Error(
    "The NODE_ENV environment variable is required but was not specified.",
  );
}

module.exports = ({ publicPath }) => {
  return {
    entry: {
      app: path.resolve(__dirname, "../src/index.js"),
    },
    output: {
      publicPath,
      path: path.resolve(__dirname, "../build"),
      filename: "[name].bundle.[hash].js",
    },
    resolve: {
      modules: ["node_modules", paths.appNodeModules],
      extensions: [".js", ".json"],
      plugins: [new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson])],
      alias: {
        src: path.resolve(__dirname, "../src/"),
      },
    },
    module: {
      strictExportPresence: true,
      rules: [
        // {
        //   test: /\.(js|jsx|mjs)$/,
        //   enforce: "pre",
        //   use: [
        //     {
        //       options: {
        //         formatter: eslintFormatter,
        //         eslintPath: require.resolve("eslint"),
        //         failOnWarning: process.env.NODE_ENV === "production",
        //         failOnError: false,
        //       },
        //       loader: require.resolve("eslint-loader"),
        //     },
        //   ],
        //   include: paths.appSrc,
        // },
        {
          oneOf: [
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve("url-loader"),
              options: {
                limit: 10000,
                name: "static/media/[name].[hash:8].[ext]",
              },
            },
            jsRule({ paths }),
            cssRule({ shouldUseSourceMap }),
            // "file" loader makes sure those assets get served by WebpackDevServer.
            // When you `import` an asset, you get its (virtual) filename.
            // In production, they would get copied to the `build` folder.
            // This loader doesn't use a "test" so it will catch all modules
            // that fall through the other loaders.
            {
              loader: require.resolve("file-loader"),
              // Exclude `js` files to keep "css" loader working as it injects
              // its runtime that would otherwise be processed through "file" loader.
              // Also exclude `html` and `json` extensions so they get processed
              // by webpacks internal loaders.
              exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
              options: {
                name: "static/media/[name].[hash:8].[ext]",
              },
            },
            // ** STOP ** Are you adding a new loader?
            // Make sure to add the new loader(s) before the "file" loader.
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "..", "src", "index.html"),
      }),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
          },
        },
      },
      runtimeChunk: "single",
    },
  };
};
