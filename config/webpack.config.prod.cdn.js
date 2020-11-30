const path = require("path")
const { merge } = require("webpack-merge")
const base = require("./webpack.config.base")

module.exports = merge(base, {
    output: { path: path.join(__dirname, "../dist_cdn"), library: "ucsdk", libraryTarget: "var", filename: "ucsdk.js" },
})
