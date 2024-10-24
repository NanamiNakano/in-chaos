// @ts-check
import vue from "@astrojs/vue"
import { defineConfig } from "astro/config"
import UnoCSS from "unocss/astro"

export default defineConfig({
  integrations: [UnoCSS({
    injectReset: true,
  }), vue()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
        },
      },
    },
  },
})
