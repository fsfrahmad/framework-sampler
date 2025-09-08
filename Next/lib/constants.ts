export const CATEGORIES = [
  "Electronics",
  "Clothing",
  "Books",
  "Home & Garden",
  "Sports",
] as const;

export const FEATURED_PRODUCTS = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "Premium wireless headphones with noise cancellation",
    price: 199.99,
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e"],
    category: "Electronics",
    inStock: true,
  },
  // Add more featured products as needed
];