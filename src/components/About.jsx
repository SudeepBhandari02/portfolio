import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import devWorldImage from "../assets/images/devWorldImage.png";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  const handleMouseMove = (e) => { 
    // const { innerWidth, innerHeight } = window;
    // const rotateX = (e.clientY / innerHeight - 0.5) * 50;
    // const rotateY = (e.clientX / innerWidth - 0.5) * 50;
    // const translateX = (e.clientX / innerWidth - 0.5) * 50;
    // const translateY = (e.clientY / innerHeight - 0.5) * 50;

    // gsap.to(".mask-clip-path", {
    //   rotateX: -rotateX,
    //   rotateY,
    //   translateX,
    //   translateY,
    //   duration: 0.4,
    //   ease: "power2.out",
    // });
  };



  useGSAP(() => {
  gsap.timeline({
    scrollTrigger: {
      trigger: "#clip",
      start: "center center",
      end: "+=800 center",
      scrub: 0.5,
      pin: true,
      pinSpacing: true,
    },
  })
  .fromTo(".mask-clip-path",
    { clipPath: "circle(0% at 50% 50%)" },
    { clipPath: "circle(100% at 50% 50%)", ease: "linear" }
  );
});

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[20px]">
          Welcome to My Portfolio
        </p>
        <br />

        <AnimatedTitle
          title="Discover my <br/> projects,<br/> experineces,<br/> achievements<br/> and skills"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>
            "First, solve the problem. Then, write the code." — John Johnson
          </p>
          <p className="text-gray-500">
            Passion fuels the late nights, and consistency shapes the future. A
            great developer isn't made overnight — but line by line, day by day.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen " id="clip">
        <div onMouseMove={handleMouseMove} className="mask-clip-path w-full h-full absolute-center">
          <img
            src={devWorldImage}
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;