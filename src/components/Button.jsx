import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = () => {
  return (
    <div className='min-w-40 h-8 bg-zinc-100 rounded-full flex px-4 py-2 items-center justify-between text-black cursor-pointer'>
        <span className=' text-sm font-medium '>Get Started</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button