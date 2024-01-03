import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const GET = async () => {
	try {
		const categories = await prisma.Category.findMany();

		return new Response(
			JSON.stringify({
				categories
			}),
			{
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	} catch (e) {
		return new Response(
			JSON.stringify({
				message: 'Something went wrong while trying to fetch categories',
				error: e
			}),
			{
				status: 500,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}
};
