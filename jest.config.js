module.exports = {
  testEnvironment: "node",
  coveragePathIgnorePatterns: ["/node_modules/"],
  modulePathIgnorePatterns: ["npm-cache", ".yarn-cache", ".cache"],
  testMatch: ["**/__test__/*.(js|jsx|ts|tsx)"],
}
