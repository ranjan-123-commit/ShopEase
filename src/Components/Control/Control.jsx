 import Hero from "../HeroSection/Hero";
import Home from "../Home/Home";
import PromoBanner from "../HeroSection/PromoBanner";
import Footer from "../Navbar/Footer/Footer";
function Control({ search }) {
  return (
    <div>
      <Hero />
    
      <Home search={search} />
    </div>
  );
}

export default Control;