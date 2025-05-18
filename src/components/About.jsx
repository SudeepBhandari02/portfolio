import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import devWorldImage from "../assets/images/devWorldImage.png";

import AnimatedTitle from "./AnimatedTitle";
import ClipPath from "./ClipPath";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  //   function clipPathPolygonToPath(polygonString, width, height) {
  //   const points = polygonString
  //     .replace(/polygon|\(|\)/g, '') // remove "polygon(" and ")"
  //     .split(',')
  //     .map(p => {
  //       const [xPercent, yPercent] = p.trim().split(' ');
  //       const x = (parseFloat(xPercent) / 100) * width;
  //       const y = (parseFloat(yPercent) / 100) * height;
  //       return [x, y];
  //     });

  //   const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ') + ' Z';
  //   return path;
  // }

  // Example:
  const clip = "polygon(23% 12%, 74% 15%, 79% 63%, 25% 62%)";
  // const path = clipPathPolygonToPath(clip, 100, 100);
  // console.log(path," ",clip);

  // useGSAP(() => {
  //   const clipAnimation = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#clip",
  //       start: "center center",
  //       end: "+=800 center",
  //       scrub: 0.5,
  //       pin: true,
  //       pinSpacing: true,
  //     },
  //   });

  //   clipAnimation.to(".mask-clip-path", {
  //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //     width: "100vw",
  //     height: "100vh",
  //     borderRadius: 0,
  //     ease: "linear",
  //   });

  // });

  useGSAP(() => {
    const fromPath = `M 644.686 125.443 L 644.686 125.443 Q 652.267 127.998 653.477 135.905 L 714.097 532.102 Q 715.307 540.01 707.311 540.257 L 404.761 549.594 Q 396.765 549.841 396.696 541.841 L 392.456 48.4161 Q 392.387 40.4164 399.968 42.9713 Z`;
    const toPath = `M 0 0 L 100% 0 L 100% 100% L 0 100% Z`; // Full screen rectangle (approximation)

    // Animate both clip-path and SVG path
    gsap.to("#clipped", {
      scrollTrigger: {
        trigger: "#clipped",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      clipPath: `path("${toPath}")`,
      ease: "none",
    });

    gsap.to("#borderPath", {
      scrollTrigger: {
        trigger: "#clipped",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      morphSVG: toPath,
      ease: "none",
    });
  });

  // Mouse-based movement
  // const handleMouseMove = (e) => {
  //   const { innerWidth, innerHeight } = window;
  //   const rotateX = (e.clientY / innerHeight - 0.5) * 20;
  //   const rotateY = (e.clientX / innerWidth - 0.5) * 20;
  //   const translateX = (e.clientX / innerWidth - 0.5) * 20;
  //   const translateY = (e.clientY / innerHeight - 0.5) * 20;

  //   gsap.to(".mask-clip-path", {
  //     rotateX: -rotateX,
  //     rotateY: rotateY,
  //     translateX,
  //     translateY,
  //     duration: 0.4,
  //     ease: "linear",
  //   });
  // };

  //const handleMouseMove = (e) => {};

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

      {/* <div
        className="relative h-dvh w-screen"
        id="clip"
        onMouseMove={handleMouseMove}
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-[80vh] pointer-events-none"
        >
          <path
            className="animated-clip-path-border"
            d="M37 7 L66 1 L66 73 L34 64 Z"
            fill="none"
            stroke="#000"
            strokeWidth="0.5"
          />
        </svg> 

        <div className="mask-clip-path bg-transparent h-dvh custom-clip">
          <img
            src={devWorldImage}
            alt="Background"
            className=" left-0 top-0 size-full object-cover z-20"
          />
        </div>
      </div> */}
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        <div
          id="clipped"
          className="relative w-screen h-screen bg-amber-300"
        >
          <img src={devWorldImage} className="absolut inset-0 w-full h-full object-center" />
        </div>

        {/* <svg
          className="absolute inset-0 z-20 pointer-events-none bg-transparent"
          viewBox="350 0 400 600"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            id="borderPath"
            d="M 644.686 125.443 L 644.686 125.443 Q 652.267 127.998 653.477 135.905 L 714.097 532.102 Q 715.307 540.01 707.311 540.257 L 404.761 549.594 Q 396.765 549.841 396.696 541.841 L 392.456 48.4161 Q 392.387 40.4164 399.968 42.9713 Z"
            fill="none"
            stroke="black"
            stroke-width="2"
          />
        </svg> */}
      </div>

      {/* <ClipPath/> */}
    </div>
  );
};

export default About;
