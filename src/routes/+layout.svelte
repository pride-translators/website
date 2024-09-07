<script lang="ts">
	import { base } from '$app/paths';
</script>

<slot />

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<title>프라이드 번역가</title>
	<meta name="theme-color" content="#FFFFFF" />
	<meta name="description" content="LGBTQIA+ 관련 자료를 한국어로 번역하는 사람들." />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="프라이드 번역가" />
	<meta property="og:description" content="LGBTQIA+ 관련 자료를 한국어로 번역하는 사람들." />
	<meta property="og:image" content="{base}/logo512.png" />
	<meta property="og:url" content="TODO:" />

	<meta name="twitter:title" content="프라이드 번역가" />
	<meta name="twitter:description" content="LGBTQIA+ 관련 자료를 한국어로 번역하는 사람들." />
	<meta name="twitter:title" content="{base}/logo512.png" />
	<meta name="twitter:card" content="summary_large_image" />

	<link rel="apple-touch-icon" href="{base}/logo512.png" />
</svelte:head>
