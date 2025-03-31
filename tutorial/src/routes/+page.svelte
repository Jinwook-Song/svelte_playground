<script lang="ts">
	let userName = $state('');

	$inspect(userName);
</script>

<h1>username</h1>
<input type="text" bind:value={userName} />
<p>username: {userName}</p>
