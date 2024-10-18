// eslint.config.mjs
import antfu from "@antfu/eslint-config"

export default antfu(
  {
    astro: true,
    unocss: true,
    stylistic: {
      quotes: "double",
      indent: 2,
    },
    formatters: {
      css: true,
    },
  },
)
