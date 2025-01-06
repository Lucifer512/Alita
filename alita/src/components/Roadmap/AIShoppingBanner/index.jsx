const AIShoppingBanner = () => {
  return (
    <div className="relative min-h-screen">
      <div className="relative max-w-full mx-auto px-4 pt-20 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          <div className="relative col-span-1 lg:col-span-6 flex flex-col justify-end items-end" >
            <div className="abdolute w-[95%]" >
              <img
                src="/Shopping-Mobile.svg"
                alt="AI Shopping Interface"
                className="rounded-[38px]"
              />
            </div>
          </div>
          <div className="relative col-span-1 lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col justify-end items-start col-span-1 md:col-span-2">
              <h2 className="text-[4rem] md:text-[5rem] lg:text-[66.6px] font-normal text-[#1D1D1D] font-onest">
                AI Shopping
              </h2>
            </div>
            <div className="flex flex-col justify-end items-center">
              <div className="bg-white/70 p-6 rounded-[38px] shadow-[0px_4px_15px_rgba(0,0,0,0.15)] h-[10rem] w-[100%]">
                <h3 className="font-medium mb-2 w-[80%]">Find Best Prices</h3>
                <p className="text-gray-600 w-[80%]">
                  AI quickly locates the lowest prices for trending products.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-end items-center">
              <div className="bg-[#CFEAF8] p-6 rounded-[38px] shadow-[0px_4px_15px_rgba(0,0,0,0.15)] h-[10rem] w-[100%]">
                <h3 className=" font-medium mb-2 w-[80%]">
                  Discover Fast Discounts
                </h3>
                <p className="text-gray-600 w-[80%]">
                  Stay ahead with real-time notifications for limited-time
                  deals.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center">
              <div className="bg-white/70 p-6 rounded-[38px] shadow-[0px_4px_15px_rgba(0,0,0,0.15)] h-[10rem] w-[100%]">
                <h3 className=" font-medium mb-2 w-[80%]">Resell for Profit</h3>
                <p className="text-gray-600 w-[80%]">
                  Identify items that can be resold at higher prices on
                  platforms like StockX.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center">
              <div className="bg-[#CFEAF8] p-6 rounded-[38px] shadow-[0px_4px_15px_rgba(0,0,0,0.15)] h-[10rem] w-[100%]">
                <h3 className=" font-medium mb-2 w-[80%]">Maximize Value</h3>
                <p className="text-gray-600 w-[80%]">
                  AI ensures you secure the best deals to boost resale
                  profitability.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col lg:flex-row justify-center items-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1D1D1D] max-w-lg">
            Your AI Concierge for Growing Business.
          </h2>
          <img
            src="/Screen1.svg"
            alt="Alita AI Assistant"
            className="w-[200px] md:w-[250px] lg:w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AIShoppingBanner;
