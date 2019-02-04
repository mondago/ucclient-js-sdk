const merge = require("webpack-merge")
const path = require("path")
const base = require("./webpack.config.base")

module.exports = merge(base, {
    output: { path: path.join(__dirname, "../../../TestHarnesses/ucsdkTest/lib"), filename: "index.js", library: "ucsdk", libraryTarget: "umd" }
})
