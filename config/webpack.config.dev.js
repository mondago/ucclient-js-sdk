const { merge } = require("webpack-merge")
const path = require("path")
const base = require("./webpack.config.base")

module.exports = merge(base, {
    output: { path: path.join(__dirname, "../dist"), filename: "index.js", library: "ucclient-sdk", libraryTarget: "umd" },
})
