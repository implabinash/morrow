<script lang="ts">
	import Seo from "$lib/components/Seo.svelte";
	import Wrapper from "$lib/components/Wrapper.svelte";
</script>

<Seo title="Get Started" />

<main class="py-20 sm:py-24">
	<Wrapper class="space-y-10">
		<section class="space-y-5">
			<img src="/images/icons/star.webp" alt="Get Started" class="size-16" />

			<h1 class="text-4xl font-semibold">Get Started</h1>
		</section>

		<section class="space-y-5">
			<div
				class="flex h-60 w-full flex-col items-center justify-center gap-4 rounded-md bg-[url('/images/placeholders/1.webp')] bg-cover sm:h-96"
			>
				<img src="/images/logo/logo.svg" alt="Morrow" class="size-40 sm:size-72" />
			</div>

			<p>
				Morrow is a home for builders and dreamers in the Polkadot ecosystem. It was created to make
				it easier for founders, developers, and contributors to find inspiration, discover
				resources, and turn ideas into real projects. Instead of starting from scratch or feeling
				lost, Morrow gives you a place to begin with clarity, direction, and a community-driven
				spirit.
			</p>
		</section>

		<section class="space-y-5">
			<h2 class="text-2xl font-semibold">Explore Hints</h2>

			<div
				class="flex h-60 w-full items-center justify-center rounded-md bg-[url('/images/placeholders/4.webp')] bg-cover sm:h-96"
			>
				<img
					src="/images/dummy/1.webp"
					alt="Explore Hints"
					class="max-h-52 rounded-md sm:max-h-80"
				/>
			</div>

			<p>
				The first step is exploring Hints. Hints are bite-sized ideas, insights, or project concepts
				that anyone can share. You can browse through existing hints to spark your imagination, or
				add your own to inspire others. Whether it’s a new product idea, a missing tool, or just an
				experiment worth trying, hints are the foundation of Morrow.
			</p>
		</section>

		<section class="space-y-5">
			<h2 class="flex gap-1 text-2xl font-semibold">
				Discover Tools <div class="text-caption-bold text-success-500">Coming</div>
			</h2>

			<div
				class="flex h-60 w-full flex-col items-center justify-center gap-4 rounded-md bg-[url('/images/placeholders/3.webp')] bg-cover sm:h-96"
			>
				<img src="/images/icons/soon.webp" alt="Comming soon" class="size-40 sm:size-72" />
			</div>

			<p>
				Next, you’ll soon be able to discover Tools. This section will showcase libraries,
				frameworks, and utilities that make building on Polkadot faster and easier. You’ll be able
				to share your own favorite tools with the community and explore what others are using. This
				feature is coming in the next release, and we can’t wait to make it available.
			</p>
		</section>

		<section class="space-y-5">
			<h2 class="flex gap-1 text-2xl font-semibold">
				Roadmaps <div class="text-caption-bold text-success-500">Coming</div>
			</h2>

			<div
				class="flex h-60 w-full flex-col items-center justify-center gap-4 rounded-md bg-[url('/images/placeholders/5.webp')] bg-cover sm:h-96"
			>
				<img src="/images/icons/soon.webp" alt="Comming soon" class="size-40 sm:size-72" />
			</div>

			<p>
				Finally, Morrow will also bring you Roadmaps. Roadmaps are structured guides to help
				builders take an idea and turn it into a finished product. From technical steps to community
				growth strategies, roadmaps will make the journey less overwhelming and more achievable.
				This is another feature coming soon, designed to help both new and experienced builders find
				their way forward.
			</p>

			<p>
				Morrow is just getting started, and so are you. Explore, share, and be part of shaping the
				future of building on Polkadot. Together, small hints today can grow into tomorrow’s
				breakthroughs.
			</p>
		</section>
	</Wrapper>
</main>
