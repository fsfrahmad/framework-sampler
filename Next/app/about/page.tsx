import { ShieldCheck, Truck, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Shopping",
    description: "Shop with confidence using our secure payment system",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Free shipping on orders over $50",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description: "Dedicated support team available 24/7",
  },
];

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div className="prose dark:prose-invert mb-12">
          <p className="text-lg text-muted-foreground">
            Welcome to ShopNext, your premier destination for quality products. 
            Founded in 2024, we've been committed to providing exceptional 
            shopping experiences for our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title} 
                className="text-center p-6 rounded-lg bg-card"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="relative h-[400px] rounded-lg overflow-hidden mb-12">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c')",
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex items-center justify-center text-white text-center p-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="max-w-2xl">
                To provide high-quality products and exceptional service while 
                maintaining sustainable and ethical business practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}