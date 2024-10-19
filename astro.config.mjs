// @ts-check
import vue from "@astrojs/vue"
import deno from "@deno/astro-adapter"
import { defineConfig } from "astro/config"
import UnoCSS from "unocss/astro"

export default defineConfig({
  output: "server",
  adapter: deno(),
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
