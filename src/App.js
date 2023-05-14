import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Feature from "./components/feature/Featur";
import Resume from "./components/Resume/Resume"
import Project from "./components/Project/Project"
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <div className="max-w-screen-xl mx-auto">
        <Navbar/>
        <Banner/>
        <Feature/>
        <Project/>
        <Resume/>
        <Contact/>
        <Footer/>
        <FooterBottom/>
      </div>
    </div>
  );
}

export default App;
