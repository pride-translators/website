<script lang="ts">
	import { base } from '$app/paths';
	import TopicButton from '$lib/TopicButton.svelte';
	import Github from '../lib/icons/Github.svelte';

	const isJsEnabled = typeof window !== 'undefined';
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<title>프라이드 번역가 - 홈</title>
	<meta name="theme-color" content="#959595" />
	<meta name="description" content="LGBTQIA+ 관련 자료를 한국어로 번역하는 사람들." />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="프라이드 번역가" />
	<meta property="og:description" content="LGBTQIA+ 관련 자료를 한국어로 번역하는 사람들." />
	<meta property="og:image" content="{base}/thumbnail.png" />
	<meta property="og:url" content="https://pride-translators.com" />

	<meta name="twitter:title" content="프라이드 번역가" />
	<meta name="twitter:description" content="LGBTQIA+ 관련 자료를 한국어로 번역하는 사람들." />
	<meta name="twitter:image" content="{base}/thumbnail.png" />
	<meta name="twitter:card" content="summary" />

	<link rel="apple-touch-icon" href="{base}/logo512.png" />
</svelte:head>

<div class="top">
	<div class="title-section-1 max-width-690">
		<h2 class="icon">
			<img class="logo" src="{base}/logo512-transparent.png" alt="프라이드 번역가 로고" />
		</h2>
		<div class="headings">
			<h2>저희는</h2>
			<h2><b>프라이드 번역가</b>입니다.</h2>
		</div>
		<p>
			많은 LGBTQIA+인 사람들이 본인의 정체성만으로 차별을 받습니다. 게다가 이러한 주제로는 한국어
			번역이 많이 존재하지 않는 것으로 보입니다. 그래서 프라이드 번역가들이 LGBTQIA+와 관련된 유용한
			자료들을 한국어로 번역해보기로 했습니다.
		</p>
	</div>

	<div class="title-section-1 max-width-690">
		<h2 class="icon">🙋‍♀️</h2>
		<div class="headings">
			<h2><b>LGBTQIA+</b></h2>
			<h2>가 무엇인가요?</h2>
		</div>
		<p>
			LGBTQIA+는 레즈비언<sup>(Lesbian)</sup>, 게이<sup>(Gay)</sup>, 양성애자<sup>(Bisexual)</sup>,
			트랜스젠더<sup>(Transgender)</sup>, 퀴어/질문 중 <sup>(Queer/Questioning)</sup>, 간성<sup
				>(Intersex)</sup
			>, 무성애자<sup>(Asexual)</sup> 의 줄임말입니다.
		</p>
	</div>

	<div class="title-section-2">
		{#if isJsEnabled}
			<h4>주제별로 탐색해보세요!</h4>
			<div class="topic-boxes">
				<TopicButton selected={false} text="젠더" url={`/category?category=gender`} />
				<TopicButton selected={false} text="섹슈얼리티" url={`/category?category=sexuality`} />
				<TopicButton selected={false} text="영상 번역" url={`/category?category=videos`} />
				<TopicButton selected={false} text="기타" url={`/category?category=others`} />
			</div>

			<a href="{base}/list" class="link-button">아니면 목록으로 보시겠어요?</a>
		{:else}
			<h4 class="margin-bottom-5px">번역 문서들을 살펴보세요!</h4>
			<a href="{base}/list" class="link-button">목록 보기</a>
		{/if}
	</div>

	<div class="title-section-2 max-width-490">
		<h4>어떻게 프라이드 번역가에 참여할 수 있나요?</h4>
		<p>
			번역 프로젝트들은 Github에서 오픈 소스로 진행됩니다. 누구나 Github에서 이슈를 생성하거나
			수정을 요청할 수 있습니다.
		</p>

		<div class="buttons">
			<a href="https://github.com/pride-translators" class="button padding-top-30"
				><Github height="35px" color="var(--text-color)" /></a
			>
		</div>
	</div>
</div>

<style lang="scss">
	.logo {
		height: 90px;
	}

	.top {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		row-gap: 80px;
		margin-top: 5em;
		margin-bottom: 5em;
	}

	.max-width-690 {
		max-width: 690px;
	}
	.max-width-490 {
		max-width: 490px;
	}

	.title-section-1 {
		padding: 0px 20px;
		text-align: center;

		.icon {
			margin: 0px;
			font-size: 35px;
			margin-top: 5px;
		}

		.headings {
			font-size: 24px;
			display: flex;
			flex-direction: column;
			gap: 0;

			h2 {
				margin: 0;
				font-weight: 400;
			}
		}
	}

	.title-section-2 {
		text-align: center;

		padding: 0px 40px;

		h4 {
			font-size: 20px;
			font-weight: 600;
			margin: 0;
		}
		.margin-bottom-5px {
			margin-bottom: 15px;
		}
		.padding-top-30 {
			margin-top: 30px;
		}
	}

	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		.button {
			width: 35px;
		}
	}

	.link-button {
		color: var(--link-color);
		transition: color 0.15s ease-in-out;
	}

	.button {
		transform: scale(1, 1);
		transition: transform 0.15s ease-in-out;

		&:hover {
			transform: scale(1.15, 1.15);
		}
	}

	.topic-boxes {
		margin: 15px 0px 30px 0px;

		@media only screen and (min-width: 591px) {
			display: flex;
			flex-direction: row;
			justify-content: center;
			column-gap: 10px;
		}
		@media only screen and (max-width: 590px) {
			display: flex;
			flex-direction: column;
			justify-content: center;
			row-gap: 10px;
		}
	}
</style>
