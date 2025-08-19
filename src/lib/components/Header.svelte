<script lang="ts">
	import { Plus, Heart } from "@lucide/svelte";

	import { page } from "$app/state";

	let pathName = $derived(page.url.pathname.toString().replace("/", ""));
</script>

<header
	class="fixed flex h-16 w-screen items-center justify-between border-b border-b-neutral-border bg-white pr-5 pl-3 md:pr-10 md:pl-6"
>
	<a href="/" class="flex items-end gap-2 leading-[1.2]">
		<img src="/images/logo/logo.svg" alt="Morrow" class="size-7 md:size-5" />

		<p class="hidden font-semibold sm:block">
			Morrow <span class:hidden={!pathName} class="text-body-bold text-neutral-400"
				>/ {pathName
					.split("-")
					.map((p) => p.charAt(0).toUpperCase() + p.slice(1))
					.join(" ")}</span
			>
		</p>
	</a>

	<nav class="flex gap-3">
		{#if pathName === "hints"}
			<a
				href="/new-hint"
				class="flex items-center gap-2 rounded-md bg-brand-600 py-2 pr-4 pl-3 text-caption-bold text-white hover:bg-brand-500 active:bg-brand-600"
				><Plus size="16px" /> New Hint</a
			>
		{/if}

		<a
			href="/"
			class="flex items-center gap-2 rounded-md bg-brand-50 py-2 pr-4 pl-3 text-caption-bold text-brand-700 hover:bg-brand-100 active:bg-brand-50"
			><Heart size="16px" /> Support Us</a
		>
	</nav>
</header>
