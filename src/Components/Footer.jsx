import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='mt-20'><b>Ready to watch ? Enter your email to create or restart your membership </b></h1>
            </div>

            <div className='flex gap-3.5 mt-3 '>
                <input className='border-1 h-13 w-[600px] ml-40 rouned-md p-5' type="text" placeholder='Email Address' />
                <button className='bg-red-600 w-[200px] rounded-md h-13 text-2xl hover:bg-red-800'>Get Started</button>
            </div>
            
            <div  className='ml-32 mt-16 text-gray-300'>
            <h1>Questions? Call 000-800-919-1743</h1>
            </div>
           <div className='grid px-40 grid-cols-4'>
            <ul className='mt-16 text-gray-100 '>
                <li>FAQ</li>
                <li>Help Centre</li>
                <li>Account</li>
                <li>Speed Test</li>
            </ul>
            <ul className='mt-16 text-gray-100 '>
                <li>Media Centre</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
                <li>Legal Notices</li>
            </ul>
            <ul className='mt-16 text-gray-100 '>
                <li>Ways to Watch</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Only on Netflix</li>
            </ul>
            <ul className='mt-16 text-gray-100 '>
                <li>Cookie Preferences</li>
                <li>Corporate Information</li>
                <li>Contact Us</li>

            </ul>
            
            </div>
            <ul className='mt-10 border-white p-2 w-[150px] '>
               <li>
                <select className='border-white p-2 w-[150px] ml-32'>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                </select>
               </li>
            </ul>
            
            <h2 className='mt-5 ml-32'>Netflix India</h2>
        </div>
    )
}

export default Footer
