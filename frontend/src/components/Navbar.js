import React from 'react'
import { Menu } from 'lucide-react'
import { BookmarkPlus } from 'lucide-react'

const Navbar = () => {
  return (
    <div className=' h-[5rem] p-[1rem]  flex items-center justify-center bg-[#121212]'>
      <div className='flex text-white items-center justify-center '>
        <span className='text-[2rem] mr-[1rem] font-bold text-black bg-[#F5C518] p-[0.2rem] rounded-lg'>Pathbeat</span>
        <div className='flex items-center mr-[2rem] hover:cursor-pointer hover:bg-black-300'>
        <Menu className='h-[1.8rem] w-[1.8rem]'/>
        <span className='text-[1.4rem] font-bold'>Menu</span>
        </div>
        <input className='w-[55rem] h-[2.5rem] rounded-md' type="text" />
        <div className='flex w-[16rem] ml-[2rem] text-[1.4rem] justify-between'>
            <div className='flex items-center hover:cursor-pointer'>
                <BookmarkPlus className='h-[1.8rem] w-[1.8rem] '/>
                <span className=' font-semibold'>watchlist</span>
            </div>
            <span className='hover:cursor-pointer font-semibold'>Sign in</span>
            <span className='hover:cursor-pointer font-semibold'>En</span>
        </div>

      </div>
    </div>
  )
}

export default Navbar
