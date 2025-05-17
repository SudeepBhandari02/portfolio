import React, { useRef, useState } from "react";
import heroVideo from "../assets/videos/heroVideo.mp4";
import { FaDownload } from "react-icons/fa6";
import centerImage from "../assets/images/profileImage.png";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

useGSAP(() => {
  gsap.set('#video-frame', {
    clipPath: 'polygon(14% 60%, 72% 60%, 90% 87%, 7% 90%)',
  });

  gsap.from("#video-frame", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "linear",
    scrollTrigger: {
      trigger: "#video-frame",
      start: "center center",
      end: "bottom top",
      scrub: true,
    }
  });
});



  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div
        className="relative z-10 h-dvh w-screen overflow-x-hidden rounded-lg bg-blue-75"
        id="video-frame"
      >
        <div className="">
          <div className="mask-clip-path absolute-center absolute z-50 size-48 cursor-pointer overflow-hidden rounded-lg">
            <div className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
              <img
                src={centerImage}
                alt="sudeepsh"
                className="h-full w-full object-cover object-center transition-all duration-500 ease-in hover:scale-110 hover:opacity-100"
              />
            </div>
          </div>
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-[60%_80%] lg:object-right"
          />
        </div>
        <div className="absolute bottom-5 right-5 z-40">
          <p className="text-white font-bold text-2xl ml-2 special-font">AKA</p>
        <h1 className="special-font hero-heading  text-blue-75">
          <b> STYLEZEE</b>
        </h1>
        </div>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-8xl text-blue-100">
              s<b>udee</b>p <br />b<b>handa</b>ri
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Fullstack web and mobile developer <br /> MERN + React Native
            </p>
            
            <Button
              id="download-resume" 
              title="Resume"
              leftIcon={<FaDownload className="text-gray-800"/>}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 right-5">
        <h1 className="special-font hero-heading">
          <b className="text-black"> STYLEZEE</b>
        </h1>
        </div>
    </div>
  );
}

export default Hero;
