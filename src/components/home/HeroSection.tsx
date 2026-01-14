import { Link } from "react-router-dom";
import heroBedroom from "@/assets/hero-bedroom.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Soft Focus */}
      <div className="absolute inset-0">
        <img
          src={heroBedroom}
          alt="Minimalist luxury bedroom at golden hour"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.95) contrast(0.95)" }}
        />
        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 stagger-children">
        <p className="text-caption mb-4">Welcome to</p>
        <h1 className="text-heading-xl mb-6 text-balance">
          The Art of Rest
        </h1>
        <p className="text-body-lg text-muted-foreground max-w-md mx-auto mb-10">
          Discover bedroom essentials crafted for 8 hours of bliss
        </p>
        <Link
          to="/products"
          className="btn-hero inline-block"
        >
          Explore Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-foreground/30 to-foreground/60" />
      </div>
    </section>
  );
};

export default HeroSection;
