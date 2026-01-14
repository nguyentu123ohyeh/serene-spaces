import { useState } from "react";
import { Package, RotateCcw, BookOpen } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const quickLinks = [
    {
      icon: Package,
      title: "Track Order",
      description: "Check your order status",
    },
    {
      icon: RotateCcw,
      title: "Return Policy",
      description: "Easy 30-day returns",
    },
    {
      icon: BookOpen,
      title: "Care Guide",
      description: "Keep your bedding beautiful",
    },
  ];

  return (
    <Layout>
      {/* Animated Background - Subtle shadow movement */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-light/10 via-transparent to-rose-light/10" />
        {/* Animated shadow effect */}
        <div 
          className="absolute w-[600px] h-[600px] top-1/4 -right-48 rounded-full opacity-20 animate-float"
          style={{
            background: "radial-gradient(circle, hsl(var(--sage)) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Content */}
      <section className="pt-32 pb-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-2xl">
          {/* Header */}
          <div className="text-center mb-16 stagger-children">
            <p className="text-caption mb-4">The Concierge</p>
            <h1 className="text-heading-lg text-balance">
              Let's Make Your Bedroom Better
            </h1>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-8 mb-20">
            <div>
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="input-serene"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="input-serene"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="input-serene resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className={`btn-primary w-full transition-all duration-500 ${
                isSubmitted ? "opacity-70" : ""
              }`}
            >
              {isSubmitted ? "Note Sent ✓" : "Send a Note"}
            </button>
          </form>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group text-center p-6 rounded-3xl bg-muted/50 transition-all duration-500 hover:bg-muted cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-background mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
