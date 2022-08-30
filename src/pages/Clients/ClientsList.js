import React, { useState } from 'react';

const ClientsList = () => {
    const [selectedClientIndex , setSelectedClientIndex] = useState(0);
    const clients = [
        {
          name: "Slack",
          logo: "images/slack.png",
          url: "https://www.tcs.com/",
          description:
            "Slack is a cloud-based set of tools and services that makes it easy to get work done. It’s built for teams of all sizes, and has a simple, beautiful design that’s easy to use and works great on any device.",
        },
        {
          name: "Twitter",
          logo: "images/twitter.png",
          url: "https://www.infosys.com/",
          description:
            "Twitter is a social networking service that enables users to send and read short 140-character messages called “tweets”.",
        },
        {
          name: "Instagram",
          logo: "images/instagram.png",
          url: "https://www.wipro.com/",
          description:
            "Instagram is a photo-sharing, video-sharing and communication service that is owned and operated by Facebook, Inc. It was created by Kevin Systrom and Mike Krieger, and launched in October 2010.",
        },
        {
          name: "Spotify",
          logo: "images/spotify.png",
          url: "https://www.hcl.com/",
          description:
            "Spotify is a music streaming service that offers a wide range of music genres, including rock, pop, country, electronic, and more. It was created by Swedish computer programmer and programmer Johan Liljegren in 2007.",
        },
        {
          name: "Messenger",
          logo: "images/messenger.png",
          url: "https://www.accenture.com/",
          description:
            "Messenger is a messaging app that enables users to communicate with their friends and family. It was created by Facebook in 2011.",
        },
        {
          name: "Cognizant",
          logo: "images/cognizant.png",
          url: "https://www.capgemini.com/",
          description:
            "Cognizant is a multinational technology company headquartered in Bengaluru, India. It is the largest Indian IT company by market capitalization.",
        },
        {
          name: "Github",
          logo: "images/github.png",
          url: "https://www.cognizant.com/",
          description:
            "GitHub is a web-based hosting service for version control of code using the distributed version control (DVCS) model. It was created by Linus Torvalds in 2005.",
        },
      ];

      const next = () => {
          setSelectedClientIndex(selectedClientIndex + 1);
      }

      const previous = () => {
        setSelectedClientIndex(selectedClientIndex - 1)
      }

  return (
    <div>
        <div className='bg-primary h-44 rounded-b-full sm:rounded-b-2xl'></div>
            <div className='flex justify-center sm:space-x-0 sm:p-5 -mt-44 items-end space-x-10'>
                   {selectedClientIndex!==0 &&  <i className="ri-arrow-left-fill sm:hidden text-4xl text-gray-600 cursor-pointer" onClick={previous}></i>}
                   <div className='grid grid-cols-3 gap-12 sm:gap-2 sm:grid-cols-1'>
                    
                    {[clients[selectedClientIndex], clients[selectedClientIndex + 1], clients[selectedClientIndex + 2] ].map((item)=> (
                       <div className='bg-white shadow p-5 w-[350px] sm:h-auto sm:w-auto border h-[350px]'>
                       <div className='flex sm:flex-col sm:space-x-0 space-x-10 items-center justify-between'>
                       <img src={item.logo} alt='' className='h-32 sm:w-10 sm:h-10 w-32'/>
                           <h1 className='text-primary font-semibold text-2xl'>{item.name}</h1>
                       </div>
                       <p className='text-gray-600 mt-10 text-sm'>
                           {item.description}
                       </p>
                      </div>
                    ))}

                   </div>
                {selectedClientIndex < 4 && <i className="ri-arrow-right-fill sm:hidden text-4xl text-gray-600 cursor-pointer" onClick={next}></i>}
            </div>
            <div className='flex justify-center mt-10'>
              <div className='flex space-x-2'>
                {[1,2,3,4,5].map((item, index) => (
                  <div 
                  onClick={()=> setSelectedClientIndex(index)}
                  className={`bg-gray-300 cursor-pointer h-4 w-4 rounded-full hover:scale-105 transition-all transform duration-300
                  ${selectedClientIndex===index && 'border-2 border-secondary'}`}>

                    </div>
                ))}
              </div>
            </div>
    </div>
  )
}

export default ClientsList;
