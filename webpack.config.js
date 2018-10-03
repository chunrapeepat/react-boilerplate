var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
var path = require("path");

const client = {
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/js/main.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"]
        }
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins: debug
    ? [
        new webpack.DefinePlugin({
          "process.env": { NODE_ENV: JSON.stringify("production") }
        })
      ]
    : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
      ],
  devServer: {
    historyApiFallback: true
  }
};

const server = {
  entry: "./main.js",
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"]
        }
      }
    ]
  },
  output: {
    path: __dirname,
    filename: "server.js"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: JSON.stringify("production") }
    })
  ],
  target: "node"
};

module.exports = [client, server];
