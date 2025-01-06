const BannerOne = () => {
  return (
    <div className="relative min-h-[75vh] w-full mt-32" style={{backgroundImage: "url('/BannerOne-Back.svg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>

      {/* Content container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16" >
        {/* Text content */}
        <div className="max-w-xl relative z-10">
          <h1 className="text-4xl font-light tracking-tight text-gray-700 sm:text-5xl">
            ALITA AI Protocol
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            A Web3 AI execution technology that provides you with access to
            CeFi, DeFi, and NFT crypto markets through an all-in-one
            conversational AI interface.
          </p>
          <div className="mt-10 flex gap-6">
            <button className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-3 text-base font-semibold text-white shadow-sm hover:from-pink-600 hover:to-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">
              LAUNCH AGENT
            </button>
          </div>
        </div>

        {/* Absolutely positioned robot image */}
        <div className="absolute -top-20 right-10  w-1/2">
          <div className="relative h-full">
            <img
              src="/BannerOne-Robot.svg"
              alt="Alita AI Robot"
              className="absolute right-0 top-1/2 max-w-none w-[90%] xl:w-[80%]"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 text-center">
          <div className="relative inline-block">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 fill-current text-black"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <a
              href="https://github.com/alita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-pink-600"
            >
              GITHUB
            </a>
          </div>
          <p className="mt-4 text-lg text-gray-600">
            Your AI Concierge for Crypto Markets!
          </p>
        </div>
    </div>
  );
};

export default BannerOne;
