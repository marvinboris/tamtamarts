import HomeBlog from "@/components/frontend/pages/home/blog";
import HomeCards from "@/components/frontend/pages/home/cards";
import HomeGallery from "@/components/frontend/pages/home/gallery";
import HomeHero from "@/components/frontend/pages/home/hero";
import HomeInterviews from "@/components/frontend/pages/home/interviews";
import HomePoem from "@/components/frontend/pages/home/poem";

export default function Home() {
  return (
    <div>
      <HomeHero />

      <HomeGallery />

      <HomeCards />

      <HomeInterviews />

      <HomePoem />

      <HomeBlog />
    </div>
  );
}
