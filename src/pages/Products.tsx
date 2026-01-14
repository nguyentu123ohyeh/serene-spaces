import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { products, filters } from "@/data/products";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "All") return true;
    return product.category === selectedCategory;
  });

  return (
    <Layout>
      <section className="pt-32 pb-12 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-caption mb-4">The Collection</p>
            <h1 className="text-heading-lg">Curated for Rest</h1>
          </div>

          {/* Filters - Lọc theo Category */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {filters.category.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-12">
        <div className="container mx-auto">
          {/* Cấu trúc Masonry: Ảnh sẽ hiển thị full chiều cao tự nhiên */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="break-inside-avoid group mb-6"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Link to={`/products/${product.id}`} className="block relative">
                  <div className="relative overflow-hidden rounded-2xl bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      // h-auto giúp hiển thị full ảnh không bị mất góc
                    />

                    <button
                      className={`absolute bottom-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                        hoveredProduct === product.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      }`}
                      onClick={(e) => e.preventDefault()}
                    >
                      <Plus size={18} />
                    </button>
                  </div>

                  <div className={`mt-4 transition-opacity duration-500 ${
                    hoveredProduct === product.id ? "opacity-100" : "opacity-70"
                  }`}>
                    <h3 className="font-serif text-lg leading-tight">{product.name}</h3>
                    <p className="text-muted-foreground mt-1">${product.price}</p>
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