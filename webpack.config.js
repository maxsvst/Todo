const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

const config = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        alias: {
            '@storybook': path.resolve(__dirname, 'src/storybook'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@ui': path.resolve(__dirname, 'src/ui'),
            '@const': path.resolve(__dirname, 'src/const'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@assets': path.resolve(__dirname, 'src/assets'),
        },
        extensions: [".tsx", ".ts", ".jsx", ".js", ".scss", ".eot"],
    },
    module: {
      rules: [
          {
              test: /\.(ts|tsx)$/i,
              loader: "ts-loader",
              exclude: ["/node_modules/"],
          },
          {
              test: /\.module\.(s[ac]ss)$/i,
              use: [
                  "style-loader",
                  {
                      loader: "css-loader",
                      options: {
                          modules: {
                              exportLocalsConvention: "camelCaseOnly",
                          }
                      },
                  },
                  "postcss-loader",
                  "sass-loader"
              ],
              include: /\.module\.(s[ac]ss)$/i
          },
          {
              test: /\.(s[ac]ss|css)$/i,
              use: [
                  "style-loader",
                  "css-loader",
                  "postcss-loader",
                  "sass-loader"
              ],
              exclude: /\.module\.(s[ac]ss)$/i
          },
          {
              test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
              type: "asset",
          },
      ]
    },
    devServer: {
        open: true,
        host: "localhost",
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
    ],
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
    } else {
        config.mode = "development";
    }
    return config;
};