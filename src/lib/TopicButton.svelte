<script lang="ts">
	export let text: string;
	export let url: string;
	export let selected: boolean;
</script>

<a href={url} class="no-text-decoration">
	{#if selected}
		<div class="topic-box topic-button-selected">
			<p>{text}</p>
		</div>
	{:else}
		<div class="topic-box topic-button">
			<p>{text}</p>
		</div>
	{/if}
</a>

<style lang="scss">
	.topic-box {
		border-radius: 120px;
		padding: 15px 25px;

		p {
			margin: 0px;
		}
	}

	.topic-button {
		color: black;
		background-color: #efefef;

		transition: all 0.15s ease-in-out;

		&:hover {
			color: white;
			background-color: black;
		}
	}

	.topic-button-selected {
		color: #efefef;
		background-color: black;
	}

	.no-text-decoration {
		text-decoration: none;
	}
</style>
