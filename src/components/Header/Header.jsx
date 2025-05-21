import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
function Header() {
  //  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      
        <nav className='bg-blue-200 flex justify-between items-center'>
          <div>
            <img className='h-[60px] border rounded-[5px]' src="data:image/jpeg;base64,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" alt="" />

          </div>
          <div className='md:hidden '>
            <h1  className='text-black font-bold'>WELCOME TO TG FAMILY</h1>
          </div>
          <div className='md:flex font-bold hidden'>
        <ul className='flex justify-center items-center'>
          <li className='mx-[10px]'>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `cursor-pointer rounded-[5px] p-[8px] mx-[10px]hover:bg-white hover:border hover:bg-orange-300 ${
                  isActive ? 'bg-orange-300' : ''
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li className='mx-[10px]'>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `cursor-pointer rounded-[5px] p-[8px] mx-[10px]hover:bg-white hover:border hover:bg-orange-300 ${
                  isActive ? 'bg-orange-100' : ''
                }`
              }
            >
              About Us
            </NavLink>
          </li>
          <li className='mx-[10px]'>
            <NavLink
              to="/tg-members"
              className={({ isActive }) =>
                `cursor-pointer rounded-[5px] p-[8px] mx-[10px]hover:bg-white hover:border hover:bg-orange-300 ${
                  isActive ? 'bg-orange-300' : ''}`
              }
            >
              TG Members
            </NavLink>
          </li>
          <li className="mx-[10px] cursor-pointerhover:bg-white hover:border rounded-[5px] p-[8px] hover:bg-orange-300 border-2">
                    <NavLink to="/funny-videos"
                    className={({isActive})=>{
                      `cursor-pointer${isActive?'bg-orange-300':''}`
                    }}
                    >Lets Have Fun</NavLink>
          </li>
        </ul>
      </div>
                <div className=' md:block bg-white-500 px-[10px] py-[10px] justify-center items-center hidden'>
                  <span className='hover:border rounded-[5px] bg-white p-[10px]'>Login/sign up</span>
                  
                </div>
                <div class="md:hidden mr-[20px]">
                    <button className="text-4xl" >
                    &#8801;
                    </button>
                </div>
                
              </nav>
            <div className="md:hidden bg-orange-100 font-bold">
                <ul className="flex justify-center items-center">
                  <li className="mx-[10px] cursor-pointerhover:bg-white hover:border rounded-[5px] p-[8px] hover:bg-orange-300">
                      <NavLink to="/"
                      className={({isActive})=>{
                        `cursor-pointer ${isActive?'bg-white':''}`
                      }}>Home</NavLink>
                  </li>
                  <li className="mx-[10px] cursor-pointerhover:bg-white hover:border rounded-[5px] p-[8px] hover:bg-orange-300">
                    <NavLink to="/about"
                    className={({isActive})=>{
                      `cursor-pointer &{isActive?'bg-white':''}`
                    }}
                    >About Us</NavLink>
                  </li>
                  <li className="mx-[10px] cursor-pointerhover:bg-white hover:border rounded-[5px] p-[8px] hover:bg-orange-300 border-2">
                    <NavLink to="/tg-members"
                    className={({isActive})=>{
                      `cursor-pointer${isActive?'bg-white':''}`
                    }}
                    >TG Members</NavLink>
                  </li>
                  <li className="mx-[10px] cursor-pointerhover:bg-white hover:border rounded-[5px] p-[8px] hover:bg-orange-300 border-2">
                    <NavLink to="/funny-videos"
                    className={({isActive})=>{
                      `cursor-pointer${isActive?'bg-white':''}`
                    }}
                    >Lets Have Fun</NavLink>
                  </li>
                </ul>
      </div>

    
      
   </> 
  )
}

export default Header
