<script lang="ts">
	let { data } = $props();
</script>

<h2>Hello Blog Article</h2>

<p>{data.blogPost.title}</p>
<p>{data.blogPost.content}</p>
