import React from 'react';
import AboutIntro from './about-intro.svg';

const Intro = () => {
  return (
    <>
    <div className='about-intro h-screen'>
      
    </div>
    <div className="grid grid-cols-2 items-center min-h-screen">
        <div className='z-10 flex justify-center'>
        <img src={AboutIntro} alt="" className='h-[500px] w-[500px]'/>
        </div>
        <div className='z-10 max-w-max flex flex-col space-y-5'>
           <h1 className='text-8xl font-semibold text-white'>Tech-Plug</h1>
           <hr />
           <h1 className='text-xl text-white'>FAST | CREATIVE | COMMITED</h1>
        </div>
    </div>
    </>
  )
}

export default Intro
