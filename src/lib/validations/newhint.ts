import { z } from "zod/v4";

import { categories } from "$lib/utils/categories";
import { difficulties } from "$lib/utils/difficulty";

export const newHintSchema = z.object({
	title: z
		.string()
		.min(6, "Title must be at least 6 characters long.")
		.max(64, "Title cannot exceed 64 characters."),
	description: z
		.string()
		.min(64, "Description must be at least 64 characters long.")
		.max(512, "Description cannot exceed 512 characters."),

	category: z
		.enum(categories.map((c) => c.id))
		.refine((val) => val !== "all", { message: "Choose a category" }),
	difficulty: z.enum(
		difficulties.map((d) => d.name),
		{ message: "Choose a difficulty" }
	),
	resources: z
		.string()
		.transform((val) =>
			val
				.split(",")
				.map((s) => s.trim())
				.filter((s) => s !== "")
		)
		.refine((val) => val.length >= 1, { message: "At least one resource is required." })
		.refine((val) => val.length <= 5, { message: "You can provide up to 5 resources." })
		.refine((val) => val.every((url) => z.url().safeParse(url).success), {
			message: "Each resource must be a valid URL."
		}),

	// avatar: z
	// 	.instanceof(File)
	// 	.refine((file) => file.size <= 512 * 1024, "Image must be smaller than 512KB.")
	// 	.refine(
	// 		(file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
	// 		"Only JPEG, PNG, or WebP images are allowed."
	// 	),
	name: z
		.string()
		.min(3, "Name must be at least 3 characters long.")
		.max(64, "Name cannot exceed 64 characters."),

	twitter: z.url("Twitter must be a valid URL.").optional()
});

export type NewHintSchema = z.infer<typeof newHintSchema>;
