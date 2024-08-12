import FeaturedCollections from "./components/Featured Collections/page";
import FeaturedProduct from "./components/FeaturedProduct/page";
import Footer from "./components/Footer/page";
import HeroSection from "./components/Hero/page";
import JewelleryCollection from "./components/JewelleryCollection/page";
import Navbar from "./components/Navbar/page";
import SignaturePiecesHeading from "./components/Signature pieces/page";
import Testimonials from "./components/Testimonials banner/page";

export default function Home() {
  return (
  <div>
    <Navbar />
    <HeroSection />
    <FeaturedCollections />
    <SignaturePiecesHeading />
    <FeaturedProduct />
    <JewelleryCollection />
    <Testimonials/>
    <Footer/>
  </div>
  );
}
