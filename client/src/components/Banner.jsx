import { assets } from "../data/assets";

const Banner = () => {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      {/* {"Left Side "} */}
      <div>
        <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight ">
          Remove the <br className="max-md:hidden" />
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500  bg-clip-text text-transparent">
            Background
          </span>{" "}
          From <br className="max-md:hidden" /> Images For Free
        </h2>
        <p className="text-[15px] my-6 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et excepturi
          <br className="max-md:hidden" /> minima in quas, nostrum ullam atque
          hic voluptatem velit.
        </p>
        <div>
          <input type="file" name="" id="upload1" hidden />
          <label
            className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r m-auto from-violet-600 to-fuchsia-500 hover:scale-105 transition-all duration-700"
            htmlFor="upload1"
          >
            <img width={20} src={assets.upload_btn_icon} alt="" />{" "}
            <p className="text-white text-sm ">Upload Image</p>
          </label>
        </div>
      </div>
      {/* {"Right Side "} */}
      <div>
        <img className="md:max-w-md  w-auto" src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
