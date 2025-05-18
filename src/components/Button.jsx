import React from 'react'

const Button = ({title,id,leftIcon,rightIcon,containerClass}) => {
    
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer rounded-full px-7 py-3 ${containerClass}`}>
        {leftIcon}
        <span className='mx-1 relative inline-flex overflow-hidden font-general text-xs uppercase text-gray-800 font-semibold tracking-wider'>
                {title}
        </span>
        {rightIcon}
    </button>
  )
}

export default Button;