<script lang="ts">
	import "../app.css";

	import type { LayoutProps } from "./$types";

	import Header from "$lib/components/Header.svelte";

	let { data, children }: LayoutProps = $props();

	console.log(data);
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>
</div>
