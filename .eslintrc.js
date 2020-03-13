module.exports = {
  extends: ["standard", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    "no-unused-vars": "error",
  },
};
