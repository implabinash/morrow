<script lang="ts">
	import Seo from "$lib/components/Seo.svelte";
	import Wrapper from "$lib/components/Wrapper.svelte";
	import { faqs } from "$lib/utils/faqs";
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
				This is an example page. Framer is an interactive design tool for websites and prototyping.
				It excels at building landing pages, marketing sites, online campaigns, and much more. It
				supports you in every part of the design process, from creating mockups to interactive
				prototypes, but its unique strength is the ability to publish directly from a freeform
				canvas. It’s incredibly fast, expressive, and free to try.
			</p>
		</section>

		<section class="space-y-7">
			<h2 class="text-2xl font-semibold">Frequently Asked Questions</h2>

			<div class="space-y-5">
				{#each faqs as f (f.q)}
					<div class="space-y-2">
						<p class="font-semibold">{f.q}</p>

						<p class="text-subtext-color">
							{f.a}
						</p>
					</div>
				{/each}
			</div>
		</section>
	</Wrapper>
</main>
