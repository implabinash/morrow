<script lang="ts">
	import type { Snippet } from "svelte";

	let { children, class: classNames }: { children: Snippet<[]>; class?: string } = $props();
</script>

<section class={`mx-auto max-w-192 space-y-12 p-6 sm:p-10 ${classNames}`}>
	{@render children()}
</section>
