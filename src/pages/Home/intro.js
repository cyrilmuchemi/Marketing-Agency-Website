import React from 'react';

const Intro = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-1 sm:mt-20 h-screen items-center'>
        <div className='flex flex-col space-y-10'>
          <h1 className='text-7xl font-semibold text-primary sm:text-6xl'>The Best <br/><b className='text-secondary'>Marketing</b></h1>
          <h1 className='text-4xl font-semibold text-primary'>Doesn't feel like marketing</h1>
          <button className='bg-secondary px-16 py-5 text-xl text-white max-w-max hover:bg-primary'>Get Started</button>

        </div>

        <div className='p-10'>
        <lottie-player 
        src="https://assets7.lottiefiles.com/packages/lf20_hwcplx4x.json"  
        background="transparent"  speed="1"   
        loop 
        autoplay>
        </lottie-player>
        </div>
    </div>
  )
}

export default Intro;
