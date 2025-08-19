<script lang="ts">
	import { ChevronDown, ChevronUp, Link, Plus, Trash, Upload } from "@lucide/svelte";

	import { difficulties, type Difficulties } from "$lib/utils/difficulty";
	import Wrapper from "$lib/components/Wrapper.svelte";
	import { categories, type Category } from "$lib/utils/categories";

	let difficulty: Difficulties | undefined = $state();

	let category: Category = $state("all");
	let isCategoryOpen: boolean = $state(false);

	let resource: string = $state("");
	let resources: { id: number; value: string }[] = $state([]);

	const handleResourceAdd = () => {
		if (resource.trim() !== "") {
			resources?.push({ id: resources?.length, value: resource.trim() });
			resource = "";
		}
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === "Enter") {
			e.preventDefault();
			handleResourceAdd();
		}
	};

	function handleResourceRemove(id: number) {
		resources = resources.filter((r) => r.id !== id);
	}
</script>

<main class="py-36">
	<Wrapper class="rounded-md border border-neutral-border">
		<section class="space-y-2">
			<h1 class="text-heading-2">Create New Hint</h1>

			<p class="text-body text-subtext-color">Share your idea with the community</p>
		</section>

		<form class="flex flex-col gap-12">
			<section class="space-y-6">
				<div class="flex flex-col gap-1">
					<label for="title" class="flex flex-col gap-1 text-body-bold"
						>Title

						<input
							type="text"
							id="title"
							name="title"
							placeholder="Enter title"
							class="rounded-md border border-neutral-border px-2 py-1.5 placeholder:text-caption"
							required
						/>
					</label>

					<!-- <p class="text-caption text-error-600">Give your hint a clear, descriptive title</p> -->
				</div>

				<div class="flex flex-col gap-1">
					<label for="description" class="flex flex-col gap-1 text-body-bold"
						>Description

						<textarea
							id="description"
							name="description"
							placeholder="Enter description"
							class="min-h-24 rounded-md border border-neutral-border px-2 py-1.5 placeholder:text-caption"
							required
						></textarea>
					</label>

					<!-- <p class="text-caption text-subtext-color">Describe your idea in detail</p> -->
				</div>

				<div class="flex flex-col gap-1">
					<p class="text-body-bold">Category</p>

					<input type="hidden" name="category" value={category} />

					<div class="relative text-caption sm:text-body">
						<button
							type="button"
							class="flex w-full cursor-pointer items-center justify-between gap-2 rounded-md border border-neutral-border bg-neutral-100 px-3 py-1.5 transition-all duration-200"
							onclick={() => {
								isCategoryOpen = !isCategoryOpen;
							}}
						>
							<div class="flex items-center gap-4">
								{#if categories.find((c) => c.id === category)}
									{@const Icon = categories.find((c) => c.id === category)?.icon}
									<Icon size="16px" />
								{/if}

								{categories.find((c) => c.id === category)?.name}
							</div>

							{#if isCategoryOpen}
								<ChevronUp size="16px" />
							{:else}
								<ChevronDown size="16px" />
							{/if}
						</button>

						{#if isCategoryOpen}
							<div
								class="absolute w-full min-w-44 rounded-md border border-neutral-border bg-white"
							>
								{#each categories as c (c.id)}
									<button
										type="button"
										class={`flex h-full w-full cursor-pointer items-center gap-4 rounded-md px-3 py-2 hover:bg-neutral-100 ${category === c.id ? "bg-neutral-100 text-black" : ""} hover:text-black active:bg-neutral-50`}
										onclick={() => {
											category = c.id;
											isCategoryOpen = !isCategoryOpen;
										}}
									>
										<c.icon size="16px" />
										{c.name}</button
									>
								{/each}
							</div>
						{/if}
					</div>

					<!-- <p class="text-caption text-subtext-color">
						Choose the most relevant category for your hint
					</p> -->
				</div>

				<div class="flex flex-col gap-1">
					<p class="text-body-bold">Difficulty</p>

					<div class="grid grid-cols-3 gap-4">
						{#each difficulties as d (d.name)}
							<label
								class={`flex cursor-pointer items-center gap-4 rounded-md border  px-3 py-2 text-body ${difficulty === d.name ? "border-brand-200 bg-brand-50 hover:bg-brand-50" : "border-neutral-border  hover:bg-neutral-50"}`}
							>
								<input
									type="radio"
									name="difficulty"
									value={d.name}
									bind:group={difficulty}
									class="hidden"
									required
								/>

								<div
									class="flex size-4 items-center justify-center rounded-full border-2 border-neutral-300"
								>
									<div
										class="size-2 rounded-full"
										class:bg-brand-600={difficulty === d.name}
										class:ring-2={difficulty === d.name}
										class:ring-brand-600={difficulty === d.name}
										class:ring-offset-2={difficulty === d.name}
										class:ring-offset-brand-50={difficulty === d.name}
									></div>
								</div>

								<div class="flex items-center gap-2">
									<d.icon
										size="16px"
										class={`size-6 rounded-full p-1 ${d.name === "easy" ? "bg-success-200 text-success-800" : d.name === "medium" ? "bg-warning-200 text-warning-800" : "bg-error-200 text-error-800"}`}
									/>
									{d.name.charAt(0).toUpperCase() + d.name.slice(1)}
								</div>
							</label>
						{/each}
					</div>
				</div>

				<div class="flex flex-col gap-1">
					<input type="hidden" name="resources" value={resources.map((r) => r.value).join(", ")} />

					<label for="resource" class="flex flex-col gap-2 text-body-bold"
						>Resources

						<div class="flex items-center gap-3">
							<input
								type="url"
								id="resource"
								placeholder="Enter resources"
								bind:value={resource}
								onkeydown={handleKeyDown}
								class="w-full rounded-md border border-neutral-border px-2 py-1.5 placeholder:text-caption"
							/>

							<button
								type="button"
								onclick={handleResourceAdd}
								class="cursor-pointer rounded-md border border-neutral-border px-2 py-2 hover:bg-neutral-50 active:bg-white"
								><Plus size="16px" /></button
							>
						</div>

						<div class="space-y-1.5">
							{#each resources as r (r.id)}
								<div class="flex items-center gap-2">
									<p
										class="flex w-full items-center gap-2 rounded-md border border-neutral-border bg-neutral-50 px-2 py-1.5 placeholder:text-caption"
									>
										<Link size="16px" />
										{r.value}
									</p>

									<button
										type="button"
										onclick={() => {
											handleResourceRemove(r.id);
										}}
										class="cursor-pointer rounded-md border border-neutral-border bg-error-50 px-2 py-2 text-error-700 hover:bg-error-100 active:bg-error-50"
										><Trash size="16px" /></button
									>
								</div>
							{/each}
						</div>
					</label>

					<!-- <p class="text-caption text-subtext-color">
						Add links to relevant papers, datasets, or other resources
					</p> -->
				</div>
			</section>

			<div class="w-full border border-neutral-border"></div>

			<section class="space-y-6">
				<div class="mb-12 space-y-2">
					<h2 class="text-heading-2">Publisher Information</h2>
					<p class="text-body text-subtext-color">
						Your profile details will be shown with the hint
					</p>
				</div>

				<div class="mb-10 space-y-2">
					<p class="text-body-bold">Publisher Avatar</p>

					<div class="flex items-center gap-4">
						<img
							src="/images/placeholders/1.webp"
							alt="Author Profile"
							class="size-16 rounded-full"
						/>

						<div class="space-y-1">
							<label
								for="profile"
								class="flex w-fit cursor-pointer items-center gap-2 rounded-md border border-neutral-border py-1.5 pr-3 pl-2 text-body-bold hover:bg-neutral-50 active:bg-white"
								><Upload size="16px" /> Upload
								<input type="file" class="hidden" id="profile" name="profile" required /></label
							>

							<p class="text-caption text-subtext-color">
								For best results, upload a square image 512x512 or larger
							</p>
						</div>
					</div>
				</div>

				<div class="flex flex-col gap-1">
					<label for="name" class="flex flex-col gap-1 text-body-bold"
						>Publisher Name

						<input
							type="text"
							id="name"
							name="name"
							placeholder="Enter name"
							class="rounded-md border border-neutral-border px-2 py-1.5 placeholder:text-caption"
							required
						/>
					</label>

					<!-- <p class="text-caption text-subtext-color">Enter your full name</p> -->
				</div>

				<div class="flex flex-col gap-1">
					<label for="twitter" class="flex flex-col gap-1 text-body-bold"
						>Twitter

						<input
							type="url"
							id="twitter"
							name="twitter"
							placeholder="Enter twitter handle"
							class="rounded-md border border-neutral-border px-2 py-1.5 placeholder:text-caption"
							required
						/>
					</label>

					<!-- <p class="text-caption text-subtext-color">Enter your full name</p> -->
				</div>
			</section>

			<section class="self-end">
				<button
					type="submit"
					class="cursor-pointer rounded-md bg-brand-600 px-4 py-2 text-body-bold text-white hover:bg-brand-500 active:bg-brand-600"
					>Publish Hint</button
				>
			</section>
		</form>
	</Wrapper>
</main>
