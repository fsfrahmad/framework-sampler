import { FEATURED_PRODUCTS } from "@/lib/constants";
import { ProductCard } from "@/components/ui/product-card";

export default function ProductsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {FEATURED_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}