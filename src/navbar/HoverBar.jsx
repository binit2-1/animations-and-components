import React from 'react'

const HoverBar = () => {;
  return (
    <div className='flex justify-center w-full h-full '>
      <div className='flex justify-center items-center text-white font-[hover-bar] text-4xl bg-red-600 w-120 h-15 hover:w-135 hover:h-150 transition-all ease-in-out duration-1000 mt-5 rounded-2xl'>
        Hover Me
      </div>
    </div>
  )
}

export default HoverBar