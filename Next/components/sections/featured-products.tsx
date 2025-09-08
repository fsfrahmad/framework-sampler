import { FEATURED_PRODUCTS } from "@/lib/constants";
import { ProductCard } from "@/components/ui/product-card";

export function FeaturedProducts() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}