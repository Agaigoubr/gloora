import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const currentProductId = parseInt(searchParams.get('currentProductId'));

  try {
    const relatedProducts = await prisma.product.findMany({
      where: {
        category: category,
        NOT: {
          id: currentProductId,
        },
      },
      take: 4,
      include: { images: true },
    });

    return Response.json(relatedProducts);
  } catch (error) {
    console.error(error);
    return new Response('Erreur lors de la récupération des produits liés', { status: 500 });
  }
}
