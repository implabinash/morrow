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

<Seo title="Get Started" />

<main class="py-20 sm:py-24">
	<Wrapper class="space-y-10">
		<section class="space-y-5">
			<img src="/images/icons/support.webp" alt="Get Started" class="size-12" />

			<h1 class="text-4xl font-semibold">Support Us</h1>
		</section>

		<section class="space-y-5">
			<div
				class="flex h-60 w-full flex-col items-center justify-center gap-4 rounded-md bg-[url('/images/placeholders/0.webp')] bg-cover sm:h-96"
			>
				<p class="text-7xl font-black text-white sm:text-9xl">Morrow</p>
			</div>

			<p>
				This is an example page. Framer is an interactive design tool for websites and prototyping.
				It excels at building landing pages, marketing sites, online campaigns, and much more. It
				supports you in every part of the design process, from creating mockups to interactive
				prototypes, but its unique strength is the ability to publish directly from a freeform
				canvas. It’s incredibly fast, expressive, and free to try.
			</p>
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
			<div class="rounded-md border border-green-200 bg-green-50 p-4">
				<p class="text-green-800">{message}</p>
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
				{#each [2, 5, 20, 50] as a (a)}
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

		<section class="space-y-5">
			<h2 class="text-2xl font-semibold">Why Support Morrow?</h2>

			<img
				src="/images/placeholders/1.webp"
				alt="add"
				class="max-h-60 w-full rounded-md sm:max-h-96"
			/>

			<p>
				This is an example page. Framer is an interactive design tool for websites and prototyping.
				It excels at building landing pages, marketing sites, online campaigns, and much more. It
				supports you in every part of the design process, from creating mockups to interactive
				prototypes, but its unique strength is the ability to publish directly from a freeform
				canvas. It’s incredibly fast, expressive, and free to try.
			</p>
		</section>
	</Wrapper>
</main>
