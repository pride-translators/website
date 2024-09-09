<script lang="ts">
	export let text: string;
	export let url: string;
	export let selected: boolean;
	import { base } from '$app/paths';
</script>

<a href="{base}{url}" class="no-text-decoration">
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
		color: var(--text-color);
		background-color: var(--box-color);

		transition: all 0.15s ease-in-out;

		&:hover {
			color: var(--text-color-selected);
			background-color: var(--box-color-selected);
		}
	}

	.topic-button-selected {
		color: var(--box-color);
		background-color: var(--box-color-selected);
	}

	.no-text-decoration {
		text-decoration: none;
	}
</style>
