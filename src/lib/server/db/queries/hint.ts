import { eq } from "drizzle-orm";

import { db } from "../index";
import { hintsTable } from "../schema/hint";

export const getHintById = async (id: string) => {
	const hint = await db.query.hintsTable.findFirst({
		where: eq(hintsTable.id, id)
	});

	return hint;
};
