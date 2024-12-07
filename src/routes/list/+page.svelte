<script lang="ts">
	import { fullList } from '$lib/documentList';
	import Close from '$lib/icons/Close.svelte';
	import type { FullList, TranslatedDocument } from '$lib/types';
	import { base } from '$app/paths';

	const newList: TranslatedDocument[] = $state([]);
	for (const key of Object.keys(fullList)) {
		for (const item of fullList[key as keyof FullList]) {
			newList.push(item);
		}
	}
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<title>프라이드 번역가 - 목록</title>
	<meta name="theme-color" content="#959595" />
	<meta name="description" content="LGBTQIA+ 관련 자료를 한국어로 번역하는 사람들." />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="프라이드 번역가" />
	<meta property="og:description" content="LGBTQIA+ 관련 자료를 한국어로 번역하는 사람들." />
	<meta property="og:image" content="{base}/thumbnail.png" />
	<meta property="og:url" content="https://pride-translators.github.io/website" />

	<meta name="twitter:title" content="프라이드 번역가" />
	<meta name="twitter:description" content="LGBTQIA+ 관련 자료를 한국어로 번역하는 사람들." />
	<meta name="twitter:image" content="{base}/thumbnail.png" />
	<meta name="twitter:card" content="summary" />

	<link rel="apple-touch-icon" href="{base}/logo512.png" />
</svelte:head>

<div class="wrapper">
	<div class="top-bar">
		<div class="flex-right width-100">
			<a href="{base}/"><Close height="50px" /></a>
		</div>
	</div>

	<div class="list">
		{#each newList as item}
			<div class="list-item">
				<a href="{base}{item.titleURL}">
					<h4>{item.title}</h4>
				</a>
				<a href={item.sourceURL}>
					<p>{item.source}</p>
				</a>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 30px;
		padding: 0px 10px;

		@media only screen and (max-width: 590px) {
			justify-content: stretch;
		}

		.top-bar {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;

			margin-bottom: 30px;
			margin-top: 10px;

			@media only screen and (min-width: 591px) {
				max-width: 590px;
			}
			@media only screen and (max-width: 590px) {
				width: 100%;
				flex-direction: column;
				align-items: stretch;
			}
		}

		.list {
			display: flex;
			flex-direction: column;
			align-items: center;

			width: 100%;
			row-gap: 20px;

			@media only screen and (min-width: 591px) {
				max-width: 545px;
			}
			@media only screen and (max-width: 590px) {
				justify-content: stretch;
			}

			.list-item {
				width: 100%;
				padding: 10px 30px;

				background-color: var(--box-color);
				border-radius: 40px;
				box-sizing: border-box;
				transition: all 0.15s ease-in-out;

				h4 {
					margin: 12px 0px;
					font-size: 20px;
					font-weight: 600;
					color: var(--text-color);
					text-decoration-color: currentColor;
				}

				p {
					margin: 12px 0px;
					font-size: 14px;
					color: var(--text-color);
					text-decoration-color: currentColor;
				}
			}
		}
	}

	.width-100 {
		width: 100%;
	}
	.flex-right {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
</style>
