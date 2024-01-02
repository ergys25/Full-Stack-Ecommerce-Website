<script>
	import { page } from '$app/stores';
</script>

<div class="container">
	<h1 class="error-code">{$page.status}</h1>
	<p class="error-message">{$page.error.message}</p>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		font-family: Arial, sans-serif;
		background-color: #f8f8f8;
	}

	.error-code {
		font-size: 48px;
		font-weight: bold;
		margin-bottom: 16px;
	}

	.error-message {
		font-size: 24px;
		color: #888;
	}
</style>
