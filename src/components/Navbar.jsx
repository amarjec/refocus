import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <>
    <nav className='max-w-screen-xl mx-auto py-6 px-2  flex items-center justify-between font-["satoshi"] border-b-[1px] select-none border-zinc-700'>
        <div className='nleft flex items-center'>
        <div className='mr-28 text-xl font-semibold'>Refocus</div>
        <div className='flex gap-14 '> {["Home", "Work", "Culture", "", "News"].map((link) =>
            <a className='text-sm flex items-center gap-1 ' href="#">
                {link === "Work" ? (<span style={{boxShadow:"0 0 0.45em #00FF19"}} className='inline-block w-[.25em] h-[.25em] bg-green-500 rounded-full'></span>) : null}
                {link.length === 0 ? (<span className='w-[.1em] h-6 bg-zinc-600'></span>) : null}
                {link}
            </a> 
        )}</div>
        </div>
       <Button/>
    </nav>
    </>
  )
}

export default Navbar