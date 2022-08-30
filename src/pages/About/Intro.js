import React from 'react';
import AboutIntro from './about-intro.svg';

const Intro = () => (
  <>
    <div className="about-intro h-screen sm:hidden" />
    <div className="grid grid-cols-2 sm:grid-cols-1 items-center min-h-screen sm:bg-secondary sm:p-10">
      <div className="z-10 flex justify-center">
        <img src={AboutIntro} alt="" className="h-[500px] w-[500px] sm:-mt-10" />
      </div>
      <div className="z-10 max-w-max flex flex-col space-y-5 sm:-mt-32">
        <h1 className="text-8xl sm:text-5xl font-semibold text-white">Tech-Plug</h1>
        <hr />
        <h1 className="text-xl sm:text-[1rem] text-white">FAST | CREATIVE | COMMITED</h1>
      </div>
    </div>
  </>
);

export default Intro;
