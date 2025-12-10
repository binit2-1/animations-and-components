import React from "react";
import composterLogo from "../assets/no_bg.png";
import { motion } from "framer-motion";

const ComposterHover = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <motion.div
        className="relative w-[300px] h-[300px] bg-[#AE00FF] cursor-pointer"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-[#AE00FF] z-20"></div>
        <motion.img
          src={composterLogo}
          alt="no_bg"
          className="absolute top-0 left-0 z-10"
          variants={{
            rest: {
              y: 0,
              transition: {
                duration: 0.5,
                ease: [0.5, 0, 0, 1],
              },
            },
            hover: {
              y: -100,
              transition: {
                duration: 0.5,
                ease: [0.58, 0, 0, 1],
              },
            },
          }}
        />
      </motion.div>
    </div>
  );
};

export default ComposterHover;

