import React, { useRef } from 'react';

const navItems = ["Hero", "About", "Projects", "Skills", "Contact"];

const AnimatedNavbar = () => {
  const sliderRef = useRef(null);

  const handleMouseEnter = (e) => {
    const item = e.target;
    const slider = sliderRef.current;

    if (slider) {
      slider.style.left = `${item.offsetLeft}px`;
      slider.style.width = `${item.offsetWidth}px`;
      slider.style.display = 'block';
    }
  };

  const handleMouseLeave = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.style.display = 'none';
    }
  };

  return (
    <nav
      className="relative flex rounded-xl gap-2"
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={sliderRef}
        className="absolute top-0 h-full bg-white rounded-full transition-all duration-300 ease-in-out hidden"
        id="slider-bg"
      />
      {navItems.map((label, index) => (
        <a
            href={`#${label.toLowerCase()}`}
          key={index}
          className="nav-item relative px-5 py-2 rounded-full  text-lg cursor-pointer z-10 font-general"
          onMouseEnter={handleMouseEnter}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export default AnimatedNavbar;
