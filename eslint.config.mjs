// @ts-check

/** @type{import("./playground/.nuxt/eslint.config.d.mjs").withNuxt} */
import withNuxt from "./playground/.nuxt/eslint.config.mjs"

/** @type {import("eslint").Linter.RulesRecord} */
const commonRules = {
  "@stylistic/quotes": [
    "error",
    "double",
  ],
  "@stylistic/semi": [
    "error",
    "never",
  ],
  "@stylistic/comma-dangle": [
    "error",
    "always-multiline",
  ],
  "@stylistic/object-curly-spacing": ["error", "always"],
  "@stylistic/block-spacing": ["error", "always"],
  "space-before-function-paren": [
    "error",
    "never",
  ],
  "@stylistic/brace-style": ["error", "1tbs"],
  "no-useless-constructor": "off",
  "vue/multi-word-component-names": "off",
  "vue/no-v-html": "off",
  "import/named": "off",
  "no-use-before-define": "off",
  "@typescript-eslint/ban-ts-comment": "off",
  "no-void": [
    "error",
    {
      allowAsStatement: true,
    },
  ],
  "@typescript-eslint/no-floating-promises": [
    "error",
    {
      ignoreIIFE: true,
    },
  ],
  "@typescript-eslint/no-misused-promises": [
    "error",
    {
      checksVoidReturn: {
        arguments: false,
      },
    },
  ],
  "@typescript-eslint/no-unsafe-member-access": "off",
  "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/no-namespace": "off",
}

export default withNuxt({
  ignores: ["**/node_modules/**", "**/.nuxt/**", "**/dist/**"],
}).overrideRules(commonRules)
