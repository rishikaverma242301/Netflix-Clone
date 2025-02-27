import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='bg-[url(/background.jpg)]'>
      <div style={{backgroundColor:"rgba(0,0,0,0.75"}} className='h-full pb-8'>
        <Navbar/>
    <h1 className='text-center m-40 text-6xl'> <b>Unlimited movies,<br />TV shows and more </b></h1>
    <h5 className='text-center -m-35 text-2xl'> <b>Starts at ₹149. Cancel at any time.</b></h5>
    <h3 className='text-center m-40'> Ready to watch? Enter your email to create or restart your membership.</h3>

    <div className='flex -mt-35 gap-3.5'>
      <input className=' border-1 h-13 w-[400px] ml-75 rounded-md p-5 ' type="text" placeholder='Email address'/>
      <button className='bg-red-600 w-[200px] rounded-md h-13 text-2xl hover:bg-red-800'>Get Started</button>
      </div>
      </div>
      </div>
  )
}

export default Header;
