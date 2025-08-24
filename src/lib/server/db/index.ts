import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { DATABASE_URL, DATABASE_AUTH_TOKEN } from "$env/static/private";
import { hintsTable } from "./schema/hint";

if (!DATABASE_URL) throw new Error("DATABASE_URL is not set");
if (!DATABASE_AUTH_TOKEN) throw new Error("DATABASE_AUTH_TOKEN is not set");

const client = createClient({
	url: DATABASE_URL,
	authToken: DATABASE_AUTH_TOKEN
});

export const db = drizzle({ client, schema: { hintsTable } });
