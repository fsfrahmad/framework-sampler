import { CATEGORIES, FEATURED_PRODUCTS } from "@/lib/constants";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CategoriesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {CATEGORIES.map((category) => {
          const categoryProducts = FEATURED_PRODUCTS.filter(
            (product) => product.category === category
          );
          
          return (
            <div key={category} className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">{category}</h2>
              <p className="text-muted-foreground mb-4">
                {categoryProducts.length} products available
              </p>
              <Button asChild>
                <Link href={`/categories/${category.toLowerCase()}`}>
                  View All
                </Link>
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}