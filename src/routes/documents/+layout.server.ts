import type { LayoutServerLoad } from './$types';

export const load = (async ({ route }) => {
	let post = undefined;

	try {
		post = await import(
			/* @vite-ignore */
			`..${route.id}/+page.md`
		);
	} catch {
		post = await import(
			/* @vite-ignore */
			`..${route.id}/_page.md.js`
		);
	}

	if (post.metadata?.title) {
		return {
			title: post.metadata?.title,
			excerpt: post.metadata?.excerpt
		};
	} else {
		return {};
	}
}) satisfies LayoutServerLoad;
