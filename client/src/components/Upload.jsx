import { assets } from "../data/assets";

const Upload = () => {
  return (
    <div className="">
      <h2 className="py-6 md:py-16 text-center text-2xl md:-text-3xl lg:text-4xl font semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        See The Magic Now
      </h2>

      <div className="text-center mb-14">
        <input type="file" name="" id="upload2" hidden />
        <label
          className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r m-auto from-violet-600 to-fuchsia-500 hover:scale-105 transition-all duration-700"
          htmlFor="upload2"
        >
          <img width={20} src={assets.upload_btn_icon} alt="" />{" "}
          <p className="text-white text-sm ">Upload Image</p>
        </label>
      </div>
    </div>
  );
};

export default Upload;
