const path = require("path");
const webpack = require("webpack");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const env = process.env.NODE_ENV || "none";

module.exports = {
    entry: path.resolve("./src/index.ts"),
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.ts?$/,
            loaders: ["babel-loader", "ts-loader"]
        }]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [new webpack.DefinePlugin({
        "process.env": {
            "NODE_ENV": JSON.stringify(env),
        }
    })],
    mode:"production",
    output: {
        path: path.resolve("./dist"),
        filename:  "index.prd.js",
        libraryTarget: "umd",
        sourceMapFilename:  "index.prd.js.map",
        library: "JSFCORE",
    }
};