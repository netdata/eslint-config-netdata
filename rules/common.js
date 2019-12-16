module.exports = {
  "import/prefer-default-export": 0,
  "max-len": ["error", { code: 100 }],
  "max-classes-per-file": [0],
  "import/no-extraneous-dependencies": [0],
  "import/extensions": [
    "error",
    "ignorePackages",
    {
      js: "never",
      jsx: "never",
      ts: "never",
      tsx: "never",
    },
  ],
  "prettier/prettier": "error",
  quotes: ["error", "double"],
  semi: ["error", "never"],
  eqeqeq: ["error", "always"],
  "no-underscore-dangle": ["error", { allow: ["__REDUX_DEVTOOLS_EXTENSION__"] }],
}
