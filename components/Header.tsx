import React from 'react'

const Header = () => {
  return (
   <>
   <header className='bg-gray-50'>
    <div className='xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3'>
        <div className='md:flex-none w-96 order-2 sm:order-1'>
            <input type="text" className='mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-500' placeholder='search' />
        </div>
        <div className='shrink w-80 sm:order-2'>   
            <a>Design</a>
        </div>
        <div className='w-96 order-3 justify-center flex'>
            <div className="flex gap-6">
                <a>Facebook</a>
                <a>Twitter</a>
                <a>Youtube</a>
            </div>
        </div>
    </div>
   </header>
   </>
  )
}

export default Header