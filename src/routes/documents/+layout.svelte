<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import '../../lib/document.css';

	let { data, children } = $props();
	const { title, excerpt } = data;

	onMount(() => {
		const iconLink = document.querySelectorAll('.icon-link');

		iconLink.forEach((item) => {
			item.innerHTML = '#';
		});
	});
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<title>{title} - 프라이드 번역가</title>
	<meta name="theme-color" content="#959595" />
	<meta name="description" content={excerpt ?? 'LGBTQIA+ 관련 자료를 한국어로 번역하는 사람들.'} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="{title} - 프라이드 번역가" />
	<meta
		property="og:description"
		content={excerpt ?? 'LGBTQIA+ 관련 자료를 한국어로 번역하는 사람들.'}
	/>
	<meta property="og:image" content="{base}/thumbnail.png" />
	<meta property="og:url" content="https://pride-translators.com" />

	<meta name="twitter:title" content="{title} - 프라이드 번역가" />
	<meta
		name="twitter:description"
		content={excerpt ?? 'LGBTQIA+ 관련 자료를 한국어로 번역하는 사람들.'}
	/>
	<meta name="twitter:image" content="{base}/thumbnail.png" />
	<meta name="twitter:card" content="summary" />

	<link rel="apple-touch-icon" href="{base}/logo512.png" />
</svelte:head>

<div class="center">
	<div class="wrapper">
		<div class="button-section">
			<a href="{base}/" class="go-home no-decoration">
				<div class="icon">🏳️‍🌈</div>
				<p>홈으로</p>
			</a>
		</div>

		<div>
			{@render children()}
		</div>
	</div>
</div>

<style lang="scss">
	.center {
		display: flex;
		flex-direction: column;

		@media only screen and (min-width: 800px) {
			align-items: center;
		}
	}

	.wrapper {
		max-width: 800px;
		padding: 5px 20px;
		padding-bottom: 20px;

		.button-section {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;

			.go-home {
				gap: 8px;
				display: flex;
				flex-direction: row;
				align-items: center;
				color: var(--text-color);

				.icon {
					font-size: 35px;
					transition: transform 0.15s ease-in-out;
				}

				&:hover {
					.icon {
						transform: scale(1.12);
					}
				}
			}
		}
	}
</style>
