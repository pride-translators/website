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

<svelte:head>
	<title>프라이드 번역가 - {title}</title>
	<meta name="description" content={excerpt ?? 'LGBTQIA+ 관련 자료를 한국어로 번역하는 사람들.'} />

	<meta property="og:title" content="프라이드 번역가 - {title}" />
	<meta
		property="og:description"
		content={excerpt ?? 'LGBTQIA+ 관련 자료를 한국어로 번역하는 사람들.'}
	/>
	<meta name="twitter:title" content="프라이드 번역가 - {title}" />
	<meta
		name="twitter:description"
		content={excerpt ?? 'LGBTQIA+ 관련 자료를 한국어로 번역하는 사람들.'}
	/>
</svelte:head>

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
