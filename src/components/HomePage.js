import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import Specials from "./Specials/Specials";
import About from './About/About';
import Footer from "./Footer/Footer";

function HomePage() {
return(<>
    <Navbar/>
    <HeroSection/>
    <Specials />
    <About />
    <Footer />
</>
);
}

export default HomePage;