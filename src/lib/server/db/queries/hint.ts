import { and, eq, ne } from "drizzle-orm";

import { db } from "../index";
import { hintsTable } from "../schema/hint";

export const getHintById = async (id: string) => {
	const hint = await db.query.hintsTable.findFirst({
		where: eq(hintsTable.id, id)
	});

	return hint;
};

export const getRandomHints = async (limit: number, id: string) => {
	const hints = await db.query.hintsTable.findMany({
		where: and(ne(hintsTable.id, id), eq(hintsTable.isApproved, true)),
		limit
	});

	return hints;
};
