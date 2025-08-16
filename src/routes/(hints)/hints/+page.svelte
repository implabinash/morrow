<script lang="ts">
	import { Leaf, Citrus, TriangleAlert } from "@lucide/svelte";

	import { categories, type Category } from "$lib/utils/categories";
	import Card from "$lib/components/Card.svelte";

	let difficulty: "easy" | "medium" | "hard" | undefined = $state();
	let category: Category = $state("All Categories");
</script>

<main class="flex h-screen px-4 pt-16">
	<aside class="h-full min-w-72 space-y-6 border-r border-r-neutral-border p-6">
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

		<div class="space-y-3 text-caption-bold text-subtext-color">
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
	</aside>

	<section class="grid flex-1 grid-cols-3 gap-6 overflow-y-auto p-6">
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
