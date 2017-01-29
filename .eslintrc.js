module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react"
  ],
  "rules": {

    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",

    // See details of each rules at http://eslint.org/docs/rules/name-of-rule

    // Possible Errors
    "comma-dangle": ["error", "never"],
    "no-cond-assign": ["error", "always"],
    "no-console": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-parens": "error",
    "no-extra-semi": "error",
    "no-func-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-negated-in-lhs": "error",
    "no-obj-calls": "error",
    "no-regex-spaces": "error",
    "no-sparse-arrays": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "use-isnan": "error",
    "valid-typeof": "error",

    // Best Practices
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "complexity": ["error", 10],
    "consistent-return": "error", // TODO: turn on this rules
    "curly": "error",
    "default-case": "error", // TODO: turn on this rules
    "dot-location": ["error", "property"],
    "dot-notation": "error", // TODO: turn on this rules
    "eqeqeq": "error", // TODO: turn on this rules
    "guard-for-in": "error",
    "no-alert": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-div-regex": "error",
    "no-else-return": "error", // TODO: turn on this rules
    "no-empty-function": ["error"],
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error", // TODO: see if it can be turn on
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-multi-str": "error",
    "no-native-reassign": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape" : "error",
    "no-param-reassign" : "error", //disallow reassigning function parameters, TODO: turn on this rules
    "no-proto" : "error",
    "no-redeclare" : "error",
    "no-return-assign" : "error", //disallow assignment operators in return statements

    "no-script-url" : "error", // disallow javascript: urls
    "no-self-assign"  : "error", // disallow assignments where both sides are exactly the same
    "no-self-compare"  : "error", // disallow comparisons where both sides are exactly the same
    "no-sequences"  : "error", // disallow comma operators
    "no-unmodified-loop-condition"  : "error", // disallow unmodified loop conditions
    "no-unused-expressions"  : "error", // disallow unused expressions
    "no-unused-labels"  : "error", // disallow unused labels
    "no-useless-call"  : "error", // disallow unnecessary calls to .call() and .apply()
    "no-useless-concat"  : "error", // disallow unnecessary concatenation of literals or template literals
    "no-useless-escape"  : "error", // disallow unnecessary escape characters
    "no-void"  : "error", // disallow void operators
    "no-with"  : "error", // disallow with statements
    "radix"  : "error", // enforce the consistent use of the radix argument when using parseInt()
    "wrap-iife"  : "error", // require parentheses around immediate function invocations
    "yoda"  : ["error", "always", { "exceptRange": true }], // require or disallow “Yoda” conditions

    // Variables
    "no-catch-shadow": "error", // disallow catch clause parameters from shadowing variables in the outer scope
    "no-delete-var": "error", // disallow deleting variables
    "no-label-var": "error", // disallow labels that share a name with a variable
    "no-restricted-globals": "error", // disallow specified global variables
    "no-shadow": "error", // disallow var declarations from shadowing variables in the outer scope
    "no-shadow-restricted-names": "error", // disallow identifiers from shadowing restricted names
    "no-undef": "error", // disallow the use of undeclared variables unless mentioned in /*global */ comments
    "no-undef-init": "error", // disallow initializing variables to undefined
    "no-unused-vars": "error", // disallow unused variables

    // Stylistic Issues
    "array-bracket-spacing" : ["error", "never"], //enforce consistent spacing inside array brackets
    "block-spacing" : "error", //enforce consistent spacing inside single-line blocks
    "camelcase" : "error", //enforce camelcase naming convention
    "comma-spacing" : ["error", { "before": false, "after": true }], //enforce consistent spacing before and after commas
    "comma-style" : ["error", "last"], //enforce consistent comma style
    "computed-property-spacing" : ["error", "never"], //enforce consistent spacing inside computed property brackets
    "consistent-this" : ["error", "self"], //enforce consistent naming when capturing the current execution context
    "eol-last" : "error", //enforce at least one newline at the end of files
    "func-style" : ["error", "declaration", { "allowArrowFunctions": true }], //enforce the consistent use of either function declarations or expressions
    "id-blacklist" : ["error", "data", "callback", "with"], //disallow specified identifiers
    // "id-length" : //enforce minimum and maximum identifier lengths
    // "id-match" : //require identifiers to match a specified regular expression

    // Temporarily disabled due to multi-line expression issue : https://github.com/eslint/eslint/issues/1801
    "indent" : ["error", 2, {
      "SwitchCase": 0,
      "VariableDeclarator": { "var": 2, "let": 2, "const": 3 }
    }], //enforce consistent indentation

    "key-spacing" : ["error", {
        "singleLine": {
            "beforeColon": true,
            "afterColon": true,
            "mode": "minimum"
        },
        "multiLine": {
            "beforeColon": true,
            "afterColon": true,
            "align": "colon",
            "mode": "minimum"
        }
    }],

    "keyword-spacing" : ["error", { "before": true, "after" : true }], //enforce consistent spacing before and after keywords
    "linebreak-style" : ["error", "unix"], //enforce consistent linebreak style
    "lines-around-comment" : ["error", {
      "beforeLineComment": true,
      "beforeBlockComment": true,
      "allowBlockStart": true,
      "allowBlockEnd": false,
      "allowObjectStart": true,
      "allowObjectEnd": false,
      "allowArrayStart": true,
      "allowArrayEnd": false
    }],//require empty lines around comments
    "max-depth" : ["error", 2], //enforce a maximum depth that blocks can be nested
    "max-len" : ["error", {
      "code" : 90,
      "ignoreComments": true,
      "ignoreUrls": true
    }],//enforce a maximum line length
    "max-nested-callbacks" : ["error", 5], //enforce a maximum depth that callbacks can be nested

    "max-params" : ["error", 5], //TODO: when AMD is gone, see to set this control, enforce a maximum number of parameters in function definitions
    "max-statements" : ["error", 50], //enforce a maximum number of statements allowed in function blocks

    // TODO: uncomment max-statements-per-line when https://github.com/eslint/eslint/issues/6264 is fixed
    "max-statements-per-line" : ["error", { "max": 1 }], //enforce a maximum number of statements allowed per line
    // "new-cap" : ["error", {
    //   "newIsCap": true,
    //   "capIsNew": true
    // }], // TODO: add this rules //require constructor function names to begin with a capital letter
    "new-parens" : "error", //require parentheses when invoking a constructor with no arguments
    "newline-per-chained-call" : ["error", { "ignoreChainWithDepth": 4 }], //require a newline after each call in a method chain
    "no-array-constructor" : "error", //disallow Array constructors
    "no-bitwise" : "error", //disallow bitwise operators
    "no-continue" : "error", //disallow continue statements
    "no-lonely-if" : "error", //disallow if statements as the only statement in else blocks
    "no-mixed-spaces-and-tabs" : "error", //disallow mixed spaces and tabs for indentation
    "no-multiple-empty-lines" : ["error", { "max": 2, "maxEOF": 1, "maxBOF": 1 }],//disallow multiple empty lines
    "no-negated-condition": "error", //disallow negated conditions
    "no-nested-ternary": "error", //disallow nested ternary expressions
    "no-unneeded-ternary": ["error", { "defaultAssignment": false }],
    "no-new-object" : "error",//disallow Object constructors
    "no-restricted-syntax" :  ["error", "WithStatement"], //disallow specified syntax
    "no-spaced-func" : "error", //disallow spacing between function identifiers and their applications
    "no-trailing-spaces" : "error", //disallow trailing whitespace at the end of lines
    "no-whitespace-before-property" : "error",//disallow whitespace before properties
    "object-curly-spacing" : ["error", "always"], //enforce consistent spacing inside braces
    "one-var" : "error", //enforce variables to be declared either together or separately in functions
    "one-var-declaration-per-line" : "error", //require or disallow newlines around var declarations
    "operator-assignment" : ["error", "always"], //require or disallow assignment operator shorthand where possible
    "operator-linebreak" : ["error", "after"], //enforce consistent linebreak style for operators
    "quote-props" : ["error", "as-needed"], //require quotes around object literal property names
    "quotes" : ["error", "single", { "allowTemplateLiterals": true }], //enforce the consistent use of either backticks, double, or single quotes
    "semi" : "error", //require or disallow semicolons instead of ASI
    "semi-spacing" : ["error", { "before": false, "after": true }], //enforce consistent spacing before and after semicolons
    "sort-vars" : "error", // TODO: see to integrate this rule //require variables within the same declaration block to be sorted
    "space-before-blocks" : "error", //enforce consistent spacing before blocks
    "space-before-function-paren" : ["error", "never"], //enforce consistent spacing before function definition opening parenthesis
    "space-in-parens" : ["error", "never"], //enforce consistent spacing inside parentheses
    "space-infix-ops" : "error", //require spacing around operators
    "spaced-comment" : ["error", "always", { "markers": ["*"], "exceptions": ["*"] }], //enforce consistent spacing after the // or /* in a comment
    "unicode-bom": ["error", "never"],

    // ES6 specific
    "arrow-body-style" : ["error", "as-needed"], //require braces around arrow function bodies
    "arrow-parens" : ["error", "as-needed"], //require parentheses around arrow function arguments
    "arrow-spacing" : ["error", { "before": true, "after": true }], //enforce consistent spacing before and after the arrow in arrow functions
    "no-class-assign" : "error", //disallow reassigning class members
    "no-confusing-arrow" : ["error", { "allowParens" : true}], //disallow arrow functions where they could be confused with comparisons
    "no-const-assign" : "error", //disallow reassigning const variables
    "no-dupe-class-members" : "error", //disallow duplicate class members
    "no-duplicate-imports" : "error", //disallow duplicate module imports
    "no-new-symbol" : "error", //disallow new operators with the Symbol object
    "no-this-before-super" : "error", //disallow this/super before calling super() in constructors
    "no-useless-computed-key" : "error", //disallow unnecessary computed property keys in object literals
    "no-useless-constructor" : "error", //disallow unnecessary constructors
    "no-useless-rename": "error",
    "template-curly-spacing" : ["error", "never"], //require or disallow spacing around embedded expressions of template strings

    // TODO: add this rules after consensus and full es6 integration
    "prefer-const" : "error", //require const declarations for variables that are never reassigned after declared
    "prefer-template" : "error", //require template literals instead of string concatenation
    "prefer-spread" : "error", //require spread operators instead of .apply()
    "prefer-rest-params" : "error", //require rest parameters instead of arguments
    // "prefer-reflect" : "error", //require Reflect methods where applicable
    "prefer-arrow-callback" : "error", //require arrow functions as callbacks
    // "object-shorthand" : ["error", "always"], //require or disallow method and property shorthand syntax for object literals
    "no-var" : "error", //require let or const instead of var
  }
};
