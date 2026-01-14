import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Star } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import productBeddingSet from "@/assets/product-bedding-set.jpg";
import productPillowcase from "@/assets/product-pillowcase.jpg";
import productBlanket from "@/assets/product-blanket.jpg";
import productLamp from "@/assets/product-lamp.jpg";
import productSilkPillowcase from "@/assets/product-silk-pillowcase.jpg";
import productDuvet from "@/assets/product-duvet.jpg";
import heroBedroom from "@/assets/hero-bedroom.jpg";

interface ColorOption {
  name: string;
  image: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  fabricFeel: string[];
  colors: ColorOption[];
  reviews: { author: string; rating: number; text: string }[];
}

const productsData: Record<string, Product> = {
  "1": {
    id: "1",
    name: "Organic Cotton Bedding Set",
    price: 289,
    images: [productBeddingSet, productPillowcase, productDuvet],
    description:
      "Experience pure comfort with our signature organic cotton bedding set. Each piece is crafted from 100% GOTS-certified organic cotton, offering unparalleled softness that improves with every wash.",
    fabricFeel: ["Cool", "Breathable", "Soft"],
    colors: [
      { name: "Cloud White", image: productBeddingSet },
      { name: "Sage Green", image: productDuvet },
      { name: "Natural Linen", image: productPillowcase },
    ],
    reviews: [
      {
        author: "Sarah M.",
        rating: 5,
        text: "The softest sheets I've ever owned. Worth every penny for a better night's sleep.",
      },
      {
        author: "James L.",
        rating: 5,
        text: "Finally found bedding that keeps me cool all night. Exceptional quality.",
      },
      {
        author: "Emily R.",
        rating: 4,
        text: "Beautiful quality and so comfortable. The color is exactly as shown.",
      },
    ],
  },
  "2": {
    id: "2",
    name: "Natural Linen Pillowcase",
    price: 79,
    images: [productPillowcase, productBeddingSet],
    description:
      "Our linen pillowcases are woven from European flax and pre-washed for ultimate softness. Naturally temperature-regulating and hypoallergenic.",
    fabricFeel: ["Breathable", "Textured", "Natural"],
    colors: [
      { name: "Natural", image: productPillowcase },
      { name: "Cloud White", image: productBeddingSet },
    ],
    reviews: [
      {
        author: "Michael K.",
        rating: 5,
        text: "Gets softer with every wash. Love the natural texture.",
      },
    ],
  },
  "3": {
    id: "3",
    name: "Cozy Knit Throw Blanket",
    price: 159,
    images: [productBlanket],
    description:
      "Hand-knit from premium organic cotton, this chunky throw adds warmth and texture to any bedroom. Perfect for cool evenings.",
    fabricFeel: ["Warm", "Chunky", "Cozy"],
    colors: [{ name: "Dusty Rose", image: productBlanket }],
    reviews: [
      {
        author: "Lisa P.",
        rating: 5,
        text: "So cozy and beautiful. It's become my favorite blanket.",
      },
    ],
  },
  "4": {
    id: "4",
    name: "Ceramic Glow Lamp",
    price: 129,
    images: [productLamp],
    description:
      "Handcrafted ceramic lamp with a warm ambient glow. The organic shape and soft light create the perfect atmosphere for winding down.",
    fabricFeel: ["Warm Glow", "Handcrafted", "Ambient"],
    colors: [{ name: "Cream", image: productLamp }],
    reviews: [
      {
        author: "David H.",
        rating: 5,
        text: "The perfect bedside lamp. The warm light is so relaxing.",
      },
    ],
  },
  "5": {
    id: "5",
    name: "Mulberry Silk Pillowcase",
    price: 119,
    images: [productSilkPillowcase],
    description:
      "Luxurious 22-momme mulberry silk pillowcase. Gentle on skin and hair, naturally hypoallergenic, and temperature regulating.",
    fabricFeel: ["Silky", "Cooling", "Luxurious"],
    colors: [{ name: "Pearl", image: productSilkPillowcase }],
    reviews: [
      {
        author: "Anna C.",
        rating: 5,
        text: "My skin and hair have never looked better. True luxury.",
      },
    ],
  },
  "6": {
    id: "6",
    name: "Sage Cotton Duvet Cover",
    price: 199,
    images: [productDuvet, productBeddingSet],
    description:
      "Our signature duvet cover in calming sage green. Made from organic cotton with hidden button closure and corner ties.",
    fabricFeel: ["Soft", "Breathable", "Fresh"],
    colors: [
      { name: "Sage Green", image: productDuvet },
      { name: "Cloud White", image: productBeddingSet },
    ],
    reviews: [
      {
        author: "Rachel T.",
        rating: 5,
        text: "The sage color is absolutely beautiful. Quality is exceptional.",
      },
    ],
  },
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? productsData[id] : null;
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [showDayView, setShowDayView] = useState(true);

  if (!product) {
    return (
      <Layout>
        <div className="pt-32 pb-24 px-6 text-center">
          <h1 className="text-heading-md mb-4">Product not found</h1>
          <Link to="/products" className="btn-hero inline-block">
            Back to Collection
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Back Link */}
      <div className="pt-28 px-6 lg:px-12">
        <div className="container mx-auto">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft size={16} />
            Back to Collection
          </Link>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="py-12 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="img-hover-zoom relative">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="img-soft w-full h-[500px] lg:h-[600px] object-cover cursor-zoom-in"
                />
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-2xl overflow-hidden transition-all duration-300 ${
                        selectedImage === index
                          ? "ring-2 ring-foreground"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info - Fixed Panel */}
            <div className="lg:sticky lg:top-32 lg:self-start space-y-8">
              <div>
                <h1 className="text-heading-md mb-3">{product.name}</h1>
                <p className="text-2xl font-light">${product.price}</p>
              </div>

              {/* Fabric Feel Tags */}
              <div className="flex flex-wrap gap-2">
                {product.fabricFeel.map((feel) => (
                  <span
                    key={feel}
                    className="px-4 py-2 bg-muted rounded-full text-sm font-medium"
                  >
                    {feel}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-body text-muted-foreground">
                {product.description}
              </p>

              {/* Color Swatches */}
              {product.colors.length > 1 && (
                <div>
                  <p className="text-caption mb-3">Color</p>
                  <div className="flex gap-3">
                    {product.colors.map((color, index) => (
                      <button
                        key={color.name}
                        onClick={() => {
                          setSelectedColor(index);
                          setSelectedImage(0);
                        }}
                        className={`relative w-14 h-14 rounded-full overflow-hidden transition-all duration-300 ${
                          selectedColor === index
                            ? "ring-2 ring-foreground ring-offset-2"
                            : "hover:scale-105"
                        }`}
                        title={color.name}
                      >
                        <img
                          src={color.image}
                          alt={color.name}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {product.colors[selectedColor].name}
                  </p>
                </div>
              )}

              {/* Add to Cart */}
              <button className="btn-primary w-full">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      {/* In Your Room Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-caption mb-4">Visualize</p>
            <h2 className="text-heading-md">In Your Room</h2>
          </div>

          {/* Day/Night Slider */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={heroBedroom}
                alt="Product in bedroom setting"
                className="w-full h-[400px] lg:h-[500px] object-cover transition-all duration-500"
                style={{
                  filter: showDayView
                    ? "brightness(1) contrast(1)"
                    : "brightness(0.4) contrast(1.1) saturate(0.8)",
                }}
              />

              {/* Day/Night Toggle */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-background/80 backdrop-blur-md rounded-full px-6 py-3">
                <button
                  onClick={() => setShowDayView(true)}
                  className={`text-sm font-medium transition-colors ${
                    showDayView ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  Day
                </button>
                <div
                  className="w-12 h-6 bg-muted rounded-full relative cursor-pointer"
                  onClick={() => setShowDayView(!showDayView)}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 rounded-full bg-foreground transition-all duration-300 ${
                      showDayView ? "left-1" : "left-7"
                    }`}
                  />
                </div>
                <button
                  onClick={() => setShowDayView(false)}
                  className={`text-sm font-medium transition-colors ${
                    !showDayView ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  Night
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-caption mb-4">Testimonials</p>
            <h2 className="text-heading-md">What Others Say</h2>
          </div>

          {/* Horizontal Scroll Reviews */}
          <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory">
            {product.reviews.map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 card-serene snap-center"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-body mb-4 italic">"{review.text}"</p>
                <p className="text-sm font-medium">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
