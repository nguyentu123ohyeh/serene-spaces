import { useState } from "react";
import { Package, RotateCcw, BookOpen, Mail, MapPin, Phone, User } from "lucide-react";
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
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-light/10 via-transparent to-rose-light/10" />
        <div 
          className="absolute w-[600px] h-[600px] top-1/4 -right-48 rounded-full opacity-20 animate-float"
          style={{
            background: "radial-gradient(circle, hsl(var(--sage)) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <section className="pt-32 pb-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl"> {/* Tăng max-width để phù hợp 2 cột */}
          {/* Header */}
          <div className="text-center mb-16 stagger-children">
            <p className="text-caption mb-4">The Concierge</p>
            <h1 className="text-heading-lg text-balance">
              Let's Make Your Bedroom Better
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Left Column: Contact Form */}
            <div className="order-2 lg:order-1">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="input-serene"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="input-serene"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">Your Message</label>
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
            </div>

            {/* Right Column: Contact Information */}
            <div className="order-1 lg:order-2 space-y-10 lg:pl-12 lg:border-l border-muted/30">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center shrink-0">
                    <User size={18} className="text-foreground/70" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-1">Name</h4>
                    <p className="font-serif text-xl text-foreground">Alandria Robinson</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-foreground/70" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-1">Email</h4>
                    <p className="font-serif text-xl text-foreground">SanchezJoshua8775@outlook.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-foreground/70" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-1">Address</h4>
                    <p className="font-serif text-xl text-foreground leading-relaxed">
                      Magnaview Drive 140<br />
                      McDonough Georgia 30253
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-foreground/70" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-1">Phone</h4>
                    <p className="font-serif text-xl text-foreground">+1 4054973481</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

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