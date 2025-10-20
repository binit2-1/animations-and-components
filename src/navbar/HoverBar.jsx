import React from "react";

const HoverBar = () => {
  return (
    <div className="sticky w-ful h-full">
      <div className="flex justify-center w-full h-full ">
        <div className="flex justify-flex items-flex px-4 py-3.5 text-white font-[hover-bar] text-3xl bg-liquid-glass w-120 h-15 hover:w-135 hover:h-220 transition-all ease-in-out duration-1000 mt-5 rounded-2xl">
          Hover Me
        </div>
      </div>
    </div>
  );
};

export default HoverBar;
