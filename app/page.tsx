import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data - In a real app, this would come from an API
const featuredProducts = [
  {
    id: 1,
    title: "Wireless Noise-Canceling Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    seller: "AudioTech Pro",
    rating: 4.8,
    reviews: 1234,
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    seller: "TechGear",
    rating: 4.6,
    reviews: 856,
  },
  {
    id: 3,
    title: "Professional Camera Kit",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
    seller: "PhotoPro Shop",
    rating: 4.9,
    reviews: 2341,
  },
  {
    id: 4,
    title: "Organic Coffee Beans",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&q=80",
    seller: "Coffee Roasters Co.",
    rating: 4.7,
    reviews: 567,
  },
];

const categories = [
  { name: "Electronics", count: "20,543" },
  { name: "Fashion", count: "15,234" },
  { name: "Home & Garden", count: "12,768" },
  { name: "Sports", count: "8,965" },
  { name: "Beauty", count: "10,234" },
  { name: "Books", count: "7,654" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-8 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container flex flex-col items-center gap-4 py-16 text-center md:py-24">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Your One-Stop Shopping Destination
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Shop millions of products from thousands of trusted sellers worldwide.
            Quality guaranteed with our buyer protection program.
          </p>
          <div className="flex gap-4">
            <Link href="/shop">
              <Button size="lg">Start Shopping</Button>
            </Link>
            <Link href="/become-seller">
              <Button variant="outline" size="lg">
                Become a Seller
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.name.toLowerCase()}`}
              className="group relative overflow-hidden rounded-lg border bg-background p-4 transition-colors hover:bg-accent"
            >
              <h3 className="font-semibold">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count} items</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="line-clamp-2 text-lg">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      by {product.seller}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">
                    ★ {product.rating}
                  </Badge>
                </div>
                <p className="mt-4 text-2xl font-bold">${product.price}</p>
                <p className="text-sm text-muted-foreground">
                  {product.reviews.toLocaleString()} reviews
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="container border-t py-8">
        <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
          <div className="flex flex-col items-center gap-2">
            <svg
              className="h-8 w-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="font-semibold">Fast Delivery</h3>
            <p className="text-sm text-muted-foreground">
              2-day delivery on most items
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <svg
              className="h-8 w-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <h3 className="font-semibold">Secure Shopping</h3>
            <p className="text-sm text-muted-foreground">
              Protected by SSL encryption
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <svg
              className="h-8 w-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            <h3 className="font-semibold">Easy Returns</h3>
            <p className="text-sm text-muted-foreground">
              30-day money-back guarantee
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <svg
              className="h-8 w-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <h3 className="font-semibold">24/7 Support</h3>
            <p className="text-sm text-muted-foreground">
              Always here to help you
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}