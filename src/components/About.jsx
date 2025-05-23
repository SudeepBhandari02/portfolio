import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import devWorldImage from "../assets/images/devWorldImage.png";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // const handleMouseMove = (e) => {
  //   const { innerWidth, innerHeight } = window;
  //   const rotateX = (e.clientY / innerHeight - 0.5) * 50;
  //   const rotateY = (e.clientX / innerWidth - 0.5) * 50;
  //   const translateX = (e.clientX / innerWidth - 0.5) * 50;
  //   const translateY = (e.clientY / innerHeight - 0.5) * 50;
  //   gsap.to(".mask-clip-path", {
  //     rotateX: -rotateX,
  //     rotateY,
  //     translateX,
  //     translateY,
  //     duration: 0.4,
  //     ease: "power2.out",
  //   });
  // };

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#clip",
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      })
      .fromTo(
        ".mask-clip-path",
        { clipPath: "circle(0% at 50% 50%)" },
        { clipPath: "circle(100% at 50% 50%)", ease: "linear" }
      );
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mt-36 flex flex-col items-center justify-center gap-5">
        <p className="font-general text-sm uppercase md:text-[20px] ">
          Welcome to My Portfolio
        </p>
        
      </div>

      <div className="w-screen h-dvh  relative" id="clip">
        <AnimatedTitle
          title="About me"
          containerClass="mt-5 !text-black text-center"
        />
        <div className=" w-full flex flex-col items-center justify-center px-2 lg:px-20 mt-2 gap-20 md:gap-22 relative">
          <div className="bg-[#5542ff] row-span-3/5 p-0 rounded-t-2xl rounded-br-2xl relative border-none outline-none flex flex-col w-full justify-between">
            <p className="text-md md:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed md:leading-loose font-general indent-8 px-5 pt-5 ">
              I am a Computer Science undergraduate at Acharya Institute of
              Technology, Bengaluru (Batch of 2022–2026), with a strong
              foundation in full-stack development using the MERN stack and
              cross-platform mobile applications with React Native. My interests
              extend to Machine Learning, Artificial Intelligence, and Data
              Structures & Algorithms, with practical experience in
              Retrieval-Augmented Generation (RAG) systems.
            </p>
            <div className="rounded-b-2xl rounded-br-2xl outline-none border-none  h-16 w-[49%] absolute bottom-0 left-0 translate-y-16  bg-[#5542ff]">
              <div className="absolute top-0 right-0 h-5 w-5 bg-[#5542ff]  translate-x-5 -z-10">
                <div className="w-full h-full rounded-tl-2xl bg-white "></div>
              </div>
            </div>
          </div>
          <div className="bg-[#99d98c] row-span-3/5 p-0 rounded-b-2xl rounded-tl-2xl relative border-none outline-none flex flex-col w-full h-full justify-between">
            <div className="inline-block  text-white rounded-tl-2xl rounded-t-2xl outline-none border-none  h-16 w-[49%] absolute top-0 right-0  -translate-y-16 bg-[#99d98c]">
              <div className="absolute bottom-0 left-0  h-3 w-3 bg-[#99d98c]  -translate-x-3 -z-10">
                <div className="w-full h-full rounded-br-2xl bg-white z-0"></div>
              </div>
            </div>

            <div className="">
              <p className="text-md md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed md:leading-loose font-general px-5 pt-5 pb">
                Beyond technical skills, I am a keen listener, effective
                communicator, and collaborative team player. I am eager to
                contribute to innovative projects and continuously enhance my
                skill set in dynamic environments.
              </p>
              <p className="text-md md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed md:leading-loose font-general px-5 pb-2">
                Passion fuels the late nights, and consistency shapes the
                future. A great developer isn't made overnight — but line by
                line, day by day.
              </p>
            </div>
          </div>
          <div className="w-full z-10 -mt-16 hidden md:flex flex-col items-center justify-center gap-2 px-10 lg:px-20 ">
            <p className="text-md md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed md:leading-loose text-center font-semibold">
              "First, solve the problem. Then, write the code."{" "}
              <span className="font-light">— John Johnson</span>
            </p>
          </div>
        </div>

        <div className="mask-clip-path w-full h-full absolute-center  z-20">
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
