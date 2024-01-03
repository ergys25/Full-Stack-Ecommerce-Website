// This code block defines an async function named "load" that fetches products data from an API endpoint.
// It uses the "fetch" function to send a GET request to '/api/products' with the appropriate headers.
// The response is then parsed as JSON and returned as the result of the function.
export async function load({ fetch }) {
	const productsResponse = await fetch('/api/products', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});

	const products = await productsResponse.json();

	return products;
}
