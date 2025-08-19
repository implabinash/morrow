<script lang="ts">
	import { Leaf, Citrus, TriangleAlert, ChevronDown, ChevronUp } from "@lucide/svelte";

	import { categories, type Category } from "$lib/utils/categories";
	import Card from "$lib/components/Card.svelte";

	let difficulty: "easy" | "medium" | "hard" | undefined = $state();
	let category: Category = $state("All Categories");
	let isOpen: boolean = $state(false);
</script>

<main class="flex h-screen flex-col px-0 pt-16 sm:px-4 lg:flex-row">
	<aside
		class="flex min-w-72 flex-col space-y-6 border-r border-r-neutral-border p-6 md:flex-row md:gap-10 lg:h-full lg:flex-col lg:gap-6 lg:p-6"
	>
		<div class="space-y-4 text-caption-bold text-subtext-color">
			<p>Difficulty</p>

			<div class="flex w-fit items-center rounded-md bg-neutral-100 p-0.5">
				<button
					class={`flex cursor-pointer items-center gap-2 rounded-md px-3 py-1.5 hover:text-black ${difficulty === "easy" ? "bg-white text-black" : ""}`}
					onclick={() => {
						difficulty = difficulty === "easy" ? undefined : "easy";
					}}><Leaf size="14px" /> Easy</button
				>

				<button
					class={`flex cursor-pointer items-center gap-2 rounded-md px-3 py-1.5 hover:text-black ${difficulty === "medium" ? "bg-white text-black" : ""}`}
					onclick={() => {
						difficulty = difficulty === "medium" ? undefined : "medium";
					}}><Citrus size="14px" /> Medium</button
				>

				<button
					class={`flex cursor-pointer items-center gap-2 rounded-md px-3 py-1.5 hover:text-black ${difficulty === "hard" ? "bg-white text-black" : ""}`}
					onclick={() => {
						difficulty = difficulty === "hard" ? undefined : "hard";
					}}><TriangleAlert size="14px" /> Hard</button
				>
			</div>
		</div>

		<div class="hidden space-y-3 text-caption-bold text-subtext-color lg:block">
			<p>Categories</p>

			<ul>
				{#each categories as c (c.name)}
					<li>
						<button
							class={`flex h-full w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-body hover:bg-neutral-100 ${category === c.name ? "bg-neutral-100 text-black" : ""} hover:text-black active:bg-neutral-50`}
							onclick={() => {
								category = category === c.name ? "All Categories" : c.name;
							}}
						>
							<c.icon size="16px" />
							{c.name}</button
						>
					</li>
				{/each}
			</ul>
		</div>

		<div class="block space-y-3 text-caption-bold text-subtext-color lg:hidden">
			<p>Categories</p>

			<div class="relative">
				<button
					class="flex cursor-pointer items-center gap-2 rounded-md border border-neutral-border bg-neutral-100 px-3 py-1.5 text-body transition-all duration-200"
					onclick={() => {
						isOpen = !isOpen;
					}}
				>
					{#if categories.find((c) => c.name === category)}
						{@const Icon = categories.find((c) => c.name === category)?.icon}
						<Icon size="16px" />
					{/if}

					{categories.find((c) => c.name === category)?.name}

					{#if isOpen}
						<ChevronUp size="16px" />
					{:else}
						<ChevronDown size="16px" />
					{/if}
				</button>

				{#if isOpen}
					<ul class="absolute z-10 min-w-44 border border-neutral-border bg-white">
						{#each categories as c (c.name)}
							<li>
								<button
									class={`flex h-full w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-body hover:bg-neutral-100 ${category === c.name ? "bg-neutral-100 text-black" : ""} hover:text-black active:bg-neutral-50`}
									onclick={() => {
										category = category === c.name ? "All Categories" : c.name;
										isOpen = !isOpen;
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
			difficulty="easy"
			category="DeSci"
			title="Decentralized Research Publishing"
			description="Build a decentralized platform for academic research publishing using blockchain technology"
			href="/hints"
		/>
		<Card
			name="Steve Jobs"
			image="1"
			thumbnail="1"
			difficulty="easy"
			category="DeSci"
			title="Decentralized Research Publishing"
			description="Build a decentralized platform for academic research publishing using blockchain technology"
			href="/hints"
		/>
		<Card
			name="Steve Jobs"
			image="1"
			thumbnail="1"
			difficulty="easy"
			category="DeSci"
			title="Decentralized Research Publishing"
			description="Build a decentralized platform for academic research publishing using blockchain technology"
			href="/hints"
		/>
		<Card
			name="Steve Jobs"
			image="1"
			thumbnail="1"
			difficulty="easy"
			category="DeSci"
			title="Decentralized Research Publishing"
			description="Build a decentralized platform for academic research publishing using blockchain technology"
			href="/hints"
		/>
		<Card
			name="Steve Jobs"
			image="1"
			thumbnail="1"
			difficulty="easy"
			category="DeSci"
			title="Decentralized Research Publishing"
			description="Build a decentralized platform for academic research publishing using blockchain technology"
			href="/hints"
		/>
		<Card
			name="Steve Jobs"
			image="1"
			thumbnail="1"
			difficulty="easy"
			category="DeSci"
			title="Decentralized Research Publishing"
			description="Build a decentralized platform for academic research publishing using blockchain technology"
			href="/hints"
		/>
		<Card
			name="Steve Jobs"
			image="1"
			thumbnail="1"
			difficulty="easy"
			category="DeSci"
			title="Decentralized Research Publishing"
			description="Build a decentralized platform for academic research publishing using blockchain technology"
			href="/hints"
		/>
		<Card
			name="Steve Jobs"
			image="1"
			thumbnail="1"
			difficulty="easy"
			category="DeSci"
			title="Decentralized Research Publishing"
			description="Build a decentralized platform for academic research publishing using blockchain technology"
			href="/hints"
		/>
	</section>
</main>
