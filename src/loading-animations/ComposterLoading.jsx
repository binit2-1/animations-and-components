import React from "react";
import composterLogo from "../assets/no_bg.png";
import { motion } from "framer-motion";

const ComposterLoading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="relative w-[300px] h-[300px] bg-[#AE00FF]">
        <div className="absolute top-0 left-0 w-full h-2 bg-[#AE00FF] z-20"></div>
        <motion.img
          src={composterLogo}
          alt="no_bg"
          className="absolute top-0 left-0 z-10"
          animate={{ y: [0, -100, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            times: [0, 0.5, 1],
            ease: [
              [0.58, 0, 0, 1],
              [0.5, 0, 0, 1],
            ],
          }}
        />
      </div>
    </div>
  );
};

export default ComposterLoading;
