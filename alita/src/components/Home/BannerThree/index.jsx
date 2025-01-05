const BannerThree = () => {
  return (
    <div className="relative min-h-[170vh] px-4 overflow-hidden flex flex-col justify-between pb-20">
    <div className="absolute top-0 left-0 w-1/2 h-full" style={{backgroundImage: "url('/BannerThree-Back.svg')", backgroundSize: "cover", backgroundPosition: "center"}}>
    </div>
      <div className="relative w-full h-full">
        {/* Main Heading */}
        <div className="relative w-full top-16 flex justify-center items-center overflow-hidden text-center px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-light leading-tight font-onest">
            Connect With 190K+<br className="hidden md:block" />
            Crypto Traders And Investors<br className="hidden md:block" />
            Worldwide
          </h2>
        </div>
        
        {/* Main Robot with Coin */}
        <div className="absolute top-40 left-4 md:left-8 lg:left-16 w-1/3 md:w-1/3 lg:w-1/4">
          <img
            src="/BannerThree-Robot.svg"
            alt="Alita Robot with Coin"
            className="w-full h-auto"
          />
        </div>

        {/* Trading Interface Screens */}
        <div className="absolute top-32 right-5 w-1/2 md:w-1/2 lg:w-1/2">
          {/* Laptop/Monitor Screen */}
          <img
            src="/BannerThree-Electronics.svg"
            alt="Trading Chart Interface"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="relative w-full max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Section */}
        <div className="relative">
          
          {/* Content */}
          <div className="relative text-center max-w-lg mx-auto">
            <div className="h-[200px] relative mb-8">
              <img
                src="/BannerThree-LeftRobot.svg"
                alt="AI Assistant Robot"
                className="absolute left-1/2 -translate-x-1/2 w-[8rem] hover:-translate-y-2 transition-transform duration-300"
              />
            </div>
            <h3 className="text-2xl font-medium font-onest text-black/90 mb-6">
              AI ASSISTANCE`S AT YOUR FINGER TIPS
            </h3>
            <p className="text-[15px] leading-relaxed font-onest text-black/70">
              Alita AI redefines blockchain automation by introducing 
              no-code intelligent agents designed to operate seamlessly 
              on the Solana network. Users can easily craft, deploy, and 
              monetize agents tailored for decentralized finance (DeFi), 
              NFTs, and Web3 innovations. Built with a focus on user 
              accessibility and scalability, this platform streamlines 
              blockchain interactions for businesses and individuals, 
              removing traditional barriers to entry.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative text-center max-w-lg mx-auto">
          <div className="h-[200px] relative mb-8">
            <img
              src="/BannerThree-RightRobot.svg"
              alt="No Code Robot Assistant"
              className="absolute left-1/2 -translate-x-1/2 w-[10rem] hover:-translate-y-2 transition-transform duration-300"
            />
          </div>
          <h3 className="text-2xl font-medium text-black/90 mb-6">
            NO CODE NO PROBLEM!
          </h3>
          <p className="text-[15px] leading-relaxed text-black/70">
            Agents are designed to make launching your cryptocurrency easy. 
            Just type `I want to launch a coin,` and Agent Solara will create 
            it for you in seconds. Need a logo? Agent Astra has you covered 
            he will generate one based on your past chats.
            <br /><br />
            Not sure how to create AMM pools? Agent Nexa is ready to help. 
            Want to stake your $ALITA with one click? Agent Lyra will do 
            everything for you. All you need, all in one place, with no coding required.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BannerThree;
