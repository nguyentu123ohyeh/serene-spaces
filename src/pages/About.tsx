import Layout from "@/components/layout/Layout";
import naturalCotton from "@/assets/natural-cotton.jpg";
import peacefulSleep from "@/assets/peaceful-sleep.jpg";
import linenTexture from "@/assets/linen-texture.jpg";
import cottonBedding from "@/assets/cotton-bedding.jpg";
import bedsideLamp from "@/assets/bedside-lamp.jpg";
import { useState } from "react";

const fabrics = [
  {
    name: "Silk",
    image: linenTexture,
    benefits: "Temperature regulating • Hypoallergenic • Luxuriously soft",
  },
  {
    name: "Linen",
    image: cottonBedding,
    benefits: "Breathable • Durable • Gets softer over time",
  },
  {
    name: "Cotton",
    image: bedsideLamp,
    benefits: "Natural • Easy care • Classic comfort",
  },
];

const About = () => {
  const [hoveredFabric, setHoveredFabric] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="container mx-auto text-center stagger-children">
          <p className="text-caption mb-4">Our Story</p>
          <h1 className="text-heading-lg max-w-3xl mx-auto text-balance">
            We believe in better dreams
          </h1>
        </div>
      </section>

      {/* Zig-Zag Story Section 1 */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Left */}
            <div className="img-hover-zoom">
              <img
                src={naturalCotton}
                alt="Natural organic cotton"
                className="img-soft w-full h-[400px] lg:h-[600px] object-cover"
              />
            </div>

            {/* Text Right */}
            <div className="lg:pl-8">
              <p className="text-caption mb-4">Chapter One</p>
              <h2 className="text-heading-md mb-6">Material Integrity</h2>
              <div className="space-y-4 text-body text-muted-foreground">
                <p>
                  Every thread tells a story. We source only the finest organic materials 
                  from trusted partners who share our commitment to sustainability and quality.
                </p>
                <p>
                  Our fabrics are certified organic, free from harmful chemicals, and designed 
                  to last for years while getting softer with every wash.
                </p>
                <p>
                  From the cotton fields to your bedroom, we ensure every step of the journey 
                  meets our exacting standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zig-Zag Story Section 2 */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Left */}
            <div className="lg:pr-8 order-2 lg:order-1">
              <p className="text-caption mb-4">Chapter Two</p>
              <h2 className="text-heading-md mb-6">The Science of Sleep</h2>
              <div className="space-y-4 text-body text-muted-foreground">
                <p>
                  Sleep is not just rest—it's restoration. We've studied the science 
                  of sleep to create products that actively contribute to better rest.
                </p>
                <p>
                  Temperature regulation, breathability, and the perfect balance of 
                  softness and support. Every detail is considered.
                </p>
                <p>
                  The result? You wake up feeling truly refreshed, ready to embrace 
                  each new day.
                </p>
              </div>
            </div>

            {/* Image Right */}
            <div className="img-hover-zoom order-1 lg:order-2">
              <img
                src={peacefulSleep}
                alt="Person sleeping peacefully"
                className="img-soft w-full h-[400px] lg:h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feel Section - Fabric Hover */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-caption mb-4">The Feel</p>
            <h2 className="text-heading-md">Experience our fabrics</h2>
          </div>

          {/* Fabric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {fabrics.map((fabric) => (
              <div
                key={fabric.name}
                className="relative overflow-hidden rounded-3xl cursor-pointer group"
                onMouseEnter={() => setHoveredFabric(fabric.name)}
                onMouseLeave={() => setHoveredFabric(null)}
              >
                <div
                  className={`transition-transform duration-700 ease-out ${
                    hoveredFabric === fabric.name ? "scale-110" : "scale-100"
                  }`}
                >
                  <img
                    src={fabric.image}
                    alt={`${fabric.name} fabric texture`}
                    className="w-full h-80 object-cover"
                  />
                </div>

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-foreground/70 flex flex-col items-center justify-center text-center p-6 transition-opacity duration-500 ${
                    hoveredFabric === fabric.name ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="font-serif text-2xl text-background mb-3">
                    {fabric.name}
                  </h3>
                  <p className="text-sm text-background/80">{fabric.benefits}</p>
                </div>

                {/* Default Label */}
                <div
                  className={`absolute bottom-6 left-6 transition-opacity duration-500 ${
                    hoveredFabric === fabric.name ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <p className="font-serif text-xl">{fabric.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
