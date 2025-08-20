import { categories } from "$lib/utils/categories";
import { difficulties } from "$lib/utils/difficulty";
import { z } from "zod/v4";

export const newHintSchema = z.object({
	title: z
		.string()
		.min(6, "Title must be at least 6 characters long.")
		.max(64, "Title cannot exceed 64 characters."),
	description: z
		.string()
		.min(64, "Description must be at least 64 characters long.")
		.max(512, "Description cannot exceed 512 characters."),

	category: z.enum(categories.map((c) => c.id)),
	difficulty: z.enum(difficulties.map((d) => d.name)),
	resources: z
		.array(z.url("Each resource must be a valid URL."))
		.min(1, "At least one resource is required.")
		.max(5, "You can provide up to 5 resources."),

	avatar: z
		.instanceof(File)
		.refine((file) => file.size <= 512 * 1024, "Image must be smaller than 512KB.")
		.refine(
			(file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
			"Only JPEG, PNG, or WebP images are allowed."
		),
	name: z
		.string()
		.min(3, "Name must be at least 3 characters long.")
		.max(64, "Name cannot exceed 64 characters."),

	twitter: z.url("Twitter must be a valid URL.").optional()
});
