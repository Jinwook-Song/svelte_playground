<script lang="ts">
	let userName = $state('jw');

	let isEditting = $state(false);

	let peopleWaiting = $state(['123', '456', '789']);

	$inspect(peopleWaiting);
</script>

{#snippet userInput(example: string)}
	<h1>username</h1>
	{#if isEditting}
		<input type="text" bind:value={userName} />
	{:else}
		<p>username: {userName}</p>
	{/if}
	<p>example: {example}</p>
{/snippet}

{@render userInput('test!!')}

{#each peopleWaiting as person}
	{@render userInput(person)}
{/each}

<button onclick={() => (isEditting = !isEditting)}>
	{isEditting ? 'save' : 'edit'}
</button>

<button onclick={() => peopleWaiting.push(Date.now().toString())}>add</button>
