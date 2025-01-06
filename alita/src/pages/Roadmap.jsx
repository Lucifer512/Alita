import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AIShoppingBanner from "../components/Roadmap/AIShoppingBanner";
import FeatureBanner from "../components/Roadmap/FeatureBanner";
import IntegrationBanner from "../components/Roadmap/IntegrationBanner";
import NFTManagement from "../components/Roadmap/NftManagement";

const Roadmap = () => {
  return (
    <div
      className="font-onest w-full bg-cover bg-center bg-no-repeat"
      style={{
        background: "url(/Roadmap-Back.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"

      }}
    >
      <Navbar />
      <NFTManagement />
      <div className="relative w-full max-w-full mx-auto px-4 py-5 flex flex-col justify-center items-center gap-8">
        <h1 className="font-onest w-[80vw] font-bold text-[3rem]">
          Terminal AI: The Next-Gen Web 3.0 Crypto Investment Platform
        </h1>
      </div>
      <FeatureBanner />
      <IntegrationBanner/>
      <div className="w-full flex justify-center items-center px-4 py-10">
        <div className="w-[60%] flex flex-col justify-center items-start space-y-4 h-full px-10">
        <h1 className="font-onest text-[2rem]">Explore What’s Next</h1>
        <p className="font-onest text-[1rem]">Experience the potential of your personal AI assistant! The AI Agent Playground is now open—explore, experiment, and deploy AI Agents to handle tasks, enhance productivity, or just enjoy the ride.</p>
        </div>
      
      </div>
      <AIShoppingBanner />
      <Footer />
    </div>
  );
};

export default Roadmap;
