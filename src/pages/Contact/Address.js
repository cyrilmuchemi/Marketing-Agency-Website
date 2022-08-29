import React from 'react';

const Address = () => {
  return (
    <div>
      <div className='bg-primary rounded-3xl flex flex-col space-y-10 p-10 text-white'>
        <h1 className='text-3xl font-semibold'>Get In Touch</h1>
        <p>
          Tech-Plug is a digital marketing agency. We provide marketing and development services.
        </p>
        <div className='flex space-x-5 items-center'>
          <div className='h-12 w-12 bg-[#ffa60010] p-2 rounded'>
          <i className="ri-map-pin-line text-3xl text-secondary"></i>
          </div>
          <div>
          <h2 className='font-semibold text-xl'>Visit Us</h2>
            <p>Moi Ave, Nairobi, Kenya</p>
          </div>
        </div>
        <div className='flex space-x-5 items-center'>
          <div className='h-12 w-12 bg-[#ffa60010] p-2 rounded'>
          <i className="ri-mail-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h2 className='font-semibold text-xl'>Mail Us</h2>
            <p>Techplug@gmail.com</p>
          </div>
        </div>
        <div className='flex space-x-5 items-center'>
          <div className='h-12 w-12 bg-[#ffa6000f] p-2 rounded'>
          <i className="ri-phone-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h2 className='font-semibold text-xl'>Call Us</h2>
            <p>+254742550846</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Address;
