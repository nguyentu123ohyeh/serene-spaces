import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft, Star } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { products } from "@/data/products"; // Dùng chung nguồn dữ liệu
import heroBedroom from "@/assets/hero-bedroom.jpg";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Tìm sản phẩm trong mảng 28 món dựa trên ID
  const product = products.find((p) => p.id === id);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [showDayView, setShowDayView] = useState(true);

  if (!product) {
    return (
      <Layout>
        <div className="pt-32 pb-24 px-6 text-center">
          <h1 className="text-heading-md mb-4">Product not found</h1>
          <Link to="/products" className="btn-hero inline-block">Back to Collection</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-28 px-6 lg:px-12">
        <div className="container mx-auto">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft size={16} /> Back to Collection
          </Link>
        </div>
      </div>

      <section className="py-12 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Image Gallery - Hiển thị Full Ảnh */}
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden bg-muted">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-auto max-h-[700px] object-contain mx-auto" 
                  // object-contain giúp thấy toàn bộ ảnh nếu ảnh quá dài
                />
              </div>

              {product.images.length > 1 && (
                <div className="flex flex-wrap gap-3">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-xl overflow-hidden transition-all border-2 ${
                        selectedImage === index ? "border-foreground" : "border-transparent opacity-60"
                      }`}
                    >
                      <img src={img} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info Panel */}
            <div className="lg:sticky lg:top-32 lg:self-start space-y-8">
              <div>
                <p className="text-caption text-primary mb-2">{product.category}</p>
                <h1 className="text-heading-md mb-3 leading-tight">{product.name}</h1>
                <p className="text-2xl font-light">${product.price}</p>
              </div>

              {/* Details Tags (Tách từ chuỗi "A | B | C") */}
              <div className="flex flex-wrap gap-2">
                {product.details.split(" | ").map((detail) => (
                  <span key={detail} className="px-3 py-1 bg-muted rounded-full text-xs font-medium uppercase tracking-wider">
                    {detail}
                  </span>
                ))}
              </div>

              <p className="text-body text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Colors Display */}
              <div>
                <p className="text-caption mb-3">Available Colors</p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <span key={color} className="px-4 py-2 border border-muted rounded-xl text-sm">
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => navigate("/contact")}
                className="btn-primary w-full py-4"
              >
                Contact Us for Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Visualize Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-caption mb-4">Visualize</p>
          <h2 className="text-heading-md mb-12">In Your Room</h2>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={heroBedroom}
              alt="Preview"
              className="w-full h-[500px] object-cover transition-all duration-700"
              style={{ filter: showDayView ? "brightness(1)" : "brightness(0.4) saturate(0.8)" }}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-background/90 backdrop-blur-md rounded-full px-6 py-3">
              <span className={`text-xs uppercase font-bold ${showDayView ? 'text-foreground' : 'text-muted-foreground'}`}>Day</span>
              <div 
                className="w-12 h-6 bg-muted-foreground/20 rounded-full relative cursor-pointer"
                onClick={() => setShowDayView(!showDayView)}
              >
                <div className={`absolute top-1 w-4 h-4 bg-foreground rounded-full transition-all ${showDayView ? 'left-1' : 'left-7'}`} />
              </div>
              <span className={`text-xs uppercase font-bold ${!showDayView ? 'text-foreground' : 'text-muted-foreground'}`}>Night</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;