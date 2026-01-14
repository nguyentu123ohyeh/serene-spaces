import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import linenTexture from "@/assets/linen-texture.jpg";
import bedsideLamp from "@/assets/bedside-lamp.jpg";

const TextureStorySection = () => {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 stagger-children">
          <p className="text-caption mb-4">The Texture Story</p>
          <h2 className="text-heading-md text-balance max-w-2xl mx-auto">
            Feel the difference in every thread
          </h2>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {/* Linen Fabric - Tall */}
          <div className="md:col-span-5 md:row-span-2">
            <div className="img-hover-zoom h-full min-h-[400px] md:min-h-full">
              <img
                src={linenTexture}
                alt="Premium linen fabric texture"
                className="img-soft w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bedside Lamp */}
          <div className="md:col-span-4">
            <div className="img-hover-zoom h-64 md:h-full">
              <img
                src={bedsideLamp}
                alt="Warm glowing bedside lamp"
                className="img-soft w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Block */}
          <div className="md:col-span-3 flex flex-col justify-center p-8 bg-sage-light/50 rounded-3xl">
            <p className="text-caption mb-3">Our Promise</p>
            <p className="font-serif text-xl lg:text-2xl leading-relaxed">
              Crafted for 8 hours of bliss
            </p>
          </div>

          {/* Shop New Arrivals Link */}
          <div className="md:col-span-4 flex items-center justify-center p-8 bg-rose-light/50 rounded-3xl group cursor-pointer transition-all duration-500 hover:bg-rose-light">
            <Link
              to="/products"
              className="flex items-center gap-3 text-lg font-medium"
            >
              <span>Shop New Arrivals</span>
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>
          </div>

          {/* Stats */}
          <div className="md:col-span-3 flex flex-col justify-center p-8 bg-muted rounded-3xl">
            <div className="space-y-4">
              <div>
                <p className="font-serif text-3xl">100%</p>
                <p className="text-sm text-muted-foreground">Organic Materials</p>
              </div>
              <div className="h-px bg-border" />
              <div>
                <p className="font-serif text-3xl">8+</p>
                <p className="text-sm text-muted-foreground">Hours of Comfort</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextureStorySection;
