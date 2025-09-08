"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-sm text-muted-foreground">${product.price}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={() => onAddToCart?.(product)}
          disabled={!product.inStock}
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardFooter>
    </Card>
  );
}