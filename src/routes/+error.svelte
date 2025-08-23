<script lang="ts">
	import { page } from "$app/state";

	import Wrapper from "$lib/components/Wrapper.svelte";
</script>

<main class="py-20 sm:py-24">
	<Wrapper>
		{page.status}: {page.error?.message}
	</Wrapper>
</main>
