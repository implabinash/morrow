import { z } from "zod/v4";

import type { Actions } from "./$types";
import { error, redirect } from "@sveltejs/kit";

import { newHintSchema } from "$lib/validations/newhint";
import { hintsTable } from "$lib/server/db/schema/hint";
import { db } from "$lib/server/db";

export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		console.log(formData);

		const result = newHintSchema.safeParse(formData);

		if (!result.success) {
			return { success: false, data: formData, error: z.flattenError(result.error) };
		}

		const title = result.data.title.trim();
		const description = result.data.description.trim();
		const publisherName = result.data.name.trim();
		const publisherTwitter = result.data.twitter?.trim() ?? "";

		try {
			const [hint] = await db
				.insert(hintsTable)
				.values({
					title,
					description,
					category: result.data.category,
					difficulty: result.data.difficulty,
					resources: result.data.resources,
					publisherName,
					publisherTwitter
				})
				.returning({ hintId: hintsTable.id });

			if (hint.hintId) {
				throw redirect(303, `/${hint.hintId}`);
			}
		} catch (e) {
			console.error("Insert failed:", e);
			throw error(500, "Something went wrong! Please Try again.");
		}
	}
} satisfies Actions;
