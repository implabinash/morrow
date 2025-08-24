<script lang="ts">
	import { injectAnalytics } from "@vercel/analytics/sveltekit";

	import "../app.css";

	import type { LayoutProps } from "./$types";

	import Header from "$lib/components/Header.svelte";

	let { children }: LayoutProps = $props();

	injectAnalytics();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>
</div>
