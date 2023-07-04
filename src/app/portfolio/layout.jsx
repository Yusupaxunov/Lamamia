import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='my-6'>
        <h1 className='text-7xl font-bold'>Our works</h1>
        {children}
    </div>
  )
}

export default Layout