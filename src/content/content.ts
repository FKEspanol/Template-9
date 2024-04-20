import { defineCollection, z } from "astro:content";
const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        sub_heading: z.string(),
        author: z.string(),
        pubdate: z.date(),
        img: z.string(),
        supporting_text: z.string(),
    }),
});

export const collections = {
    services: blogCollection,
};
