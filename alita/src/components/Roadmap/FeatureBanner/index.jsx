const FeatureBanner = () => {
    return (
      <div className="relative min-h-[80vh] overflow-hidden pt-5 mt-5">
  
        {/* Main Content Container */}
        <div className="relative max-w-full mx-auto h-screen flex items-center justify-between pl-8 pr-0">
          {/* Left Section - Robot */}
          <div className="w-1/3">
            <img
              src="/Feature-Left.svg"
              alt="Alita AI Assistant"
            />
          </div>
  
          {/* Middle Section - Feature Cards */}
          <div className="w-1/4 space-y-6">
            {/* Task Management Card */}
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Task Management
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Experience seamless, non-custodial crypto investments with Terminal AI`s blockchain-powered execution interface, simplifying complex operations for all users.
              </p>
            </div>
  
            {/* ALITA Token Card */}
            <div className="bg-blue-50 rounded-3xl p-6 shadow-lg">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                $ALITA Token
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Unlock profitable strategies with controllable risks and a fully transparent, traceable deal history, powered by $ALITA tokenomics.
              </p>
            </div>
  
            {/* AI Analysis Card */}
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                AI Deep On-Chain and Off-Chain Market Analysis
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Leverage advanced AI tools for deep on-chain and off-chain insights, enabling smarter, more efficient trading decisions.
              </p>
            </div>
          </div>
  
          {/* Right Section - Trading Interface */}
          <div className="w-1/3 h-full flex flex-col justify-start items-start">
            <div className="relative flex flex-col justify-start items-start">
              <img
                src="/Feature-Right.svg"
                alt="Trading Interface Desktop"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default FeatureBanner
  
  