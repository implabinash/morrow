<script lang="ts">
	import { injectAnalytics } from "@vercel/analytics/sveltekit";
	import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

	import "../app.css";

	import type { LayoutProps } from "./$types";

	import Header from "$lib/components/Header.svelte";

	let { children }: LayoutProps = $props();

	injectAnalytics();
	injectSpeedInsights();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>
</div>
