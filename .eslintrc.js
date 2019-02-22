const path = require('path')

module.exports = {
  "globals": {
    "fetch": true,
    "sessionStorage": true,
    "localStorage": true,
    "Promise": true,
    "document": true,
    "require": true,
    "Intl": true,
    "Map": true,
    "module": true,
    "process": true,
    "console": true,
    "window": true,
    "FormData": true
  },
  "extends": [
    "plugin:import/errors", // See https://github.com/benmosher/eslint-plugin-import
    "plugin:import/warnings",
    "plugin:react/recommended", // See https://github.com/yannickcr/eslint-plugin-react
    "prettier", // See https://github.com/prettier/eslint-plugin-prettier
    "prettier/react"
  ],
  "plugins": [
    "react",
    "prettier",
    "import"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  settings: {
    "react": {
      "version": "detect"
    },
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, '.')],
      },
    },
  },
  "rules": {
    // general
    "no-console": "warn",
    "no-dupe-keys": "warn",
    "object-shorthand": "warn",
    "no-undef": "warn",
    "no-unused-vars": "warn",
    "no-use-before-define": "warn",

    // import
    "import/order": [
      "error",
      {
        "newlines-between": "always"
      }
    ],
    "import/newline-after-import": "warn",
    "import/no-named-as-default": "off",

    // react
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "react/boolean-prop-naming": "warn",
    "react/default-props-match-prop-types": "warn",
    "react/no-unused-prop-types": "warn",
    "react/react-in-jsx-scope": "warn",
    "react/require-default-props": "off",
    "react/self-closing-comp": "warn",
    "react/sort-comp": "warn",
    "react/display-name": "off",

    // prettier
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "none",
        "singleQuote": true,
        "semi": false,
        "arrowParens": "always"
      }
    ]
  }
}
