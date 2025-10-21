import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const HoverBar = () => {
  const containerRef = useRef(null);
  const optionsRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
  const el = containerRef.current;
  const opts = optionsRef.current;
  if (!el || !opts) return;

    const expandDur = 1.0;

    gsap.set(el, { width: "480px", height: "60px" });
    gsap.set(opts, { opacity: 1, duration: 0.01, pointerEvents: "none" });

    tlRef.current = gsap.timeline({ paused: true });

    tlRef.current.to(el, {
      width: "540px",
      height: "880px",
      duration: expandDur,
      ease: "expo.inOut",
    });

    const innerTexts = opts.querySelectorAll(".nav-item-inner");
    gsap.set(innerTexts, { yPercent: 100 });

    tlRef.current.fromTo(
      innerTexts,
      { yPercent: 100 },
      {
        yPercent: 0,
        stagger: { each: 0.04, from: "end" },
        duration: 0.7,
        ease: "expo.inOut",
        onStart: () => gsap.set(opts, { pointerEvents: "auto" }),
      },
      `-=${expandDur / 2}`
    );

    const liElements = Array.from(opts.querySelectorAll("li"));
    const underlineEls = liElements.map((li) => li.querySelector(".nav-underline"));
    underlineEls.forEach((u) => {
      if (u) gsap.set(u, { scaleX: 0, transformOrigin: "left center" });
    });

    const handlers = liElements.map((li, i) => {
      const u = underlineEls[i];
      const enter = () => {
        if (!u) return;
        gsap.killTweensOf(u);
        gsap.to(u, { scaleX: 1, transformOrigin: "left center", duration: 0.34, ease: "expo.inOut" });
      };
      const leave = () => {
        if (!u) return;
        gsap.killTweensOf(u);
        gsap.to(u, { scaleX: 0, transformOrigin: "right center", duration: 0.34, ease: "expo.inOut" });
      };
      li.addEventListener("mouseenter", enter);
      li.addEventListener("mouseleave", leave);
      return { li, enter, leave };
    });

    return () => {
      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }
      handlers.forEach(({ li, enter, leave }) => {
        li.removeEventListener("mouseenter", enter);
        li.removeEventListener("mouseleave", leave);
      });
      gsap.killTweensOf([el, opts, ...underlineEls]);
    };
  }, []);

  const handleHoverEnter = () => {
    if (!tlRef.current) return;
    tlRef.current.timeScale(1);
    tlRef.current.play();
  };

  const handleHoverLeave = () => {
    if (!tlRef.current) return;
    tlRef.current.timeScale(2);
    tlRef.current.reverse();
  };

  return (
    <div className="sticky w-full h-full">
      <div className="flex justify-center w-full h-full">
        <div
          ref={containerRef}
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
          className="navbar relative flex flex-col px-4 py-3.5 text-white font-[hover-bar] text-3xl bg-liquid-glass mt-5 rounded-2xl overflow-hidden"
        >
          <div className="z-10 pointer-events-none">Hover Me</div>

          <ul
            ref={optionsRef}
            className="absolute text-5xl inset-0 flex flex-col px-3 py-2 justify-center gap-0 leading-none z-20"
          >
            <li className="overflow-hidden py-0">
              <span className="nav-item-inner inline-block relative pt-2 leading-tight cursor-pointer">
                HOME
                <span className="text-sm text-gray-400 ml-2">01</span>
                <span
                  className="nav-underline block absolute left-0 bottom-0 h-[2px] bg-white w-full"
                  style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
                />
              </span>
            </li>
            <li className="overflow-hidden py-0">
              <span className="nav-item-inner inline-block relative pt-2 leading-tight cursor-pointer">
                PROJECTS
                <span className="text-sm text-gray-400 ml-2">02</span>
                <span
                  className="nav-underline block absolute left-0 bottom-0 h-[2px] bg-white w-full"
                  style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
                />
              </span>
            </li>
            <li className="overflow-hidden py-0">
              <span className="nav-item-inner inline-block relative pt-2 leading-tight cursor-pointer">
                ABOUT
                <span className="text-sm text-gray-400 ml-2">03</span>
                <span
                  className="nav-underline block absolute left-0 bottom-0 h-[2px] bg-white w-full"
                  style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
                />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HoverBar;
