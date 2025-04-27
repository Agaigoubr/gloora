import { prisma } from "@/lib/prisma"; // adapte selon ton projet

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const price = parseFloat(searchParams.get("price")) || 200;
  const promotion = parseFloat(searchParams.get("promotion")) || 0;
  const category = searchParams.get("category") || "All";
  const sortBy = searchParams.get("sortBy") || "latest";
  const page = parseInt(searchParams.get("page")) || 1;
  const pageSize = 6; // par ex : 6 produits par page

  const filters = {
    price: { lte: price },
    promotion: { gte: promotion },
  };
  if (category !== "All") {
    filters.category = category;
  }

  let orderBy = { createdAt: "desc" };
  if (sortBy === "priceAsc") orderBy = { price: "asc" };
  if (sortBy === "priceDesc") orderBy = { price: "desc" };

  const products = await prisma.product.findMany({
    where: filters,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  return new Response(JSON.stringify(products), { status: 200 });
}
