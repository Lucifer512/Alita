import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FeatureBanner from "../components/Roadmap/FeatureBanner";
import NFTManagement from "../components/Roadmap/NftManagement";

const Roadmap = () => {
  return (
    <div
      className="font-onest"
      style={{
        background: "url(/Roadmap-Back.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
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
      <Footer />
    </div>
  );
};

export default Roadmap;
