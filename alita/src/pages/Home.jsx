import Navbar from "../components/Navbar";
import BannerOne from "../components/Home/BannerOne";
import BannerTwo from "../components/Home/BannerTwo";
import BannerThree from "../components/Home/BannerThree";
import AgentsSwipper from "../components/Home/AgentsSwipper";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="font-onest">
      <Navbar />
      <BannerOne />
      <BannerTwo/>
      <BannerThree/>
      <div className="relative w-full max-w-full mx-auto px-4 py-10 flex justify-center items-center gap-8">
        <h1 className="font-onest font-bold text-[3rem]">Meet Your Agents</h1>
        <div className="flex justify-center items-center">
        <img src="/Agent.svg" alt="MeetAgent" />
        </div>
        </div>
      <AgentsSwipper/>
      <Footer/>
      
    </div>
  );
};

export default Home;