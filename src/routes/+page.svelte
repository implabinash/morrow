<script lang="ts">
	import { Plus } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Home | Morrow</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<header
	class="flex items-center justify-between border-b border-b-neutral-border bg-[#fdf9fa] px-12 py-4"
>
	<div class="flex gap-2">
		<img src="/images/logo.svg" alt="Morrow" class="h-8 w-8" />

		<a href="/" class="text-heading-1 font-semibold">Morrow</a>
	</div>

	<nav>
		<a
			href="/"
			class="flex items-center gap-2 rounded-md bg-brand-600 py-2 pr-4 pl-3 text-body-bold text-white hover:bg-brand-500 active:bg-brand-600"
		>
			<Plus size="20px" /> New Hint</a
		>
	</nav>
</header>

<section></section>
