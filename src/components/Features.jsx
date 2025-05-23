import { useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { TiLocationArrow } from "react-icons/ti";
import ClipButton from "./ClipButton";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ imageSrc, title, description, gitLink }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <div className="absolute left-0 top-0 w-full h-full">
        {/* image showcase section */}
      </div>
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-sm md:text-base">{description}</p>
          )}
        </div>

        {gitLink && (
          <a
            target="_blank"
            href={gitLink}
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs  text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <FaGithub className="relative z-20 text-white" />
            <p className="relative z-20 text-white ">GitHub</p>
          </a>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section id="projects" className="bg-black pb-10">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web lg:text-3xl text-blue-50">
          Let's Dive into my Projects
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Welcome to my projects showcase, where I highlight a range of
          full-stack MERN applications, cross-platform React Native mobile apps,
          and advanced RAG-powered agents built with clean, modular
          architecture, end-to-end CI/CD workflows, and thorough documentation
          to demonstrate both technical depth and real-world impact.
        </p>
      </div>

      <div className="grid h-[200vh] w-full grid-cols-2 grid-rows-5 gap-7">

        <BentoTilt className="border-hsla relative mb-7 w-full row-span-1 col-span-2 md:rowspan-1   overflow-hidden rounded-md h-auto">
          <BentoCard
            title={
              <>
                s<b>n</b>apport
              </>
            }
            description="A automation tool to clip text and objects from your mobile camera directly to your desktop."
            imageSrc={[]}
            gitLink="https://github.com/SudeepBhandari02/vrCopyPaste"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 col-span-2 me-18 md:col-span-1 md:row-span-2 md:me-0">
          <BentoCard
            title={
              <>
                <b>dinetime</b>
              </>
            }
            description="A restaurant booking mobile app built using react-native and firebase."
            imageSrc={[]}
            gitLink="https://github.com/SudeepBhandari02/vrCopyPaste"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 col-span-2 ms-18 md:col-span-1 md:ms-0">
          <BentoCard
            title={
              <>
                <b>Notes Taker</b>
              </>
            }
            description="Full Stack MERN and React native Mobile App for taking live notes."
            imageSrc={[]}
            gitLink="https://github.com/SudeepBhandari02/vrCopyPaste"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 
        col-span-2 me-16 md:col-span-1 md:row-span-1 md:me-0">
          <BentoCard
            title={
              <>
                <b>ToDesktop landing page</b>
              </>
            }
            description="Fully tailwind built landing page of popular ToDesktop website."
            imageSrc={[]}
            gitLink="https://github.com/SudeepBhandari02/vrCopyPaste"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2 row-span-1 col-span-2 ms-24 md:col-span-1 md:ms-0">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2 hidden md:block">
          <div className="w-full h-full bg-gray-600 p-4">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>
          </div>
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
