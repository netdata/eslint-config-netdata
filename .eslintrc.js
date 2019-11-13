const commonRules = require("./rules/common")
const typescriptRules = require("./rules/typescript")
const reactRules = require("./rules/react")
const settings = require("./settings/settings")
const plugins = require("./settings/plugins")
const overrides = require("./settings/overrides")

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins,
  env: {
    browser: true,
    jest: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  rules: {
    ...commonRules,
    ...typescriptRules,
    ...reactRules,
  },
  settings,
  overrides: [overrides],
  globals: {
    DEVELOPMENT: "readonly",
  },
}
