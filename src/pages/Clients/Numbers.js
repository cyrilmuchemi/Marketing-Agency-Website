import React from 'react';

const Numbers = () => (
  <div className="px-52 sm:px-5 mt-20">
    <h1 className="text-2xl text-gray-600 my-5">Until today, we have provided our services to ....</h1>
    <div className="bg-secondary sm:flex-col sm:space-x-0 sm:items-start sm:space-y-10 flex space-x-10 p-5 justify-between rounded">
      <div className="flex flex-col space-y-2">
        <h1 className="text-9xl text-white">152</h1>
        <h2 className="text-white font-semibold text-3xl">Clients</h2>
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="text-9xl text-white">485</h1>
        <h2 className="text-white font-semibold text-3xl">Projects</h2>
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="text-9xl text-white">24</h1>
        <h2 className="text-white font-semibold text-3xl">Locations</h2>
      </div>
    </div>
  </div>
);

export default Numbers;
