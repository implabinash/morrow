import { sql } from "drizzle-orm";
import { randomUUID } from "crypto";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

import { categories } from "$lib/utils/categories";
import { difficulties } from "$lib/utils/difficulty";

export const hintsTable = sqliteTable("hint", {
	id: text("id")
		.primaryKey()
		.notNull()
		.unique()
		.$defaultFn(() => randomUUID()),

	title: text("title").notNull(),
	description: text("description").notNull(),

	category: text("category", {
		enum: categories.map((c) => c.id) as [
			(typeof categories)[number]["id"],
			...(typeof categories)[number]["id"][]
		]
	}).notNull(),

	difficulty: text("difficulty", {
		enum: difficulties.map((d) => d.name) as [
			(typeof difficulties)[number]["name"],
			...(typeof difficulties)[number]["name"][]
		]
	}),

	resources: text("resources").notNull(),

	// avatar: text("avatar"),
	name: text("name").notNull(),
	twitter: text("twitter"),

	createdAt: text("created_at")
		.notNull()
		.default(sql`(CURRENT_TIMESTAMP)`),
	updatedAt: text("updated_at")
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`)
});
