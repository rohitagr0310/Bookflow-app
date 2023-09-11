module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["standard", "plugin:react/recommended"],
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
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    // Enforce consistent indentation (use tabs or spaces)
    indent: ["error", 2],

    // Enforce single quotes for string literals
    quotes: ["error", "double"],

    // Require semicolons at the end of statements
    semi: ["error", "always"],

    // Enforce consistent spacing inside curly braces
    "object-curly-spacing": ["error", "always"],

    // Enforce consistent spacing before and after arrow functions
    "arrow-spacing": ["error", { before: true, after: true }],

    // Require variable declarations to be at the top of their scope
    "vars-on-top": "error",

    // Require the use of triple equals (===) and not double equals (==)
    eqeqeq: "error",

    // Enforce a maximum line length to improve readability
    "max-len": ["error", { code: 250 }],

    // Require consistent return values in array methods like map and forEach
    "array-callback-return": "error"
  }
};
