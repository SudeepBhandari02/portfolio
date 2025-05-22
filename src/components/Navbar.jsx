import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { FaBarsStaggered,FaXmark,FaDownload } from "react-icons/fa6";
import profileImage from "../assets/images/profileImage.png";
import resume from "../assets/Sudeep_Bhandari_Resume.pdf";
import { useGSAP } from "@gsap/react";
import AnimatedNavbar from "./AnimatedNavbar";
import AnimatedTitle from "./AnimatedTitle";



const NavBar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);
  const smallNavRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();

   useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

useEffect(() => {
  if (smallNavRef.current) {
    if (isMenuOpen) {
      gsap.fromTo(
        smallNavRef.current,
        { x: -300 },
        { x: 0, duration: 0.5, ease: "power2.out" }
      );
    } else {
      gsap.to(smallNavRef.current, {
        x: -300,
        duration: 0.5,
        ease: "power2.in"
      });
    }
  }else{
    console.log(smallNavRef.current);
    
  }
}, [isMenuOpen]);


  
  const navItems = ["Hero", "About", "Projects", "Skills", "Contact"];

  

  // Refs for audio and navigation container
  
  

  
  

  // Toggle audio and visual indicator
  

  // Manage audio playback
 

  



  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 mx-2"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <img src={profileImage} alt="logo" className="w-16" />

            <a href={resume} download={resume} className="hidden md:flex items-center justify-center gap-1 bg-blue-50 rounded-full px-4 py-2">
              <FaDownload className="text-gray-800"/>
              <span className="text-gray-800">Resume</span>
            </a>
          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {/* {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))} */}
              <AnimatedNavbar/>
            </div>

            <div className="flex gap-2 items-center">
              <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5 px-4 py-2 cursor-pointer"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
            {isMenuOpen ? (
              <div
                onClick={() => {
                          setIsMenuOpen((prev) => !prev);
                        }}
                ref={smallNavRef}
                className="fixed inset-0 bg-black z-50 md:hidden h-screen w-screen"
              >
                <div className="flex flex-col items-center py-8 h-full">
                  <div className="flex flex-col gap-8">
                    <div className="w-full px-4 flex items-center justify-end ">
                      <div
                      className="cursor-pointer text-white"
                      >
                        <FaXmark size={40} />
                      </div>
                    </div>
                    {navItems.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.toLowerCase()}`}
                        className="nav-hover-btn my-2"
                      >
                        <AnimatedTitle title={item} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setIsMenuOpen(true)}
                className="block md:hidden text-white relative"
              >
                <FaBarsStaggered size={40} />
              </button>
            )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;