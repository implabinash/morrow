import { sql } from "drizzle-orm";
import { randomUUID } from "crypto";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const hintsTable = sqliteTable("hint", {
	id: text("id")
		.primaryKey()
		.notNull()
		.unique()
		.$defaultFn(() => randomUUID()),

	title: text("title").notNull(),
	description: text("description").notNull(),

	category: text("category", {
		enum: [
			"all",
			"payments",
			"defi",
			"depin",
			"nfts",
			"devtools",
			"infra",
			"social",
			"gaming",
			"ai",
			"desci"
		]
	}).notNull(),

	difficulty: text("difficulty", { enum: ["easy", "medium", "hard"] }),

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
