<script lang="ts">
	let userName = $state('');

	$effect(() => {
		if (userName) {
			console.log(`I will send the name to the database, 
            currently it is: ${userName}`);
		}
	});
</script>

<h1>username</h1>
<input type="text" bind:value={userName} />
<p>username: {userName}</p>
