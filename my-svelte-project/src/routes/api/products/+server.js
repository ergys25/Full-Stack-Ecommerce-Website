// Import the PrismaClient from the '@prisma/client' package
import { PrismaClient } from '@prisma/client';

// Create an instance of the PrismaClient
const prisma = new PrismaClient();

// Define a GET request handler function
export const GET = async () => {
	try {
		// Fetch all products from the database using PrismaClient
		const products = await prisma.product.findMany();

		// Return a successful response with the products data
		return new Response(
			JSON.stringify({
				products
			}),
			{
				status: 200,
				headers: {
					'Content-Type': 'application/json' // Set the response content type to JSON
				}
			}
		);
	} catch (e) {
		// Return an error response if something went wrong
		return new Response(
			JSON.stringify({
				message: 'Something Went wrong while trying to fetch products',
				error: e
			}),
			{
				status: 500,
				headers: {
					'Content-Type': 'application/json' // Set the response content type to JSON
				}
			}
		);
	}
};
