import React, { useRef, useState } from 'react'

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 4;

  const nextVideoRef = useRef(null);

  const handleMiniVdClick = () => {
    setIsClicked(true);
    setCurrentIndex((prev)=> ((prev) % totalVideos)+1);
    //console.log(currentIndex);
    
  }

  const getVideoSrc = (index) =>`/videos/hero-${index}.mp4`;

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  }

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div className="relative z-10 h-dvh w-screen overflow-x-hidden rounded-lg bg-blue-75" id='video-frame'>
        <div className="">
          <div className="mask-clip-path absolute-center absolute z-50 size-48 cursor-pointer overflow-hidden rounded-lg">
            <div className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100" onClick={handleMiniVdClick}>
              <video
                ref={nextVideoRef}
                src={getVideoSrc(currentIndex===totalVideos?1:currentIndex+1)}
                muted
                loop
                id='current-video'
                className={"size-48 origin-center scale-150 object-cover object-center"}
                onLoadedData={handleVideoLoad}
              
              />
            </div>
          </div>
          <video
          ref={nextVideoRef}
          src={getVideoSrc(currentIndex)}
          loopmuted
          id='next-video'
          className='absolute-center invisible z-20 size-64 object-cover object-center'
          />
          <video
          src={getVideoSrc(currentIndex)}
          autoPlay
          loop
          muted
          className='absolute left-0 top-0 size-full object-cover object-center'
          />
        </div>
        <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75 '>Gaming</h1>
                <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-8xl text-blue-100">
              s<b>udee</b>p <br />
              b<b>hand</b>ri

            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Fullstack web and mobile developer <br /> MERN + React Native
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero