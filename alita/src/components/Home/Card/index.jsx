// eslint-disable-next-line react/prop-types
const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-md rounded-3xl p-6 w-full mb-4 flex flex-col justify-between">
      <div className=" h-[19rem]">
        <div className="flex justify-center items-center h-40">
          <img src={image} alt={title} style={{ objectFit: "contain" }} />
        </div>
        <div className="mb-4 mt-4">
          <h4 className="text-xl font-onest font-semibold mb-4">{title}</h4>
          <p className="text-gray-600 font-onest">{description}</p>
        </div>
      </div>
      <div className="mt-10 flex gap-6 justify-center items-center ">
        <button className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-3 text-base font-semibold text-white shadow-sm hover:from-pink-600 hover:to-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">
          Use AGENT
        </button>
      </div>
    </div>
  );
};

export default Card;
