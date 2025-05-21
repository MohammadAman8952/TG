import React from 'react'

function MobileMenu() {
  return (
    <div>
      <div className='md:hidden font-bold '>
            <ul className='flex justify-center items-center'>
              <li className='mx-[10px] cursor-pointer hover:text-white hover:border rounded-[5px] p-[10px] hover:bg-orange-300'>Home</li>
              <li className='mx-[10px] cursor-pointer hover:text-white hover:border rounded-[5px] p-[10px] hover:bg-orange-300'>About Us</li>
              <li className='mx-[10px] cursor-pointer hover:text-white hover:border rounded-[5px] p-[10px] hover:bg-orange-300 border-black-2xl'>TG Members</li>
            </ul>
          </div>
      
    </div>
  )
}

export default MobileMenu
