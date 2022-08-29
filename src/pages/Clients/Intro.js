import React from 'react'

const Intro = () => {
  return (
    <div className='h-screen bg-primary grid grid-cols-2 items-center'>
        <div className='h-[500px]'>
        <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_jimqos21.json"  background="transparent"  speed="1"  loop autoplay></lottie-player>
        </div>
        <div>
            <h1 className='text-8xl font-semibold text-white'>We <b className='text-secondary'>work</b> with our <b className='text-green-500'>clients</b></h1>

        </div> 
    </div>
  )
}

export default Intro
