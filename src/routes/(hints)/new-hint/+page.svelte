<script lang="ts">
	import { Upload } from "@lucide/svelte";

	import { difficulties, type Difficulties } from "$lib/utils/difficulty";

	let difficulty: Difficulties = $state("");
</script>

<main class="mx-auto max-w-170 space-y-12 px-10 py-36">
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
						class="rounded-md border border-neutral-border px-2 py-1 placeholder:text-caption"
						required
					/>
				</label>

				<p class="text-caption text-subtext-color">Give your hint a clear, descriptive title</p>
			</div>

			<div class="flex flex-col gap-1">
				<label for="description" class="flex flex-col gap-1 text-body-bold"
					>Description

					<textarea
						id="description"
						name="description"
						placeholder="Enter description"
						class="min-h-24 rounded-md border border-neutral-border px-2 py-1 placeholder:text-caption"
						required
					></textarea>
				</label>

				<p class="text-caption text-subtext-color">Describe your idea in detail</p>
			</div>

			<div class="flex flex-col gap-1">
				<label for="category" class="text-body-bold">Category</label>

				<input
					type="text"
					id="category"
					name="category"
					placeholder="Enter title"
					class="rounded-md border border-neutral-border px-2 py-1 placeholder:text-caption"
					required
				/>

				<p class="text-caption text-subtext-color">
					Choose the most relevant category for your hint
				</p>
			</div>

			<div class="flex flex-col gap-1">
				<p class="text-body-bold">Difficulty</p>

				<div class="grid grid-cols-3 gap-4">
					{#each difficulties as d (d.name)}
						<label
							class={`flex cursor-pointer items-center gap-4 rounded-md border  px-3 py-3 text-body-bold ${difficulty === d.name ? "border-brand-200 bg-brand-50 hover:bg-brand-50" : "border-neutral-border  hover:bg-neutral-50"}`}
						>
							<input
								type="radio"
								name="difficulty"
								value={d.name}
								bind:group={difficulty}
								class="hidden"
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
				<label for="title" class="flex flex-col gap-1 text-body-bold"
					>Resources

					<input
						type="text"
						id="title"
						name="title"
						placeholder="Enter resources"
						class="rounded-md border border-neutral-border px-2 py-1 placeholder:text-caption"
						required
					/>

					<button>+</button>
				</label>

				<p class="text-caption text-subtext-color">
					Add links to relevant papers, datasets, or other resources
				</p>
			</div>
		</section>

		<section class="space-y-6">
			<div class="space-y-2">
				<h2 class="text-heading-2">Publisher Information</h2>
				<p class="text-body text-subtext-color">Your profile details will be shown with the hint</p>
			</div>

			<div class="flex flex-col gap-1">
				<label for="name" class="flex flex-col gap-1 text-body-bold"
					>Publisher Name

					<input
						type="text"
						id="name"
						name="name"
						placeholder="Enter name"
						class="rounded-md border border-neutral-border px-2 py-1 placeholder:text-caption"
						required
					/>
				</label>

				<p class="text-caption text-subtext-color">Enter your full name</p>
			</div>

			<div class="space-y-2">
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
							<input type="file" class="hidden" id="profile" name="profile" /></label
						>

						<p class="text-caption text-subtext-color">
							For best results, upload a square image 512x512 or larger
						</p>
					</div>
				</div>
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
</main>
