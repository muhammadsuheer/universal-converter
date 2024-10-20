import { useState } from "react";
import { assets } from "../data/assets";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderPosition = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="pb-10 md:py-20 mx-2 ">
      <h1 className="mb-12 text-center text-2xl md:-text-3xl lg:text-4xl font semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Remoe background Without <br className="max-md:hidden" /> Losing Quality
      </h1>

      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
        <img
          src={assets.image_w_bg}
          alt=""
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
        />
        <img
          className="absolute w-full  top-0 left-0"
          src={assets.image_wo_bg}
          alt=""
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}% )` }}
        />

        <input
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSliderPosition}
          className="absolute z-10 top-0 left-0 h-100 right-0 bottom-0 slider"
        />
      </div>
    </div>
  );
};

export default BgSlider;
