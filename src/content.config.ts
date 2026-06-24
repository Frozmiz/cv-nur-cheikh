import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const dateField = z.union([z.coerce.date(), z.string()]);

const experience = defineCollection({
	loader: glob({ base: './src/content/experience', pattern: '**/*.md' }),
	schema: z.object({
		role: z.string(),
		clinic: z.string(),
		location: z.string(),
		startDate: dateField,
		endDate: dateField,
		responsibilities: z.array(z.string()).optional(),
	}),
});

const education = defineCollection({
	loader: glob({ base: './src/content/education', pattern: '**/*.md' }),
	schema: z.object({
		degree: z.string(),
		institution: z.string(),
		startDate: dateField,
		endDate: dateField,
	}),
});

export const collections = { experience, education };
