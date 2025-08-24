import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set");
if (!process.env.DATABASE_AUTH_TOKEN) throw new Error("DATABASE_AUTH_TOKEN is not set");

export default defineConfig({
	out: "./drizzle",
	schema: "./src/lib/server/db/schema",
	dialect: "turso",
	dbCredentials: {
		authToken: process.env.DATABASE_AUTH_TOKEN,
		url: process.env.DATABASE_URL
	},
	verbose: true,
	strict: true
});
