// eslint.config.mjs
import antfu from "@antfu/eslint-config"

export default antfu({
  astro: true,
  stylistic: {
    quotes: "double",
    indent: 2,
  },
})