const BannerTwo = () => {
  return (
    <div className="relative overflow-hidden min-h-[90vh] mt-20" style={{background: "url('/BannerTwo-Back.svg')", backgroundSize: "cover", backgroundPosition: "center"}}>
      {/* Content Container */}
      <div className="relative max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[60vh] flex flex-col justify-end">
        {/* Text Content - Left Side */}
        <div className="max-w-2xl text-start flex flex-col ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            Terminal AI API SDK
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl ml-2">
            Integrates ALITA AI blockchain technology and Web3 tools into Web2
            and Web3 platforms, boosting them with AI-powered crypto investment
            features.
          </p>
        </div>

        {/* TradingView Logo */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <img
            src="/placeholder.svg?height=60&width=240"
            alt="TradingView"
            className="h-12 opacity-90"
          />
        </div> */}
      </div>
      <div className="absolute top-0 right-[15%] w-[40%]">
          <img
            src="/BannerTwo-Illustration.svg"
            alt="Terminal AI API SDK Illustration"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Bottom Text - Full Width */}
        <div className="absolute bottom-24 left-0 w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-center">
            Say Hello to ALITA: Your AI-Powered Crypto Partner!
          </h2>
        </div>
        <div className="absolute -bottom-4 left-0 w-full px-4 sm:px-6 lg:px-8">
          <img src="/FloatText.svg" alt="Alita Logo" className="w-96 mx-auto" />
        </div>
    </div>
  );
}

export default BannerTwo;

