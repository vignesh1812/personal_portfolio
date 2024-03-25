
import AboutSection from "./Components/AboutSection";
import EmailSection from "./Components/EmailSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import ProjectsSection from "./Components/ProjectSection";

export default function Home() {
  return (
    <div className="bg-[#121212] flex flex-col min-h-screen">
      <div className="container mx-auto px-6 sm:px-12 py-4">
        <Navbar />
        <HeroSection />
        <AboutSection/>
        <ProjectsSection/>
        <EmailSection/>
        <Footer/>
      </div>
    </div>
  );
}
