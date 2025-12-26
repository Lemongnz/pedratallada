import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		cover: image().optional(),
		tags: z.array(z.string()),
		date: z.string().optional(),
	}),
});

export const collections = { projects };
