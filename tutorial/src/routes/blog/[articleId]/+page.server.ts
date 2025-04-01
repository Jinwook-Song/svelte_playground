import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return {
		blogPost: {
			title: `post id: ${params.articleId}`,
			content: 'This is the content of my first blog post'
		}
	};
};
