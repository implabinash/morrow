import { Leaf, TriangleAlert, Citrus } from "@lucide/svelte";

export const difficulties = [
	{ name: "easy", icon: Leaf },
	{ name: "medium", icon: Citrus },
	{ name: "hard", icon: TriangleAlert }
] as const;

export type Difficulties = (typeof difficulties)[number]["name"];
