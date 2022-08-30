/* eslint-disable*/
import React from 'react';

const WhatWeDo = () => {
  const items = [
    {
      title: 'Web Development',
      icon: 'images/web.png',
      description:
            'Web development is the work involved in developing a website for the Internet or an intranet.',
    },
    {
      title: 'Mobile Development',
      icon: 'images/mobile.png',
      description:
            'Mobile development is the work involved in developing a mobile application for mobile devices such as smartphones, tablets, and feature phones.',
    },
    {
      title: 'Digital Marketing',
      icon: 'images/digital-marketing.png',
      description:
            'Digital marketing is the work involved in developing a digital marketing strategy and developing a digital marketing plan.',
    },

    {
      title: 'Graphic Design',
      icon: 'images/graphicdesign.png',
      description:
            'Graphic design is the work involved in developing a digital marketing strategy and developing a digital marketing plan.',
    },
  ];
  return (
    <div className="mt-20 sm:mt-10">
      <h1 className="text-secondary text-8xl sm:text-5xl text-center font-semibold">What We Do</h1>
      <div className="bg-primary w-full h-96 mt-12" />
      <div className="grid grid-cols-4 sm:grid-cols-1 sm:w-fit gap-10 mx-24 sm:mx-0 sm:px-5 -mt-40">
        {items.map((item) => (
          <div className="p-5 bg-white border shadow flex flex-col space-y-5 items-center transform hover:scale-105 duration-300 sm:w-full">
            <img src={item.icon} className="h-20 w-20" alt="" />
            <h1 className="text-3xl">{item.title}</h1>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default WhatWeDo;
