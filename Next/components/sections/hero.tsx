import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4">Shop the Latest Trends</h1>
          <p className="text-xl mb-8">Discover our curated collection of premium products</p>
          <Button asChild size="lg">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}