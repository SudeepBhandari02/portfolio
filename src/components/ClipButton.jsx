import React, { useRef, useEffect, useId } from "react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import ButtonSound from "/audio/buttonSound.mp3";

gsap.registerPlugin(MorphSVGPlugin);

const ClipButton = ({ title, leftIcon, rightIcon }) => {
  const pathRef = useRef(null);
  const audioRef = useRef(null);
  const clipPathId = useId();

  const originalPath = `
    M0.9625,0.05 V0.95 H0.0375 V0.05 H0.9625 Z
  `;
  const clippedPath = `
    M0.025 0.05
    L0.938 0.125
    C0.95 0.125 0.963 0.15 0.963 0.2
    L0.975 0.85
    C0.963 0.9 0.938 0.9 0.913 0.9
    L0.063 0.975
    C0.05 0.975 0.05 0.95 0.05 0.925
    L0.013 0.1
    C0.013 0.075 0.013 0.05 0.025 0.05
    Z
  `;

  useEffect(() => {
    // set initial shape
    gsap.set(pathRef.current, { attr: { d: originalPath } });

    // optional cleanup if you do more in here
    return () => gsap.killTweensOf(pathRef.current);
  }, [originalPath]);

  const handleEnter = () => {
    gsap.to(pathRef.current, {
      duration: 0.5,
      morphSVG: clippedPath,
      ease: "bounce.out",
    });

    const audio = audioRef.current;
    audio.currentTime = 0;
    audio.play();
  };

  const handleLeave = () =>
    gsap.to(pathRef.current, {
      duration: 0.5,
      morphSVG: originalPath,
      ease: "bounce.out",
    });

  return (
    <div className="relative inline-block">
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id={clipPathId} clipPathUnits="objectBoundingBox">
            <path ref={pathRef} d={originalPath} />
          </clipPath>
        </defs>
      </svg>

      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        style={{
          clipPath: `url(#${clipPathId})`,
          WebkitClipPath: `url(#${clipPathId})`,
        }}
        className="text-gray-800 px-6 py-3 text-lg font-robert-regular tracking-wider font-semibold group rounded-lg transition-all duration-300 cursor-pointer hover:bg-black hover:text-[#5542ff]"
      >
        {/* <button className="px-2 py-1 flex items-center justify-center gap-2 rounded-xl border-1 border-gray-950 group-hover:border-none whitespace-nowrap">
          {leftIcon?leftIcon:""}
          <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">{title}</p>
          {rightIcon?rightIcon:""}
        </button> */}
        <button class="cursor-pointer  px-2 py-1 rounded-xl border-[1px] border-slate-800 text-gray-900 group-hover:text-[#5542ff] font-semibold group-hover:border-none whitespace-nowrap flex items-center justify-center shadow-lg">
          <div class="relative overflow-hidden">
            <p class="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] flex items-center justify-center gap-2">
              {leftIcon?leftIcon:""}
              {title}
              {rightIcon?rightIcon:""}
            </p>
            <p class="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              {leftIcon?leftIcon:""}
              {title}
              {rightIcon?rightIcon:""}
            </p>
          </div>
        </button>
      </div>
      <audio
        ref={audioRef}
        src={ButtonSound}
        preload="auto"
        className="hidden"
      />
    </div>
  );
};

export default ClipButton;
