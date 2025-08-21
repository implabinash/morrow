<script lang="ts">
	import { Link, Share2, Twitter, BadgeCheck, Clock, ArrowLeft } from "@lucide/svelte";

	import type { PageData } from "./$types";

	import { difficulties } from "$lib/utils/difficulty";
	import { categories } from "$lib/utils/categories";

	import Seo from "$lib/components/Seo.svelte";
	import Wrapper from "$lib/components/Wrapper.svelte";
	import Badge from "$lib/components/Badge.svelte";
	import Card from "$lib/components/Card.svelte";

	let { data }: { data: PageData } = $props();

	const shareHint = async () => {
		const shareData = {
			title: data.hint.title,
			text: data.hint.description,
			url: window.location.href
		};

		if (navigator.share) {
			try {
				await navigator.share(shareData);
			} catch (err) {
				console.error("Error sharing:", err);
			}
		} else {
			await navigator.clipboard.writeText(shareData.url);
			alert("Link copied to clipboard!");
		}
	};
</script>

<Seo title={data.hint.title} />

<main class="py-20 sm:py-24">
	<Wrapper class="space-y-12">
		<section class="space-y-8">
			<a
				href="/hints"
				class="flex w-fit items-center gap-1 rounded-md border border-neutral-border py-2 pr-4 pl-3 text-caption-bold hover:bg-neutral-100 active:bg-white sm:text-body-bold"
				><ArrowLeft size="16px" /> Back</a
			>

			<img
				src="/images/placeholders/1.webp"
				alt={data.hint.title}
				class="max-h-60 w-full rounded-md sm:max-h-96"
			/>

			<div class="space-y-6">
				<div class="flex justify-between gap-4">
					<h1 class="text-heading-2 sm:text-heading-1">{data.hint.title}</h1>

					<button
						class="flex h-fit cursor-pointer items-center gap-2 rounded-md bg-brand-600 py-2 pr-4 pl-3 text-body-bold text-white hover:bg-brand-500 active:bg-brand-600"
						onclick={shareHint}><Share2 size="16px" /> Share</button
					>
				</div>

				<div class="flex items-center gap-4">
					<img
						src="/images/placeholders/1.webp"
						alt="publisher name"
						class="size-12 rounded-full"
					/>

					<div class="space-y-1">
						<p class="text-body-bold">{data.hint.publisherName}</p>

						{#if data.hint.publisherTwitter}
							<a
								href={data.hint.publisherTwitter}
								target="_blank"
								class="flex items-center gap-1 text-caption-bold text-brand-600 hover:underline"
								><Twitter size="14px" /> @{data.hint.publisherTwitter.split("/").at(-1)}</a
							>
						{/if}
					</div>
				</div>
			</div>
		</section>

		<section class="space-y-8">
			<div class="space-y-4">
				<h2 class="text-heading-3 sm:text-heading-2">Description</h2>

				<div class="space-y-4 text-body">
					{data.hint.description}
				</div>
			</div>

			<div class="space-y-4">
				<h2 class="text-heading-3 sm:text-heading-2">Resources</h2>

				<div class="space-y-2">
					{#each data.hint.resources.split(",") as resource (resource)}
						<a
							href={resource}
							class="flex items-start gap-1 text-body text-blue-600 hover:underline"
							><Link size="14px" class="text-default-font" />{resource}</a
						>
					{/each}
				</div>
			</div>
		</section>

		<section class="grid grid-cols-3 gap-4">
			<div class="space-y-2">
				<p class="text-caption-bold text-subtext-color">DIFFICULTY</p>
				<Badge
					type={data.hint.difficulty === "easy"
						? "success"
						: data.hint.difficulty === "medium"
							? "warning"
							: "error"}
					text={data.hint.difficulty.toString().charAt(0).toUpperCase() +
						data.hint.difficulty.toString().slice(1)}
					leftIcon={difficulties.find((d) => d.name === data.hint.difficulty)?.icon}
				/>
			</div>

			<div class="space-y-2">
				<p class="text-caption-bold text-subtext-color">CATEGORY</p>
				<Badge
					type="default"
					text={categories.find((c) => c.id === data.hint.category)?.name ?? ""}
					leftIcon={categories.find((c) => c.id === data.hint.category)?.icon}
				/>
			</div>

			<div class="space-y-2">
				<p class="text-caption-bold text-subtext-color">STATUS</p>

				<Badge
					text={data.hint.isApproved ? "Approved" : "Pending"}
					type={data.hint.isApproved ? "success" : "error"}
					leftIcon={data.hint.isApproved ? BadgeCheck : Clock}
				/>
			</div>
		</section>

		<section class="space-y-6">
			<h2 class="text-heading-3 sm:text-heading-2">Related Hints</h2>

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
				{#if data.relatedHint.length !== 0}
					{#each data.relatedHint as relatedHint (relatedHint.id)}
						<Card
							name={relatedHint.publisherName}
							image="1"
							thumbnail="1"
							difficulty={relatedHint.difficulty}
							category={relatedHint.category}
							title={relatedHint.title}
							description={relatedHint.description}
							href={`/hints/${relatedHint.id}`}
						/>
					{/each}
				{:else}
					<p class="text-body">No more hints</p>
				{/if}
			</div>
		</section>
	</Wrapper>
</main>
