module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "eslint:recommended",
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // préférer utiliser `plugin:vue/strongly-recommended` ou `plugin:vue/recommended` pour des règles stictes.
    "plugin:vue/recommended",
    "plugin:prettier/recommended"
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "prettier/prettier": ["warning", { semi: true }]
  }
}
