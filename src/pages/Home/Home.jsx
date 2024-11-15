import NavComponent from "../../Components/NavComponent/NavComponent";
import Hero from "../../Components/Hero/Hero";
import BrandsLogos from "../../Components/BrandsLogos/BrandsLogos";
import OurServices from "../../Components/OurServices/OurServices";
import Requirements from "../../Components/Requirements/Requirements";
import OurPricing from "../../Components/OurPricing/OurPricing";
import Testimonials from "../../Components/Testimonials/Testimonials";
import BlogAndNews from "../../Components/BlogAndNews/BlogAndNews";
import FooterDiv from "../../Components/FooterDiv/FooterDiv";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <NavComponent />
      <Hero />
      <BrandsLogos />
      <OurServices />
      <Requirements />
      <OurPricing />
      <Testimonials />
      <BlogAndNews />
      <Footer />
    </>
  );
};

export default Home;