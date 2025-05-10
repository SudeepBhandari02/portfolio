import React, { useRef, useState } from 'react'
import heroVideo from '../assets/videos/heroVideo.mp4'
import centerImage from '../assets/images/profileImage.png'

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);


 

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div className="relative z-10 h-dvh w-screen overflow-x-hidden rounded-lg bg-blue-75" id='video-frame'>
        <div className="">
          <div className="mask-clip-path absolute-center absolute z-50 size-48 cursor-pointer overflow-hidden rounded-lg">
            <div className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100" >
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
          className='absolute left-0 top-0 size-full object-cover object-[60%_80%] lg:object-right'
          />
        </div>
        <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75'>Gaming</h1>
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
      <h1 className='special-font hero-heading absolute bottom-5 right-5 text-blue-75 text-black'>Gaming</h1>
    </div>
  )
}

export default Hero