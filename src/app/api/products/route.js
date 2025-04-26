import { prisma } from "@/lib/prisma";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const price = parseFloat(searchParams.get("price")) || 1000;
  const promotion = parseFloat(searchParams.get("promotion")) || 0;
  const category = searchParams.get("category") || "All";
  const sortBy = searchParams.get("sortBy") || "latest";

  let where = {
    price: { lte: price },
    promotion: { gte: promotion },
  };

  if (category !== "All") {
    where.category = category;
  }

  let orderBy = { id: "desc" };
  if (sortBy === "priceAsc") orderBy = { price: "asc" };
  else if (sortBy === "priceDesc") orderBy = { price: "desc" };

  try {
    const products = await prisma.product.findMany({
      where,
      orderBy,
    });

    return new Response(JSON.stringify(products), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
