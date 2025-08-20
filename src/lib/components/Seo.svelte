<script lang="ts">
	type SeoProps = {
		title: string;
		description?: string;
		ogTitle?: string;
		ogDescription?: string;
		twitterTitle?: string;
		twitterDescription?: string;
	};

	let {
		title,
		description = "Morrow is a community-driven hub for builders in the Polkadot ecosystem. Discover hints, tools, and roadmaps to bring your ideas to life.",

		ogTitle = "Morrow - A Hint from Tomorrow",
		ogDescription = "Morrow helps builders and founders in the Polkadot ecosystem. Explore hints, curated tools, and guided roadmaps to bring ideas to life.",

		twitterTitle = "Morrow - A Hint from Tomorrow",
		twitterDescription = "Discover, share, and explore hints, tools, and roadmaps for building on Polkadot. Morrow is your launchpad for Web3 ideas and innovation."
	}: SeoProps = $props();
</script>

<svelte:head>
	<title>{title} | Morrow</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="Morrow, Polkadot builders, Web3 ideas, Polkadot tools, Polkadot roadmaps, Web3 development, hints for builders, blockchain startup ideas"
	/>

	<meta property="og:title" content={ogTitle} />
	<meta property="og:description" content={ogDescription} />
	<!-- <meta property="og:image" content="https://morrow.xyz/og-image.png" /> -->
	<!-- <meta property="og:url" content="https://morrow.xyz" /> -->

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={twitterTitle} />
	<meta name="twitter:description" content={twitterDescription} />
	<!-- <meta name="twitter:image" content="https://morrow.xyz/twitter-card.png" /> -->
</svelte:head>
