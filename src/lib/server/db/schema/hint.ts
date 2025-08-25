import { sql, type InferSelectModel } from "drizzle-orm";
import { randomUUID } from "node:crypto";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const hintsTable = sqliteTable("hints", {
	id: text("id")
		.primaryKey()
		.notNull()
		.unique()
		.$defaultFn(() => randomUUID()),

	title: text("title").unique().notNull(),
	description: text("description").notNull(),
	image: integer("image")
		.notNull()
		.$defaultFn(() => Math.floor(Math.random() * 6)),

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
	difficulty: text("difficulty", { enum: ["easy", "medium", "hard"] }).notNull(),
	resources: text("resources").notNull(),

	isApproved: integer("is_approved", { mode: "boolean" }).default(false).notNull(),

	publisherName: text("publisher_name").notNull(),
	publisherTwitter: text("publisher_twitter").notNull(),

	createdAt: text("created_at")
		.notNull()
		.default(sql`(CURRENT_TIMESTAMP)`),
	updatedAt: text("updated_at")
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`)
});

export type Hint = InferSelectModel<typeof hintsTable>;
