<script lang="ts">
	import Close from '$lib/icons/Close.svelte';
	import TopicButton from '$lib/TopicButton.svelte';
	import { Category, type FullList, type TranslatedDocument } from '$lib/types';
	import { page } from '$app/stores';
	import { fullList } from '$lib/documentList';
	import { base } from '$app/paths';
	import { browser } from '$app/environment';

	let isDark: boolean = false;
	$: if (browser) {
		const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)').matches;
		isDark = colorSchemeQueryList;
	}
	const closeButtonColor = ['#d0d0d0', '#717171'];

	let selectedOption: Category;
	let list: TranslatedDocument[];
	$: {
		const category = $page.url.searchParams.get('category');

		if (category) {
			switch (category) {
				case Category.Gender: {
					selectedOption = Category.Gender;
					break;
				}
				case Category.Sexuality: {
					selectedOption = Category.Sexuality;
					break;
				}
				case Category.Videos: {
					selectedOption = Category.Videos;
					break;
				}
				case Category.Others: {
					selectedOption = Category.Others;
					break;
				}

				default:
					break;
			}
		} else if (!category) {
			$page.url.searchParams.set('category', 'gender');
			selectedOption = Category.Gender;
		}

		list = fullList[selectedOption as keyof FullList];
	}
</script>

<div class="wrapper">
	<div class="top-bar">
		<div class="flex-right width-100">
			<a href="{base}/"
				><Close height="50px" color={isDark ? closeButtonColor[1] : closeButtonColor[0]} /></a
			>
		</div>

		<div class="topic-boxes">
			<TopicButton
				selected={selectedOption === Category.Gender}
				text="젠더"
				url={`/category?category=gender`}
			/>
			<TopicButton
				selected={selectedOption === Category.Sexuality}
				text="섹슈얼리티"
				url={`/category?category=sexuality`}
			/>
			<TopicButton
				selected={selectedOption === Category.Videos}
				text="영상 번역"
				url={`/category?category=videos`}
			/>
			<TopicButton
				selected={selectedOption === Category.Others}
				text="기타"
				url={`/category?category=others`}
			/>
		</div>
	</div>

	<div class="list">
		{#each list as item}
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

				a {
					color: var(--text-color);
				}
				h4 {
					margin: 12px 0px;
					font-size: 20px;
					font-weight: 600;
					color: var(--text-color);
				}

				p {
					margin: 12px 0px;
					font-size: 14px;
					color: var(--text-color);
				}
			}
		}
	}

	.topic-boxes {
		margin: 15px 0px 0px 0px;
		@media only screen and (min-width: 591px) {
			display: flex;
			flex-direction: row;
			justify-content: center;
			column-gap: 10px;
			width: 98vw;
		}
		@media only screen and (max-width: 590px) {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			row-gap: 10px;
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
