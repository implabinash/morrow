<script lang="ts">
	import { ArrowUpRight } from "@lucide/svelte";

	import groups from "$lib/utils/navlinks";
</script>

<svelte:head>
	<title>Morrow - A Hint from Tomorrow</title>
	<meta
		name="description"
		content="Morrow is a community-driven hub for builders in the Polkadot ecosystem. Discover hints, tools, and roadmaps to bring your ideas to life."
	/>
	<meta
		name="keywords"
		content="Morrow, Polkadot builders, Web3 ideas, Polkadot tools, Polkadot roadmaps, Web3 development, hints for builders, blockchain startup ideas"
	/>

	<meta property="og:title" content="Morrow - A Hint from Tomorrow" />
	<meta
		property="og:description"
		content="Morrow helps builders and founders in the Polkadot ecosystem. Explore hints, curated tools, and guided roadmaps to bring ideas to life."
	/>
	<!-- <meta property="og:image" content="https://morrow.xyz/og-image.png" /> -->
	<!-- <meta property="og:url" content="https://morrow.xyz" /> -->

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Morrow - A Hint from Tomorrow" />
	<meta
		name="twitter:description"
		content="Discover, share, and explore hints, tools, and roadmaps for building on Polkadot. Morrow is your launchpad for Web3 ideas and innovation."
	/>
	<!-- <meta name="twitter:image" content="https://morrow.xyz/twitter-card.png" /> -->
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
								href={link.live ? link.href : undefined}
								target={link.external ? "_blank" : "_self"}
								class="flex items-center justify-between text-subtext-color transition-all duration-100 hover:text-neutral-900"
								class:cursor-not-allowed={!link.live}
								aria-disabled={!link.live}
							>
								<div class="flex items-center gap-2">
									<img
										src={`/images/icons/${link.image}.webp`}
										alt="Buld"
										class={`size-8 ${link.external && link.image !== "mail" ? " p-0.5" : ""}`}
									/>{link.name}
								</div>

								{#if link.external}
									<ArrowUpRight class="text-neutral-400 transition-all duration-300" />
								{/if}

								{#if !link.live}
									<span class="text-caption text-neutral-400">Not live</span>
								{/if}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</section>
</main>
