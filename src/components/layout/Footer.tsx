import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-muted/50 to-transparent pt-20 pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-tight">
              Alandria Robinson
            </Link>
            <p className="mt-4 text-body text-muted-foreground max-w-sm">
              Crafted for 8 hours of bliss. We believe in better dreams through 
              thoughtfully designed bedroom essentials.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-caption mb-4">Explore</h4>
            <ul className="space-y-3">
              {["Collection", "About Us", "Contact", "Care Guide"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Collection" ? "/products" : item === "About Us" ? "/about" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-caption mb-4">Support</h4>
            <ul className="space-y-3">
              {["Track Order", "Returns", "Shipping", "FAQ"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground">
            © 2024 Alandria Robinson. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Facebook, label: "Facebook" },
              { icon: Twitter, label: "Twitter" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label={label}
              >
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
