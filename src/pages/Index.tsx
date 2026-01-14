import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import TextureStorySection from "@/components/home/TextureStorySection";
import MoodSelector from "@/components/home/MoodSelector";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TextureStorySection />
      <MoodSelector />
    </Layout>
  );
};

export default Index;
