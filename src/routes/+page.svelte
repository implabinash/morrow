<script lang="ts">
	import { ArrowUpRight } from "@lucide/svelte";

	import groups from "$lib/utils/navlinks";
</script>

<svelte:head>
	<title>Morrow: A hint from tomorrow</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="mx-auto max-w-170 space-y-10 px-10 py-36">
	<section class="space-y-5">
		<img src="/images/logo/logo.svg" alt="Morrow" class="size-12" />

		<h1 class="text-[2.5rem] leading-[1.2] font-semibold">Morrow</h1>

		<p class="max-w-80 text-base leading-[1.6] text-subtext-color">
			Explore hints, tools, and roadmaps that help you start building on Polkadot today.
		</p>
	</section>

	<section class="grid grid-cols-1 gap-10 md:grid-cols-2">
		{#each groups as group (group.title)}
			<div class="space-y-3 border-t border-t-neutral-border pt-10">
				<h3 class="text-lg font-semibold">{group.title}</h3>

				<ul class="space-y-1">
					{#each group.links as link (link.name)}
						<li
							class="rounded-md p-1 text-neutral-950 transition-all duration-200 hover:bg-neutral-100 active:bg-neutral-50"
						>
							<a
								href={link.href}
								target={link.external ? "_blank" : "_self"}
								class="flex items-center justify-between text-subtext-color transition-all duration-100 hover:text-neutral-900"
							>
								<div class="flex items-center gap-2">
									<img
										src={`/images/icons/${link.image}.webp`}
										alt="Buld"
										class={`${link.external ? "size-7" : "size-8"}`}
									/>{link.name}
								</div>

								{#if link.external}
									<ArrowUpRight class="text-neutral-400 transition-all duration-300" />
								{/if}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</section>
</main>
