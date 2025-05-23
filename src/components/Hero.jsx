import React from "react";
import heroVideo from "../assets/videos/HeroVideo.mp4";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import centerImage from "../assets/images/profileImage.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const IconLinks = ({ icon, text, href }) => {
  return (
    <div className="group relative bg-white rounded-full p-2 hover:scale-125 duration-200">
      <a className=" hover:text-blue-500" href={href} target="_blank">
        {icon}
      </a>
      <span
        className="absolute -top-14 left-[50%] -translate-x-[50%] 
            z-20 origin-left scale-0 px-3 rounded-lg border 
            border-gray-300 bg-white py-2 text-sm font-bold
            shadow-md transition-all duration-300 ease-in-out 
            group-hover:scale-100"
      >
        {text}
        <span></span>
      </span>
    </div>
  );
};

function Hero() {
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 60%, 72% 60%, 90% 87%, 7% 90%)",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "linear",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <div id="hero" className="relative h-dvh w-screen overflow-x-hidden">
      <div
        className="relative z-10 h-dvh w-screen overflow-x-hidden bg-blue-75"
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
            <p className="text-white font-bold text-4xl ml-2 special-font">
              I am
            </p>
            <h1 className="special-font hero-heading text-8xl ">
              s<b>udee</b>p <br />b<b>handa</b>ri
            </h1>

            <p className="mb-5 max-w-64  text-white text-left font-general font-semibold -tracking-wider text-xl">
              Fullstack web , mobile <br />
              developer (MERN + React Native) <br />
              and RAG expert
            </p>

            <div className="flex gap-4 max-md:flex-col items-end my-2">
              <IconLinks
                icon={<FiGithub size={30} />}
                text="Github"
                href="https://github.com/SudeepBhandari02"
              />
              <IconLinks
                icon={<FaLinkedinIn size={30}/>}
                text="LinkedIn"
                href="https://www.linkedin.com/in/sudeepbhandari02"
              />
              <IconLinks
                icon={<FaXTwitter size={30}/>}
                text="X"
                href="https://x.com/Soo__deeep"
              />
              
            </div>
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
