import React from 'react'
import Header from './component/Header'

const layout = ({children}:any) => {
  return (
    <div className='pt-20'>
       <Header />
        {children}   
    </div>
  )
}

export default layout