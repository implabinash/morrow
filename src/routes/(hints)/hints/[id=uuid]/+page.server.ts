import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";

import { getHintById, getRandomHints } from "$lib/server/db/queries/hint";

export const load: PageServerLoad = async ({ params }) => {
	const id = params.id;

	const hint = await getHintById(id);
	const relatedHint = await getRandomHints(2, id);

	if (!hint) {
		throw error(404, "Hint not found.");
	}

	return { hint, relatedHint };
};
