/* eslint-disable react/prop-types */
const Screen = ({ title, description, image, activeDot, bottomText }) => {
  return (
    <div className="relative w-full max-w-full mx-auto py-8 flex flex-col justify-center items-center">
      <div className="aspect-[10/19] w-[80%] bg-black rounded-[40px] overflow-hidden shadow-xl">
        {/* iOS Status Bar */}
        <div className="flex justify-between items-center px-5 py-3">
          <span className="text-[15px] font-medium text-white">9:41</span>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 20 16"
              fill="currentColor"
            >
              <path d="M10 3c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
            </svg>
            <div className="w-5 h-2.5 rounded border border-white relative">
              <div className="absolute right-0.5 top-0.5 bottom-0.5 left-1 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pt-12 pb-8 flex flex-col h-[calc(100%-48px)] ">
          <div className="flex-1 flex flex-col items-center justify-center">
            <img src={image} alt={title} className="w-48 h-48 mb-8" />
            <h3 className="text-white text-2xl font-bold text-center mb-4">
              {title}
            </h3>
            <p className="text-white/80 text-center text-sm">{description}</p>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-8">
            <div
              className={`w-6 h-1 rounded-full ${
                activeDot === 1 ? "bg-pink-500" : "bg-gray-600"
              }`}
            ></div>
            <div
              className={`w-6 h-1 rounded-full ${
                activeDot === 2 ? "bg-pink-500" : "bg-gray-600"
              }`}
            ></div>
            <div
              className={`w-6 h-1 rounded-full ${
                activeDot === 3 ? "bg-pink-500" : "bg-gray-600"
              }`}
            ></div>
          </div>
        </div>
      </div>
      {/* Bottom Text */}
      <div className="mt-4 text-sm text-gray-900 text-center flex flex-col items-center justify-center w-[80%]">
            {bottomText}
          </div>
    </div>
  );
};

export default Screen;
