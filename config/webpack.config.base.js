const path = require("path")

module.exports = {
    entry: path.join(__dirname, "../src/index.ts"),
    devtool: "sourcemap",
    resolve: { extensions: [".ts", ".js"] },
    module: { rules: [{ test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ }, { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ }] }
}
