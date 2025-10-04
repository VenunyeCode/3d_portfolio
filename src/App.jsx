import Hero from "./sections/Hero.jsx";
import ShowCaseSection from "./sections/ShowCase.jsx";
import NavBar from "./components/NavBar.jsx";
import Logo from "./sections/Logo.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import Experience from "./sections/Experience.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
    return (
       <>
           <NavBar />
           <Hero />
           <ShowCaseSection />
           <Logo />
           <FeatureCards />
           <Experience />
           <TechStack />
           <Contact />
           <Footer />
       </>
    )
}
export default App
