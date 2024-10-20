import { testimonialsData } from "../data/assets";

const Testimonials = () => {
  return (
    <div>
      <h1 className="mb-12 text-center text-2xl md:-text-3xl lg:text-4xl font semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Customer Testimonials
      </h1>
      <div className="grid gap-10 grid-col-1 md:grid-cols-2  px-4 py-8 mx-auto max-w-4xl  ">
        {testimonialsData.map((items, index) => (
          <div
            className="bg-white rounded-xl p-6 drop-shadow-md max-w-lg m-auto hover:scale-105 transition-all  duration-200"
            key={index}
          >
            <p className="text-4xl text-gray-500">”</p>
            <p className="text-sm text-gray-500">{items.text}</p>
            <div className="flex  items-center gap-3 mt-5">
              <img className="w-9 rounded-full" src={items.image} alt="" />
              <div>
                <p className="">{items.author}</p>
                <p className="text-sm text-gray-600">{items.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
