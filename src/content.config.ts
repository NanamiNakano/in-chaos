import { glob } from "astro/loaders"
import { defineCollection, reference, z } from "astro:content"

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    tags: z.string().array(),
    relatedPosts: z.array(reference("blog")).optional(),
  }),
})

export const collections = { blog }
