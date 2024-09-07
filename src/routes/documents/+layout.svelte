<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="wrapper">
	<a href={base} class="go-home no-decoration">
		<div class="icon">🏳️‍🌈</div>
		<p>홈으로</p>
	</a>

	<slot />
</div>

<style lang="scss">
	.wrapper {
		padding: 5px 20px;

		.go-home {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: 8px;
		}

		a {
			.icon {
				font-size: 35px;
				transition: transform 0.15s ease-in-out;
			}

			color: black;

			&:hover {
				.icon {
					transform: scale(1.12);
				}
			}
		}
	}
</style>
