import React from 'react'
import bg from './assets/sassy.png'
import ZajnoLoader from './loaders/ZajnoLoader'
import BarLoader from './loaders/BarLoader'
import HoverBar from './navbar/HoverBar'


const App = () => {
  return (
    <div className='w-screen h-screen bg-black '> 
      <img src={bg} alt='sassy' className='absolute w-full h-full object-cover'/> 
        {/* <ZajnoLoader /> */}
        {/* <BarLoader /> */}
        <HoverBar />
    </div>
  )
}

export default App