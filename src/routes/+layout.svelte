<script lang="ts">
	import { base } from '$app/paths';
	let { children } = $props();
</script>

<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-DLGKJF181X"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-DLGKJF181X');
	</script>
</svelte:head>

{@render children()}
