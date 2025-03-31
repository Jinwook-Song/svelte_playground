<script>
	import UserInput from '$lib/components/UserInput.svelte';

	let data = $props();
	$inspect(data);
</script>

<UserInput userName="jw">
	<h1>This is passed</h1>
</UserInput>
