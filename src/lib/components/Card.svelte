<script lang="ts">
	import { ArrowRight } from "@lucide/svelte";

	import type { Category } from "$lib/utils/categories";
	import Badge from "./Badge.svelte";

	type Props = {
		name: string;
		image: string;
		thumbnail: string;
		difficulty: "easy" | "medium" | "hard";
		category: Category;
		title: string;
		description: string;
		href: string;
	};

	let props: Props = $props();
</script>

<div class="h-fit space-y-4 rounded-md border border-neutral-border bg-neutral-50 p-4">
	<div class="flex items-center gap-2">
		<img
			src={`/images/placeholders/${props.image}.webp`}
			alt={props.name}
			class="size-6 rounded-full"
		/>

		<p class="text-caption text-subtext-color">{props.name}</p>
	</div>

	<img
		src={`/images/placeholders/${props.image}.webp`}
		alt={props.title}
		class="h-48 w-full rounded-md"
	/>

	<div class="flex items-center gap-2">
		<Badge
			type={props.difficulty === "easy"
				? "success"
				: props.difficulty === "medium"
					? "warning"
					: "error"}
			text={props.difficulty.charAt(0).toUpperCase() + props.difficulty.slice(1)}
			leftIcon={ArrowRight}
		/>

		<Badge type="default" text={props.category} />
	</div>

	<h2 class="text-heading-3">{props.title}</h2>

	<p class="text-body text-subtext-color">{props.description}</p>

	<a href={props.href} class="flex items-center gap-2 text-body text-brand-700 hover:underline"
		>Read More <ArrowRight size="16px" /></a
	>
</div>
