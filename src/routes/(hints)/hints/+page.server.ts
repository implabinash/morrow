import type { PageServerLoad } from "./$types";

import { getAllApprovedHints } from "$lib/server/db/queries/hint";

export const load: PageServerLoad = async () => {
	try {
		const approvedHints = await getAllApprovedHints();

		return { hints: approvedHints };
	} catch (e) {
		console.error(e);

		return { hints: undefined };
	}
};
