import HeroSection from "@/components/Hero-section/Hero-Section";
import Collection from "@/components/Collection/Collection";
import Discover from "@/components/Discover/Discover";
import Enjoy from "@/components/Enjoy/Enjoy";
import CustomerStories from "@/components/Customer-Stories/Customer-Stories";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <Collection />
      <Discover />
      <Enjoy />
      <CustomerStories />
    </main>
  );
}

export default HomePage;
