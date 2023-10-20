import BambooProduct from "@/component/core/pages/Home/bambooProduct/bambooProduct";
import BestProduct from "@/component/core/pages/Home/bestProduct/bestProduct";
import ClayProduct from "@/component/core/pages/Home/clayProduct/clayProduct";
import ClientReview from "@/component/core/pages/Home/clientReview/clientReview";
import GlassProducts from "@/component/core/pages/Home/glassProduct/glassProduct";
import HeroSection from "@/component/core/pages/Home/heroSection/heroSection";
import OurTeam from "@/component/core/pages/Home/ourTeam/ourTeam";

const Home = () => {
  return (
    <>
      <HeroSection />
      <GlassProducts />
      <ClayProduct />
      <BambooProduct />
      <BestProduct />
      <OurTeam/>
      <ClientReview />
    </>
  );
};

export default Home;
