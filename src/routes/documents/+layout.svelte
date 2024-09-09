<script lang="ts">
	import { base } from '$app/paths';
	import '../../lib/document.css';
</script>

<div class="center">
	<div class="wrapper">
		<a href="{base}/" class="go-home no-decoration">
			<div class="icon">🏳️‍🌈</div>
			<p>홈으로</p>
		</a>

		<slot />
	</div>
</div>

<style lang="scss">
	.center {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.wrapper {
		padding: 5px 20px;
		max-width: 800px;

		.go-home {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: 8px;
		}

		a {
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
</style>
