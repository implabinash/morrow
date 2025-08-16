<script lang="ts">
	import { page } from "$app/stores";

	let pathName = $derived($page.url.pathname.toString().replace("/", ""));
</script>

<header
	class="fixed z-10 flex h-16 w-screen items-center justify-between border-b border-b-neutral-border bg-white pr-5 pl-3 md:pr-10 md:pl-6"
>
	<a href="/" class="flex items-end gap-2 leading-[1.2]">
		<img src="/images/logo/logo.svg" alt="Morrow" class="size-5" />

		<p class="font-medium">
			Morrow <span class:hidden={!pathName} class="text-neutral-400">/ {pathName}</span>
		</p>
	</a>

	<a
		href="/"
		class="rounded-md bg-black px-4 py-2 text-caption-bold text-white hover:bg-brand-500 active:bg-brand-600"
		>Support Us</a
	>
</header>
