import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import devWorldImage from "../assets/images/devWorldImage.png"

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.from(".mask-clip-path", {
        clipPath:"polygon(29% 10%, 76% 2%, 76% 91%, 24% 79%)",
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

//     useGSAP(() => {
//     gsap.set(".mask-clip-path", {
//       clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Start: full box
//     });

//     gsap.to(".mask-clip-path", {
//       clipPath: "polygon(14% 14%, 72% 8%, 90% 87%, 7% 90%)", // End shape
//       scrollTrigger: {
//         trigger: "#clip",
//         start: "top center", // animation starts when box hits center of viewport
//         end: "bottom top",   // ends when box leaves top
//         scrub: true,
//       },
//       ease: "power1.inOut",
//     });
//   }, []);

  // useGSAP(() => {
  //   gsap.to(".mask-clip-path", {
  //     scale: 1.2,
  //     scrollTrigger: {
  //       trigger: "#clip",
  //       start: 'top bottom', // image enters viewport
  //       end: 'top top', // image reaches top
  //       scrub: true,
  //     },
  //   });
  // }, []);

  // Mouse-based movement
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const rotateX = (e.clientY / innerHeight - 0.5) * 20;
    const rotateY = (e.clientX / innerWidth - 0.5) * 20;
    const translateX = (e.clientX / innerWidth - 0.5) * 20;
    const translateY = (e.clientY / innerHeight - 0.5) * 20;

    gsap.to(".mask-clip-path", {
      rotateX: -rotateX,
      rotateY: rotateY,
      translateX,
      translateY,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

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

      <div className="relative h-dvh w-screen" id="clip" onMouseMove={handleMouseMove}>
        <div className="mask-clip-path about-image">
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
