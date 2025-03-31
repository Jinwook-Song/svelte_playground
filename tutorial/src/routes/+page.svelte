<script>
	let count = $state(0);
	let userInfo = $derived(count === 0 ? '초기값' : `${count} 값이 있습니다.`);

	function increment() {
		count += 1;
	}
</script>

<div>
	<p>Count: {count}</p>
	<button onclick={increment}>증가</button>
	<p>User Info: {userInfo}</p>
</div>
