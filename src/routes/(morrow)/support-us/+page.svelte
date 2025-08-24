<script lang="ts">
	import { ApiPromise, WsProvider } from "@polkadot/api";

	import { onMount } from "svelte";

	import { connectAndSendDot } from "$lib/utils/wallet";
	import { supports } from "$lib/utils/support";

	import Seo from "$lib/components/Seo.svelte";
	import Wrapper from "$lib/components/Wrapper.svelte";

	const TO_ADDRESS = "14g8BwU9erExNomJUDjRq4SZxRDoNYZ3kG7FEfdJipyURKiB";
	const POLKADOT = "wss://polkadot.dotters.network";

	let isLoading = $state(false);
	let loadingAmount = $state<number | null>(null);

	let error = $state("");
	let message = $state("");

	let api: ApiPromise | undefined = $state();

	$effect(() => {
		console.log("message: ", message);
		console.log("error: ", error);
	});

	onMount(() => {
		(async () => {
			const wsProvider = new WsProvider(POLKADOT);
			api = await ApiPromise.create({ provider: wsProvider });
		})();
	});

	async function handleSendDot(amount: number) {
		if (!api) {
			error = "Polkadot API not ready. Please wait and try again.";
			return;
		}

		try {
			isLoading = true;
			loadingAmount = amount;
			error = "";
			message = "";

			const { result, address, name } = await connectAndSendDot(TO_ADDRESS, amount, api);

			message = `Successfully sent ${amount} DOT from ${name || address}! ${result}`;
		} catch (err) {
			error = err.message || "Transaction failed";
		} finally {
			isLoading = false;
			loadingAmount = null;
		}
	}
</script>

<Seo title="Support Us" />

<main class="py-20 sm:py-24">
	<Wrapper class="space-y-10">
		<section class="space-y-5">
			<img src="/images/icons/support.webp" alt="Support Us" class="size-16" />

			<h1 class="text-4xl font-semibold">Support Us</h1>
		</section>

		<section class="space-y-5">
			<div
				class="flex h-60 w-full flex-col items-center justify-center gap-4 rounded-md bg-[url('/images/placeholders/1.webp')] bg-cover sm:h-96"
			>
				<img src="/images/logo/logo.svg" alt="Morrow" class="size-40 sm:size-72" />
			</div>

			<p>
				<strong>Morrow is a home for builders on Polkadot.</strong> It started as a small idea: a place
				where anyone can share hints, discover useful tools, and follow roadmaps to bring new projects
				to life.
			</p>

			<p>
				I’m building this solo, as an indie developer, because I believe Polkadot needs more open,
				community-driven resources. Morrow is meant to be that little spark, a hint from tomorrow
				that helps founders, hackers, and dreamers turn ideas into reality.
			</p>

			<p>Your support keeps this alive, growing, and free for everyone.</p>
		</section>

		<section class="space-y-5">
			<div class="space-y-2">
				<h2 class="text-2xl font-semibold">Help Us Grow</h2>

				<p class="text-body text-subtext-color">Support specific aspects of our development</p>
			</div>

			<div class="space-y-4">
				{#each supports as s (s.title)}
					<div
						class="flex items-center justify-between rounded-md border border-neutral-border p-4"
					>
						<div class="space-y-1">
							<p class="text-body font-medium">{s.title}</p>

							<p class="text-caption text-subtext-color">{s.subtitle}</p>
						</div>

						<button
							class="h-fit cursor-pointer rounded-md bg-brand-600 px-3 py-1.5 text-body-bold text-white hover:bg-brand-500 active:bg-brand-600"
							onclick={() => handleSendDot(s.amount)}
							>{#if isLoading && loadingAmount === s.amount}
								Sending...
							{:else}
								{s.amount} DOT
							{/if}</button
						>
					</div>
				{/each}
			</div>
		</section>

		{#if message}
			<div class="space-y-2 rounded-md border border-green-200 bg-green-50 p-4 text-body">
				<p class="text-green-800">{message}</p>

				<p class="text-green-800">
					Thank you for believing in our mission to make building on Polkadot easier for everyone!
				</p>
			</div>
		{/if}

		{#if error}
			<div class="rounded-md border border-red-200 bg-red-50 p-4">
				<p class="text-red-800">{error}</p>
			</div>
		{/if}

		<section class="space-y-5">
			<div class="space-y-2">
				<h2 class="text-2xl font-semibold">General Support</h2>

				<p class="text-body text-subtext-color">Support specific aspects of our development</p>
			</div>

			<div class="space-y-3 space-x-3 sm:space-y-0">
				{#each [3, 20, 50, 100] as a (a)}
					<button
						class="h-fit cursor-pointer rounded-md bg-brand-50 px-3 py-1.5 text-body-bold text-brand-700 hover:bg-brand-100 active:bg-brand-50"
						onclick={() => handleSendDot(a)}
						>{#if isLoading && loadingAmount === a}
							Sending...
						{:else}
							{a} DOT
						{/if}</button
					>
				{/each}
			</div>
		</section>
	</Wrapper>
</main>
