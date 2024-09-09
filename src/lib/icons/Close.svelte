<script lang="ts">
	export let height: string;
	export let color: string;
</script>

<svg {height} viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
	<rect
		x="62.991"
		y="19.7245"
		width="5.39897"
		height="61.1883"
		rx="2.69948"
		transform="rotate(45 62.991 19.7245)"
		fill={color}
		style="fill:{color};fill-opacity:1;"
	/>
	<rect
		x="19.7244"
		y="23.5421"
		width="5.39897"
		height="61.1883"
		rx="2.69948"
		transform="rotate(-45 19.7244 23.5421)"
		fill={color}
		style="fill:{color};fill-opacity:1;"
	/>
</svg>
