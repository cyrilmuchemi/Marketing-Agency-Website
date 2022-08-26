import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({children}) => {

  const menuItems = [
    {
      title: 'Home',
      path: '/',
      icon: ''
    },
    {
      title: 'About',
      path: '/about',
      icon: ''
    },
    {
      title: 'Clients',
      path: '/clients',
      icon: ''
    },
    {
      title: 'Contact',
      path: '/contact',
      icon: ''
    }
  ]

  return (
    <>
    <div>
      {children}
    </div>
      <div className='fixed bottom-10 left-0 right-0'>
        <div className='flex justify-center w-full'>
          {menuItems.map((item, index) => {
            return <div className={`px-20 bg-primary py-5 ${index===0 && 'rounded-l'} ${index===menuItems.length-1 && 'rounded-r'}`}>
              <Link to={`${item.path}`} className='text-secondary text-xl'>{item.title}</Link>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default Layout
