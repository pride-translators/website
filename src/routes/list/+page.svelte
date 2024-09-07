<script lang="ts">
	import { fullList } from '$lib/documentList';
	import Close from '$lib/icons/Close.svelte';
	import type { FullList, TranslatedDocument } from '$lib/types';

	const newList: TranslatedDocument[] = [];
	for (const key of Object.keys(fullList)) {
		for (const item of fullList[key as keyof FullList]) {
			newList.push(item);
		}
	}
</script>

<div class="wrapper">
	<div class="top-bar">
		<a href="/" class="flex-right width-100"><div class=""><Close height="50px" /></div></a>
	</div>

	<div class="list">
		{#each newList as item}
			<div class="list-item">
				<a href={item.titleURL}>
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
		margin-bottom: 50px;

		@media only screen and (max-width: 590px) {
			justify-content: stretch;
		}

		.top-bar {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;

			margin-bottom: 30px;

			@media only screen and (min-width: 591px) {
				max-width: 700px;
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
				max-width: 650px;
			}
			@media only screen and (max-width: 590px) {
				justify-content: stretch;
			}

			.list-item {
				width: 100%;
				padding: 10px 30px;

				background-color: #efefef;
				border-radius: 40px;
				box-sizing: border-box;
				transition: all 0.15s ease-in-out;

				h4 {
					margin: 12px 0px;
					font-size: 20px;
					font-weight: 600;
					color: black;
				}

				p {
					margin: 12px 0px;
					font-size: 14px;
					color: black;
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
