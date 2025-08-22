<script lang="ts">
	import { ArrowLeft, ChevronDown, ChevronUp, Link, Plus, Trash } from "@lucide/svelte";

	import type { ActionData } from "./$types";
	import { enhance } from "$app/forms";

	import { difficulties, type Difficulties } from "$lib/utils/difficulty";
	import { categories, type Category } from "$lib/utils/categories";

	import Wrapper from "$lib/components/Wrapper.svelte";
	import Seo from "$lib/components/Seo.svelte";

	let { form }: { form: ActionData } = $props();

	let difficulty: Difficulties | undefined = $state(
		difficulties.find((d) => d.name === form?.data?.["difficulty"])?.name || undefined
	);

	let category: Category = $state(
		categories.find((c) => c.id === form?.data?.["category"])?.id || "all"
	);
	let isCategoryOpen: boolean = $state(false);

	let resource: string = $state("");
	let resources: { id: number; value: string }[] = $state([]);

	$effect(() => {
		if (form?.data?.["resources"] && typeof form?.data?.["resources"] === "string") {
			resources = form.data["resources"]
				.split(",")
				.map((value, index) => ({ id: index, value: value.trim() }))
				.filter((r) => r.value !== "");
		}
	});

	$effect(() => {
		if (form?.success) {
			category = "all";
			difficulty = undefined;
			resources = [];
			resource = "";
		}
	});

	const handleResourceAdd = () => {
		if (resource.trim() !== "") {
			resources.push({ id: resources?.length, value: resource.trim() });
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

<Seo title="Submit a New Hint" />

<main class="py-20 sm:py-24">
	<Wrapper class="pl-6 sm:pl-0"
		><a
			href="/hints"
			class="flex w-fit items-center gap-1 rounded-md border border-neutral-border py-2 pr-4 pl-3 text-caption-bold hover:bg-neutral-100 active:bg-white sm:text-body-bold"
			><ArrowLeft size="16px" /> Back</a
		></Wrapper
	>

	<Wrapper class="sm:rounded-md sm:border sm:border-neutral-border sm:shadow">
		<section class="space-y-2">
			<h1 class="text-heading-2">Create New Hint</h1>

			<p class="text-body text-subtext-color">Share your idea with the community</p>
		</section>

		<form class="flex flex-col gap-12" method="POST" use:enhance>
			<section class="space-y-6">
				<div class="flex flex-col gap-1">
					<label for="title" class="flex flex-col gap-1 text-body-bold">
						<span class="flex gap-0.5">
							Title <span class="text-error-600" aria-hidden="true">*</span>
						</span>

						<input
							type="text"
							id="title"
							name="title"
							value={form?.data?.["title"]}
							placeholder="Enter title"
							class="rounded-md border border-neutral-border px-2 py-1.5 placeholder:text-caption"
							required
						/>
					</label>

					{#if form?.error?.fieldErrors.title}
						<p class="text-caption text-error-600">{form.error.fieldErrors.title}</p>
					{/if}
				</div>

				<div class="flex flex-col gap-1">
					<label for="description" class="flex flex-col gap-1 text-body-bold"
						><span class="flex gap-0.5">
							Description <span class="text-error-600" aria-hidden="true">*</span>
						</span>

						<textarea
							id="description"
							name="description"
							value={form?.data?.["description"]?.toString()}
							placeholder="Enter description"
							class="min-h-24 rounded-md border border-neutral-border px-2 py-1.5 placeholder:text-caption"
							required
						></textarea>
					</label>

					{#if form?.error?.fieldErrors.description}
						<p class="text-caption text-error-600">{form.error.fieldErrors.description}</p>
					{/if}
				</div>

				<div class="flex flex-col gap-1">
					<p class="text-body-bold">
						Category <span class="text-error-600" aria-hidden="true">*</span>
					</p>

					<input type="hidden" name="category" value={category} required />

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
								class="absolute z-10 w-full min-w-44 rounded-md border border-neutral-border bg-white"
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

					{#if form?.error?.fieldErrors.category}
						<p class="text-caption text-error-600">{form.error.fieldErrors.category}</p>
					{/if}
				</div>

				<div class="flex flex-col gap-1">
					<p class="text-body-bold">
						Difficulty <span class="text-error-600" aria-hidden="true">*</span>
					</p>

					<div class="z-0 grid grid-cols-2 gap-4 sm:grid-cols-3">
						{#each difficulties as d (d.name)}
							<label
								class={`relative flex cursor-pointer items-center gap-4 rounded-md border px-3 py-2 text-caption sm:text-body ${difficulty === d.name ? "border-brand-200 bg-brand-50 hover:bg-brand-50" : "border-neutral-border  hover:bg-neutral-50"}`}
							>
								<input
									type="radio"
									name="difficulty"
									value={d.name}
									bind:group={difficulty}
									class="absolute opacity-0"
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

					{#if form?.error?.fieldErrors.difficulty}
						<p class="text-caption text-error-600">{form.error.fieldErrors.difficulty}</p>
					{/if}
				</div>

				<div class="flex flex-col gap-1">
					<input type="hidden" name="resources" value={resources.map((r) => r.value).join(",")} />

					<label for="resource" class="flex flex-col gap-2 text-body-bold">
						<span class="flex gap-0.5">
							Resources <span class="text-error-600" aria-hidden="true">*</span>
						</span>

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

						{#if form?.error?.fieldErrors.resources}
							<p class="text-caption text-error-600">{form.error.fieldErrors.resources}</p>
						{/if}

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

				<!-- <div class="mb-10 space-y-2">
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
								class="flex w-fit cursor-pointer items-center gap-2 rounded-md border border-neutral-border py-1.5 pr-3 pl-2 text-caption-bold hover:bg-neutral-50 active:bg-white sm:text-body-bold"
								><Upload size="16px" /> Upload
								<input type="file" class="hidden" id="profile" name="profile" required /></label
							>

							<p class="text-caption text-subtext-color">
								For best results, upload a square image 512x512 or larger
							</p>
						</div>
					</div>
				</div> -->

				<div class="flex flex-col gap-1">
					<label for="name" class="flex flex-col gap-1 text-body-bold">
						<span class="flex gap-0.5">
							Publisher Name <span class="text-error-600" aria-hidden="true">*</span>
						</span>

						<input
							type="text"
							id="name"
							name="name"
							value={form?.data?.["name"]}
							placeholder="Enter name"
							class="rounded-md border border-neutral-border px-2 py-1.5 placeholder:text-caption"
							required
						/>
					</label>

					{#if form?.error?.fieldErrors.name}
						<p class="text-caption text-error-600">{form.error.fieldErrors.name}</p>
					{/if}
				</div>

				<div class="flex flex-col gap-1">
					<label for="twitter" class="flex flex-col gap-1 text-body-bold"
						>Twitter

						<input
							type="url"
							id="twitter"
							name="twitter"
							value={form?.data?.["twitter"]}
							placeholder="Enter twitter URL"
							class="rounded-md border border-neutral-border px-2 py-1.5 placeholder:text-caption"
						/>
					</label>

					{#if form?.error?.fieldErrors.twitter}
						<p class="text-caption text-error-600">{form.error.fieldErrors.twitter}</p>
					{/if}
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
