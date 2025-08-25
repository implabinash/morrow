<script lang="ts">
	import { generalFAQs } from "$lib/utils/faqs";

	import Wrapper from "$lib/components/Wrapper.svelte";
	import Seo from "$lib/components/Seo.svelte";
</script>

<Seo title="FAQs" />

<main class="py-20 sm:py-24">
	<Wrapper class="space-y-10">
		<section class="space-y-5">
			<img src="/images/icons/faqs.webp" alt="FAQs" class="size-16" />

			<h1 class="text-4xl font-semibold">FAQs</h1>
		</section>

		<section class="space-y-5">
			<div
				class="flex h-60 w-full flex-col items-center justify-center gap-4 rounded-md bg-[url('/images/placeholders/1.webp')] bg-cover sm:h-96"
			>
				<img src="/images/logo/logo.svg" alt="Morrow" class="size-40 sm:size-72" />
			</div>

			<p>
				At Morrow, we want to make sharing and exploring ideas as smooth as possible. Whether it’s a
				real product idea, a useful tool, or a roadmap to guide your learning, everything you find
				here is curated with care. To keep the platform valuable and trustworthy, we review every
				submission before it goes live, so you can expect quality content you can rely on.
			</p>
		</section>

		<section class="space-y-7">
			<h2 class="text-2xl font-semibold">Frequently Asked Questions</h2>

			<div class="space-y-5">
				{#each generalFAQs as f (f.q)}
					<div class="space-y-2">
						<p class="font-semibold">{f.q}</p>

						<p class="text-subtext-color">
							{#each f.a as part (part)}
								{#if typeof part === "string"}
									{part}
								{:else}
									<a href={part.link} class="text-brand-600 hover:underline">{part.text}</a>
								{/if}
							{/each}
						</p>
					</div>
				{/each}
			</div>

			<p>
				If you have any other questions or need help, feel free to reach out to us anytime at <a
					href="mailto:implabinash@gmail.com"
					target="_blank"
					class="text-brand-600 hover:underline">implabinash@gmail.com</a
				>
				or connect with us on
				<a href="https://x.com/implabinash" target="_blank" class="text-brand-600 hover:underline"
					>Twitter</a
				>.
			</p>

			<p>We’re always happy to hear from you.</p>
		</section>
	</Wrapper>
</main>
