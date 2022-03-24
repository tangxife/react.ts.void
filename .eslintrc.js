module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: ["error", "double"],
    semi: "off",
    "no-unused-vars": "off",
    "no-console": "warn",
    "no-empty": "warn",
    "linebreak-style": ["error", "unix"],
    // "@typescript-eslint/explicit-function-return-type": "warn"
    "@typescript-eslint/no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false }]
  }
}
