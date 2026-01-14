import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import Layout from "@/components/layout/Layout";
import productBeddingSet from "@/assets/product-bedding-set.jpg";
import productPillowcase from "@/assets/product-pillowcase.jpg";
import productBlanket from "@/assets/product-blanket.jpg";
import productLamp from "@/assets/product-lamp.jpg";
import productSilkPillowcase from "@/assets/product-silk-pillowcase.jpg";
import productDuvet from "@/assets/product-duvet.jpg";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  material: string;
  isNew?: boolean;
  isTall?: boolean;
}

const products: Product[] = [
  {
    id: "1",
    name: "Organic Cotton Bedding Set",
    price: 289,
    image: productBeddingSet,
    category: "Bedding",
    material: "Cotton",
    isNew: true,
    isTall: true,
  },
  {
    id: "2",
    name: "Natural Linen Pillowcase",
    price: 79,
    image: productPillowcase,
    category: "Pillowcases",
    material: "Linen",
  },
  {
    id: "3",
    name: "Cozy Knit Throw Blanket",
    price: 159,
    image: productBlanket,
    category: "Blankets",
    material: "Cotton",
    isTall: true,
  },
  {
    id: "4",
    name: "Ceramic Glow Lamp",
    price: 129,
    image: productLamp,
    category: "Lighting",
    material: "Ceramic",
    isNew: true,
  },
  {
    id: "5",
    name: "Mulberry Silk Pillowcase",
    price: 119,
    image: productSilkPillowcase,
    category: "Pillowcases",
    material: "Silk",
    isTall: true,
  },
  {
    id: "6",
    name: "Sage Cotton Duvet Cover",
    price: 199,
    image: productDuvet,
    category: "Bedding",
    material: "Cotton",
  },
];

const filters = {
  material: ["All", "Cotton", "Linen", "Silk", "Ceramic"],
  category: ["All", "Bedding", "Pillowcases", "Blankets", "Lighting"],
};

const Products = () => {
  const [selectedMaterial, setSelectedMaterial] = useState("All");
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const filteredProducts = products.filter((product) => {
    if (selectedMaterial === "All") return true;
    return product.material === selectedMaterial;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-12 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-12 stagger-children">
            <p className="text-caption mb-4">The Collection</p>
            <h1 className="text-heading-lg">Curated for Rest</h1>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {filters.material.map((material) => (
              <button
                key={material}
                onClick={() => setSelectedMaterial(material)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedMaterial === material
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {material}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Product Grid */}
      <section className="pb-24 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="break-inside-avoid group"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Link to={`/products/${product.id}`} className="block relative">
                  {/* Image Container */}
                  <div className="img-hover-zoom relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`img-soft w-full object-cover ${
                        product.isTall ? "h-[500px]" : "h-[350px]"
                      }`}
                    />

                    {/* New Badge */}
                    {product.isNew && (
                      <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                        New
                      </span>
                    )}

                    {/* Quick Add Button */}
                    <button
                      className={`absolute bottom-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                        hoveredProduct === product.id
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        // Quick add logic
                      }}
                      aria-label="Quick add to cart"
                    >
                      <Plus size={18} />
                    </button>
                  </div>

                  {/* Product Info - Fade In on Hover */}
                  <div
                    className={`mt-4 transition-opacity duration-500 ${
                      hoveredProduct === product.id ? "opacity-100" : "opacity-60"
                    }`}
                  >
                    <h3 className="font-serif text-lg">{product.name}</h3>
                    <p className="text-muted-foreground">${product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
