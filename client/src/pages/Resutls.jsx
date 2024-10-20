import { assets } from "../data/assets";

const Resutls = () => {
  return (
    <div className="mx-4 my-3 mt-14 lg:mx-44 min-h-[75vh]">
      <div className="bg-white rounded-lg px-8 py-6 drop-shadow-sm">
        <div className="flex flex-col  sm:grid sm:grid-cols-2  gap-8  ">
          <div className="">
            <p className="font-semibold text-gray-600 mb-2">Original Image</p>
            <img className="rounded-md border" src={assets.image_w_bg} alt="" />
          </div>
          <div className="flex-flex-col relative">
            <p className="font-semibold text-gray-600 mb-2">
              {" "}
              Background Removed{" "}
            </p>
            <div className="relative">
              <img className="relative z-30" src={assets.image_wo_bg} alt="" />
              <img
                className="absolute left-0  right-0 bottom-0 top-0 rounded-md"
                src={assets.bg_layer}
                alt=""
              />
              {/* <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                <div className="border-4 border-violet-600  rounded-full h-12  w-12 border-t-transparent animate-spin"></div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="flex justify-center sm:justify-end  items-center flex-wrap gap-4 mt-6 ">
          <button className="px-8 py-2.5 text-sm  rounded-full text-violet-600 border border-violet-600 hover:scale-105 transition-all duration-700">
            Try Anoter Image
          </button>
          <a
            className=" px-8 py-2.5 text-sm  rounded-full text-neutral-100 border bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:scale-105 transition-all duration-700"
            href="#"
          >
            Upload Other Image
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resutls;
