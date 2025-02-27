import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between mx-35 items-center '>
            <a href="#">
                <img src="/logo.png" alt="" width="200" height="200"/>
            </a>
            <ul className='flex '>
                <li>
                    <select className='border border-white p-2 w-[140px] rounded-md'>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    </select>
                    </li>
                <li>
                 <button className='bg-red-600 p-2 w-[100px] rounded-md ml-5'>Sign in</button>
                 </li>
            </ul>
        </nav>
    )
}

export default Navbar
