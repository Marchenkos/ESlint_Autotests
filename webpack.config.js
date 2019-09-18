const path = require("path");

module.exports = {
    entry: {
        app: ["./src/classes", "./src/functions_array", "./src/functional_programming"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        publicPath: "/dist",
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: "/node_modules/",
            use: ["babel-loader", "eslint-loader"],
        }],
    },
};
