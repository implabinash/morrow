import type { PageServerLoad } from "./$types";

import { getAllApprovedHints } from "$lib/server/db/queries/hint";

export const load: PageServerLoad = async () => {
	const approvedHints = await getAllApprovedHints();

	return { hints: approvedHints };
};
