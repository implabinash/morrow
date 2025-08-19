<script lang="ts">
	import { ChevronDown, ChevronUp } from "@lucide/svelte";

	import { categories, type Category } from "$lib/utils/categories";
	import { difficulties, type Difficulties } from "$lib/utils/difficulty";

	import Card from "$lib/components/Card.svelte";

	let difficulty: Difficulties | undefined = $state();
	let isDifficultyOpen: boolean = $state(false);

	let category: Category = $state("all");
	let isCategoryOpen: boolean = $state(false);
</script>

<main class="flex h-screen flex-col px-0 pt-16 sm:px-4 lg:flex-row">
	<aside
		class="flex min-w-72 gap-4 border-r border-r-neutral-border p-6 pb-3 md:flex-row md:gap-10 lg:h-full lg:flex-col lg:space-y-6 lg:p-6"
	>
		<div class="mb-0 space-y-3 text-caption-bold text-subtext-color">
			<p>Difficulty</p>

			<div class="mb-0 hidden w-fit items-center rounded-md bg-neutral-100 p-0.5 text-body sm:flex">
				{#each difficulties as d (d.name)}
					<button
						class={`flex cursor-pointer items-center gap-2 rounded-md px-3 py-1.5 hover:text-black ${difficulty === d.name ? "bg-white text-black" : ""}`}
						onclick={() => {
							difficulty = difficulty === d.name ? undefined : d.name;
						}}><d.icon size="14px" /> {d.name.charAt(0).toUpperCase() + d.name.slice(1)}</button
					>
				{/each}
			</div>

			<div class="relative block text-caption sm:hidden sm:text-body">
				<button
					class="flex cursor-pointer items-center gap-2 rounded-md border border-neutral-border bg-neutral-100 px-3 py-1.5 transition-all duration-200"
					onclick={() => {
						isDifficultyOpen = !isDifficultyOpen;
					}}
				>
					{#if difficulty}
						{@const Icon = difficulties.find((c) => c.name === difficulty)?.icon}
						<Icon size="14px" />

						{@const Difficulty = difficulties.find((c) => c.name === difficulty)?.name ?? ""}

						{Difficulty?.charAt(0).toUpperCase() + Difficulty?.slice(1)}
					{:else}
						Select
					{/if}

					{#if isDifficultyOpen}
						<ChevronUp size="16px" />
					{:else}
						<ChevronDown size="16px" />
					{/if}
				</button>

				{#if isDifficultyOpen}
					<ul class="absolute z-10 min-w-24 rounded-md border border-neutral-border bg-white">
						{#each difficulties as d (d.name)}
							<li>
								<button
									class={`flex h-full w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 hover:bg-neutral-100 ${difficulty === d.name ? "bg-neutral-100 text-black" : ""} hover:text-black active:bg-neutral-50`}
									onclick={() => {
										difficulty = difficulty === d.name ? undefined : d.name;
										isDifficultyOpen = !isDifficultyOpen;
									}}
								>
									<d.icon size="14px" />
									{d.name.charAt(0).toUpperCase() + d.name.slice(1)}</button
								>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>

		<div class="space-y-3 text-caption-bold text-subtext-color">
			<p>Categories</p>

			<ul class="hidden lg:block">
				{#each categories as c (c.name)}
					<li>
						<button
							class={`flex h-full w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-body hover:bg-neutral-100 ${category === c.id ? "bg-neutral-100 text-black" : ""} hover:text-black active:bg-neutral-50`}
							onclick={() => {
								category = category === c.id ? "all" : c.id;
							}}
						>
							<c.icon size="16px" />
							{c.name}</button
						>
					</li>
				{/each}
			</ul>

			<div class="relative block text-caption sm:text-body lg:hidden">
				<button
					class="flex cursor-pointer items-center gap-2 rounded-md border border-neutral-border bg-neutral-100 px-3 py-1.5 transition-all duration-200"
					onclick={() => {
						isCategoryOpen = !isCategoryOpen;
					}}
				>
					{#if categories.find((c) => c.id === category)}
						{@const Icon = categories.find((c) => c.id === category)?.icon}
						<Icon size="16px" />
					{/if}

					{categories.find((c) => c.id === category)?.name}

					{#if isCategoryOpen}
						<ChevronUp size="16px" />
					{:else}
						<ChevronDown size="16px" />
					{/if}
				</button>

				{#if isCategoryOpen}
					<ul class="absolute z-10 min-w-44 rounded-md border border-neutral-border bg-white">
						{#each categories as c (c.name)}
							<li>
								<button
									class={`flex h-full w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 hover:bg-neutral-100 ${category === c.id ? "bg-neutral-100 text-black" : ""} hover:text-black active:bg-neutral-50`}
									onclick={() => {
										category = category === c.id ? "all" : c.id;
										isCategoryOpen = !isCategoryOpen;
									}}
								>
									<c.icon size="16px" />
									{c.name}</button
								>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	</aside>

	<section
		class="grid flex-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-2 lg:overflow-y-auto xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-12"
	>
		<Card
			name="Steve Jobs"
			image="1"
			thumbnail="1"
			difficulty="hard"
			category="depin"
			title="Decentralized Research Publishing"
			description="Build a decentralized platform for academic research publishing using blockchain technology"
			href="/hints"
		/>
		<Card
			name="Steve Jobs"
			image="1"
			thumbnail="1"
			difficulty="easy"
			category="desci"
			title="Decentralized Research Publishing"
			description="Build a decentralized platform for academic research publishing using blockchain technology"
			href="/hints"
		/>
		<Card
			name="Steve Jobs"
			image="1"
			thumbnail="1"
			difficulty="easy"
			category="ai"
			title="Decentralized Research Publishing"
			description="Build a decentralized platform for academic research publishing using blockchain technology"
			href="/hints"
		/>
		<Card
			name="Steve Jobs"
			image="1"
			thumbnail="1"
			difficulty="medium"
			category="gaming"
			title="Decentralized Research Publishing"
			description="Build a decentralized platform for academic research publishing using blockchain technology"
			href="/hints"
		/>
		<Card
			name="Steve Jobs"
			image="1"
			thumbnail="1"
			difficulty="easy"
			category="infra"
			title="Decentralized Research Publishing"
			description="Build a decentralized platform for academic research publishing using blockchain technology"
			href="/hints"
		/>
		<Card
			name="Steve Jobs"
			image="1"
			thumbnail="1"
			difficulty="easy"
			category="all"
			title="Decentralized Research Publishing"
			description="Build a decentralized platform for academic research publishing using blockchain technology"
			href="/hints"
		/>
		<Card
			name="Steve Jobs"
			image="1"
			thumbnail="1"
			difficulty="medium"
			category="payments"
			title="Decentralized Research Publishing"
			description="Build a decentralized platform for academic research publishing using blockchain technology"
			href="/hints"
		/>
		<Card
			name="Steve Jobs"
			image="1"
			thumbnail="1"
			difficulty="hard"
			category="devtools"
			title="Decentralized Research Publishing"
			description="Build a decentralized platform for academic research publishing using blockchain technology"
			href="/hints"
		/>
	</section>
</main>
