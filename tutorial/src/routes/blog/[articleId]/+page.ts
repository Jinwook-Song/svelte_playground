import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	return {
		blogPost: {
			title: `post id: ${params.articleId}`,
			content: 'This is the content of my first blog post'
		}
	};
};
