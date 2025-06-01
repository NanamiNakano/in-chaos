import mdx from "@astrojs/mdx"
import vue from "@astrojs/vue"
import { defineConfig } from "astro/config"
import UnoCSS from "unocss/astro"

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    vue(),
    mdx(),
  ],
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
