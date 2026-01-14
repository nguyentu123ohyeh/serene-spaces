import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center stagger-children">
          <p className="text-caption mb-4">404</p>
          <h1 className="text-heading-lg mb-6">Page Not Found</h1>
          <p className="text-body text-muted-foreground max-w-md mx-auto mb-10">
            The page you're looking for seems to have drifted off to sleep. 
            Let's get you back to a cozy place.
          </p>
          <Link to="/" className="btn-hero inline-block">
            Return Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
