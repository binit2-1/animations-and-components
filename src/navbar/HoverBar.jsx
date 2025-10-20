import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);


const HoverBar = () => {
  const handleHoverEnter = () => {
    gsap.from(".navbar",{
      width:"480px",
      height:"60px",
      duration:0.5,
      ease:"power2.out"
    })
    gsap.to(".navbar",{
      width:"540px",
      height:"880px",
      duration:0.5,
      ease:"power2.out"
    })
  }
  const handleHoverLeave = () => {
    gsap.from(".navbar",{
      width:"540px",
      height:"880px",
      duration:0.5,
      ease:"power2.out"
    })
    gsap.to(".navbar",{
      width:"480px",
      height:"60px",
      duration:0.5,
      ease:"power2.out"
    })

  }

  return (
    <div className="sticky w-full h-full">
      <div className="flex justify-center w-full h-full">
        <div onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} className="navbar absolute flex px-4 py-3.5 text-white font-[hover-bar] text-3xl bg-liquid-glass w-120 h-15 mt-5 rounded-2xl">
          Hover Me
        </div>
      </div>
    </div>
  );
};

export default HoverBar;
