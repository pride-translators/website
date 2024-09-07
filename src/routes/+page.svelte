<script lang="ts">
	import TopicButton from '$lib/TopicButton.svelte';
	import Github from '../lib/icons/Github.svelte';

	const isJsEnabled = typeof window !== 'undefined';
</script>

<div class="top">
	<div class="title-section-1 max-width-690">
		<h2 class="icon">🏳️‍🌈</h2>
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
			<h2>가 뭔가요?</h2>
		</div>
		<p>
			LGBTQIA+는 레즈비언<sup>(Lesbian)</sup>, 게이<sup>(Gay)</sup>, 양성애자<sup>(Bisexual)</sup>,
			트랜스젠더<sup>(Transgender)</sup>, 퀴어/질문 중 <sup>(Queer/Questioning)</sup>, 무성애자<sup
				>(Asexual)</sup
			> 의 줄임말입니다.
		</p>
	</div>

	<div class="title-section-2">
		{#if isJsEnabled}
			<h4>주제별로 탐색해보세요!</h4>
			<div class="topic-boxes">
				<TopicButton selected={false} text="트랜스젠더" url={`/category?category=transgender`} />
				<TopicButton selected={false} text="섹슈얼리티" url={`/category?category=sexuality`} />
				<TopicButton selected={false} text="영상 번역" url={`/category?category=videos`} />
				<TopicButton selected={false} text="기타" url={`/category?category=others`} />
			</div>

			<a href="/list" class="link-button">아니면 목록으로 보시겠어요?</a>
		{:else}
			<h4 class="margin-bottom-5px">번역 문서들을 살펴보세요!</h4>
			<a href="/list" class="link-button">목록 보기</a>
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
				><Github height="35px" /></a
			>
		</div>
	</div>
</div>

<style lang="scss">
	.top {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		height: 125vh;
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
			font-size: 28px;
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
		color: #717171;
		transition: color 0.15s ease-in-out;

		&:hover {
			color: black;
		}
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
			width: 98vw;
		}
		@media only screen and (max-width: 590px) {
			display: flex;
			flex-direction: column;
			justify-content: center;
			row-gap: 10px;
		}
	}
</style>
