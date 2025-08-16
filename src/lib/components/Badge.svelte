<script lang="ts">
	import type { Icon } from "@lucide/svelte";

	type Props = {
		type: "success" | "warning" | "error" | "default";
		text: string;
		leftIcon?: typeof Icon;
		rightIcon?: typeof Icon;
	};

	let { type, text, leftIcon, rightIcon }: Props = $props();
</script>

<div
	class={`
	h-fit w-fit rounded-md px-1.5 py-0.5 text-caption
	${type === "success" ? "bg-success-200 text-success-800" : ""}
	${type === "warning" ? "bg-warning-200 text-warning-800" : ""}
	${type === "error" ? "bg-error-200 text-error-800" : ""}
	${type === "default" ? "bg-neutral-100 text-neutral-700" : ""}`}
>
	{#if leftIcon}
		<leftIcon class="h-4 w-4"></leftIcon>
	{/if}

	{text}

	{#if rightIcon}
		<rightIcon class="h-4 w-4"></rightIcon>
	{/if}
</div>
