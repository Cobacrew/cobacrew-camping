import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		affiliateLinks: z
			.array(
				z.object({
					label: z.string(),
					query: z.string(),
				})
			)
			.optional(),
		featuredPicks: z
			.array(
				z.object({
					name: z.string(),
					price: z.string(),
					why: z.string(),
					url: z.string(),
					image: z.string().optional(),
				})
			)
			.optional(),
	}),
});

export const collections = { blog };
