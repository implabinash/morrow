import type { PageServerLoad } from "./$types";

import { getHintById } from "$lib/server/db/queries/hint";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ params }) => {
	const id = params.id;
	const hint = await getHintById(id);

	if (!hint) {
		throw error(404, "Hint not found.");
	}

	return { hint };
};
