
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {jsx: true},
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "only-warn"],
  rules: {
    "no-tabs": ["error", {allowIndentationTabs: true}],
    "max-lines": ["error", 3000],
    semi: ["error", "always"],
    indent: ["error", 4, {SwitchCase: 1}],
    "react/jsx-indent": ["error", 4],
    "react/jsx-indent-props": ["error", 4],
    "@typescript-eslint/indent": ["error", 4],
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-shadow": ["error"],
    "comma-spacing": ["error", {"before": false, "after": true}],
    "semi-spacing": ["error", {"before": false, "after": true}],
    "no-multi-spaces": "error",
    "object-curly-spacing": ["error", "never"],
    "object-curly-newline": ["error", {"multiline": true}],
    "array-bracket-newline": ["error", {"multiline": true}],
    "@typescript-eslint/member-ordering": [
      "error",
      {
        "default": [
          "public-field",
          "protected-field",
          "private-field",
          "constructor",
          "public-method",
          "protected-method",
          "private-method"
        ]
      }
    ],
    "space-in-parens": ["error", "never"],
    "key-spacing": ["error", {"beforeColon": false}],
    "space-infix-ops": ["error", {"int32Hint": false}],
    "space-unary-ops": [
      1, {
        "words": true,
        "nonwords": false,
        "overrides": {"new": false},
      },
    ],
    "no-trailing-spaces": "error",
    "arrow-spacing": "error",
    quotes: ["error", "double"],

    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "explicit",
        "overrides": {
          "accessors": "explicit",
          "constructors": "no-public",
          "methods": "explicit",
          "properties": "explicit",
          "parameterProperties": "explicit",
        },
      },
    ],
    "lines-between-class-members": ["error", "always"],
    "padded-blocks": ["error", {classes: "always"}],
    "no-multiple-empty-lines": "error",
    "max-len": ["error", {code: 130}],
    "max-params": ["error", 7],
    curly: "error",
    "comma-dangle": ["error", "always-multiline"],
    "brace-style": "error",
    "no-console": "error",
    "no-mixed-operators": "error",
    eqeqeq: "error",
    "dot-notation": ["off"],
    "react/jsx-tag-spacing": [
      "error",
      {beforeClosing: "never", beforeSelfClosing: "always", afterOpening: "never", closingSlash: "never"},
    ],
    "react/jsx-curly-spacing": "error",
    "react/jsx-indent-props": "off",
    "react/jsx-indent": ["error", 4],
    "react/jsx-key": "error",
    "react/jsx-max-props-per-line": ["error", {"maximum": 1}],
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-filename-extension": ["warn", {extensions: [".tsx"]}],
    "react/jsx-closing-bracket-location": [1, "tag-aligned"],
    "react/no-unknown-property": "error",
    "react/self-closing-comp": "error",
    "react/wrap-multilines": "error",
    "react/jsx-one-expression-per-line": "error",
  },
  settings: {"import/resolver": {node: {extensions: [".js", ".jsx", ".ts", ".tsx"]}}},
};

