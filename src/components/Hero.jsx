import React from 'react'

function Hero() {
  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div className="relative z-10 h-dvh w-screen overflow-x-hidden rounded-lg bg-blue-75">
        <div className="">
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero