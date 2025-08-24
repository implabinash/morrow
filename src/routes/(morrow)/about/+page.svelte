<script lang="ts">
	import Wrapper from "$lib/components/Wrapper.svelte";
	import Seo from "$lib/components/Seo.svelte";
</script>

<Seo title="About Us" />

<main class="py-20 sm:py-24">
	<Wrapper class="space-y-10">
		<section class="space-y-5">
			<img src="/images/icons/about.webp" alt="About Us" class="size-16" />

			<h1 class="text-4xl font-semibold">About Us</h1>
		</section>

		<section class="space-y-5">
			<div
				class="flex h-60 w-full flex-col items-center justify-center gap-4 rounded-md bg-[url('/images/placeholders/1.webp')] bg-cover sm:h-96"
			>
				<img src="/images/logo/logo.svg" alt="Morrow" class="size-40 sm:size-72" />
			</div>

			<p>
				Morrow is a community-driven platform built to make learning, sharing, and discovering
				knowledge easier. It started as a small indie project with one simple idea: valuable hints,
				tools, and roadmaps shouldn’t be scattered across the internet; they should live in one
				open, accessible space for everyone.
			</p>

			<p>
				Morrow isn’t run like a big company. It’s built and managed independently, with the
				community at its heart. The goal is not just to build a website, but to create a home where
				developers, learners, and curious minds can connect, share, and grow together.
			</p>
		</section>

		<section class="space-y-5">
			<h2 class="text-2xl font-semibold">Our Mission</h2>

			<p>
				Our mission is to make knowledge-sharing simple, open, and useful for everyone. We believe
				learning should be less overwhelming and more approachable.
			</p>

			<p>
				We focus on openness, collaboration, and growth. We value community over competition,
				clarity over complexity, and people over profit. Everything we build is guided by one
				principle: making tomorrow easier to navigate than today.
			</p>
		</section>

		<section class="space-y-5">
			<h2 class="text-2xl font-semibold">What We’re Building</h2>

			<p>Morrow is built around features that bring real value to the community:</p>

			<ul class="list-inside list-disc space-y-3 pl-6">
				<li>
					<strong>Hints</strong> let you share real product ideas or explore others that can spark new
					projects and save time.
				</li>

				<li>
					<strong>Tools</strong> will soon help you discover and contribute libraries, SDKs, and frameworks
					that make building those ideas easier.
				</li>

				<li>
					<strong>Roadmaps</strong>, coming in the next release, will guide you step by step through
					development topics so you never feel lost.
				</li>
			</ul>

			<p>
				Each feature is designed to remove confusion, bring clarity, and make the process of
				learning and building more rewarding.
			</p>
		</section>

		<section class="space-y-5">
			<h2 class="text-2xl font-semibold">Why It Matters</h2>

			<p>
				Morrow exists because knowledge is more powerful when shared. By creating a simple, trusted
				place for hints, tools, and roadmaps, we reduce noise, save time, and help each other grow.
				What might feel like a small idea today could make a big difference tomorrow.
			</p>
		</section>

		<section class="space-y-5">
			<h2 class="text-2xl font-semibold">Looking Ahead</h2>

			<p>
				Morrow is still in its early days, but it’s fueled by passion and the support of its
				community. Every shared hint, every new tool, and every roadmap shapes the future of this
				platform.
			</p>

			<p>
				We’re just getting started, but together, we can make tomorrow better, one step at a time.
			</p>
		</section>
	</Wrapper>
</main>
