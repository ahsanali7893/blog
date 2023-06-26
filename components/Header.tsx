import React from 'react'

const Header = () => {
  return (
   <>
   <header className='bg-gray-50'>
    <div className='xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3'>
        <div className='md:flex-none w-96 order-2 sm:order-1'>
            <input type="text" placeholder='search' />
        </div>
        <div className='shrink w-80 sm:order-2'>   
            <a>Design</a>
        </div>
        <div>
            <div className="flex">
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