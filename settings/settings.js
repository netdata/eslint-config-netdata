module.exports = {
  "import/resolver": {
    webpack: {
      config: "webpack.common.js",
    },
    node: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      paths: ["src", "lib"],
    },
  },
}
