module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "module"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 2021, // Use the appropriate ECMAScript version
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "comma-dangle": ["error", "never"],
    "no-multiple-empty-lines": ["error", { max: 1 }], // Updated to allow only 1 blank line
    "space-before-function-paren": ["error", "always"], // Updated to "always"
    "no-extra-semi": "error"
  }
};
