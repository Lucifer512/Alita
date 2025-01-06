const IntegrationBanner = () => {
  return (
    <div className="w-full h-[90vh] flex justify-center items-center px-4 py-10">
      <div className="w-1/2 h-full">
        <div className="flex flex-col justify-center items-start space-y-4 h-1/4 px-10 ">
          <p className="font-onest text-[2rem]">Best Integrations</p>
        </div>
        <div className="flex flex-col justify-center items-start space-y-4 h-3/4 px-10 w-[90%]">
            <h1 className="font-onest text-[3.5rem]">AI Integration with Top TradingView Traders</h1>
            <ul className="list-disc pl-5 space-y-2">
                <li className="font-onest">Use AI to find top TradingView strategies, forecasts, and traders while evaluating their performance potential.</li>
                <li className="font-onest">Let AI automatically execute and implement the best-selected strategies for optimal results.</li>
                <li className="font-onest">Perform real-time AI analysis to make informed adjustments to your trading strategies.</li>
            </ul>
        </div>
      </div>
      <div className="w-1/2 h-full">
        <div className="flex flex-col justify-start items-center space-y-4 h-full">
            <img src="/Integration-Trading.svg" alt="Integration Banner" className="h-3/4" />
        </div>
      </div>
    </div>
  );
};

export default IntegrationBanner;
