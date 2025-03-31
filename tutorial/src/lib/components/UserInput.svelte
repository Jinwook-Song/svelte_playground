<script lang="ts">
	import type { Snippet } from 'svelte';

	interface UserInputProps {
		children: Snippet;
		userName: string;
	}
	let { userName, children }: UserInputProps = $props();
</script>

<h1>username</h1>
<input type="text" bind:value={userName} />
{@render children()}
<p>username: {userName}</p>
