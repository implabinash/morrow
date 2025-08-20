import { z } from "zod/v4";

import type { Actions } from "./$types";

import { newHintSchema } from "$lib/validations/newhint";

export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		console.log(formData);

		const result = newHintSchema.safeParse(formData);

		if (result.success) {
			return { success: true };
		} else {
			return { success: false, data: formData, error: z.flattenError(result.error) };
		}
	}
} satisfies Actions;
