module.exports = {
  plugins: ["es"],

  env: {
    browser: true,
    es2021: true
  },
  extends: "eslint:recommended",
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "2017",
    sourceType: "module"
  },
  rules: {
    "comma-dangle": "off", // Disable the trailing comma rule
    quotes: "off",
    "no-console": "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-useless-catch": "off",
    "es/no-async-functions": "off"
  }
};
