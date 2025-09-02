import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'

const BarLoader = () => {
  useGSAP(() => {
    // bezier curve randomization
    const stop1 = Math.random() * 0.2 + 0.15;
    const stop2 = stop1 + Math.random() * 0.2 + 0.15;
    const stop3 = stop2 + Math.random() * 0.2 + 0.15;
    
    const firstStop = Math.min(stop1, 0.4);
    const secondStop = Math.min(stop2, 0.7);
    const thirdStop = Math.min(stop3, 0.9);

    //duration randomiser
    const duration = Math.random() * 4 + 4; // Random duration between 4 and 8 seconds
    
    const dynamicEase = `M0,0 L0.3,${firstStop} L0.35,${firstStop} L0.6,${secondStop} L0.65,${secondStop} L0.85,${thirdStop} L0.9,${thirdStop} L1,1`;
    
    CustomEase.create("dynamicEase", dynamicEase);

    const tl = gsap.timeline();

    tl.to('.bar-loader-text', {
      textContent: '100%',
      snap: { textContent: 1 },
      duration: duration,
      ease: "dynamicEase"
    });
    tl.to('.bar-loader', {
      width: '100%',
      duration: duration,
      ease: "dynamicEase"
    }, 0);
  }, []);
  

  return (
    <div className='bar-loader-bg overflow-hidden w-full h-full flex justify-center items-center'>
        <div className=' absolute text-xl left-3 bottom-20 sm:text-2xl sm:left-4.5 sm:bottom-32 md:text-4xl md:left-6 md:bottom-42 lg:text-7xl lg:left-9 lg:bottom-56 text-white font-[benzin] '>Loading...</div>
        <div className='bar-loader-text absolute text-[70px] left-3 bottom-8 leading-[20px] sm:text-[111px] sm:left-4 sm:bottom-8 sm:leading-[60px] md:text-[150px] md:left-6 md:bottom-8 md:leading-[100px] lg:text-[200px] lg:left-8 lg:bottom-8 lg:leading-[150px] '>
            0%
        </div>
        <div className='bar-loader absolute left-0 bottom-0 h-2 w-0 z-10'></div>
    </div>
  )
}

export default BarLoader