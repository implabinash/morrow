<script lang="ts">
	import { House } from "@lucide/svelte";

	import { page } from "$app/state";

	import Wrapper from "$lib/components/Wrapper.svelte";
</script>

<main class="py-20 sm:py-24">
	<Wrapper class="flex flex-col items-center justify-center gap-8">
		<section class="mb-0 flex flex-col items-center justify-center gap-6">
			<img src="/images/icons/error.webp" alt="Something went wrong!" class="size-24" />

			<div class="text-heading-1 text-error-600">{page.status}</div>

			<div class="flex flex-col items-center justify-center space-y-2 text-center">
				<p class="text-heading-2">
					{page.error?.message}
				</p>

				<p class="w-[80%] text-body sm:w-full">
					The page you are looking for doesn't exist or has been moved.
				</p>
			</div>
		</section>

		<a
			href="/"
			class="flex cursor-pointer items-center gap-2 rounded-md bg-brand-600 px-4 py-2 text-body-bold text-white hover:bg-brand-500 active:bg-brand-600"
			><House size="16px" /> Return Home</a
		>

		<!-- <section class="space-y-4 rounded-md border border-neutral-border bg-neutral-50 p-6">
			<p class="text-body">Quick Navigation</p>

			<div></div>
		</section> -->
	</Wrapper>
</main>
