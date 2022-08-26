import React from 'react';

const Layout = ({children}) => {
  return (
    <>
    <div className='content'>
      {children}
    </div>
      <div className='footer'>
        <h1>Footer</h1>
      </div>
    </>
  )
}

export default Layout
