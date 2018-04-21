module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
      "_": false
    },
    "rules": {
      // enable additional rules
      "indent": ["error", 2],
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "strict": ["error", "safe"],

      // override default options for rules from base configurations
      "comma-dangle": ["error", "never"],

      // disable rules from base configurations
      "no-console": ["off"]
    }
};
