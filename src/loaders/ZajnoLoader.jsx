import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'

gsap.registerPlugin(useGSAP, CustomEase);

const ZajnoLoader = () => {
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
    
    gsap.to('.zajno-black', {
      textContent: 100,
      snap: { textContent: 1 },
      duration: duration,
      ease: "dynamicEase",
    });
  }, []);

  return (
    <div className='zajno-background w-full h-full flex justify-center items-center'>
        <div className='zajno-black font-[zajno]'>
            0
        </div>
    </div>
  )
}

export default ZajnoLoader