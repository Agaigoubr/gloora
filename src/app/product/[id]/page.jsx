import { PrismaClient } from '@prisma/client';
import ProductDetails from '@/components/product/ProductDetails';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import ProductDescription from '@/components/product/ProductDescription';
import OrderForm from '@/components/product/OrderForm';
import RelatedProducts from '@/components/product/RelatedProducts';

const prisma = new PrismaClient();

export async function getProduct(id) {
  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
    include: { images: true },
  });
  return product;
}

export default async function ProductPage({ params }) {
  const { id } = params;
  const product = await getProduct(id);

  if (!product) {
    return <div>Produit introuvable</div>;
  }

  return (
    <div className="px-4 lg:px-20 pt-32 pb-10 flex flex-col gap-16">
      {/* Product Top Section */}
      <section className="flex flex-col lg:flex-row gap-10">
        <ProductImageGallery images={product.images.length > 0 ? product.images : [{ id: 1, url: product.imageUrl }]} />
        <ProductDetails product={product} />
      </section>

      {/* Description and Order Form */}
      <section className="flex flex-col lg:flex-row gap-10">
        <ProductDescription description={product.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
        <OrderForm product={product} />
      </section>

      {/* Related Products */}
      <section className="flex flex-col gap-8 mt-16">
        <h2 className="text-2xl font-bold">Related Products</h2>
        <RelatedProducts category={product.category} currentProductId={product.id} />
      </section>
    </div>
  );
}
