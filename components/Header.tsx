import React from 'react'

const Header = () => {
  return (
   <>
   <header className='bg-gray-50'>
    <div className='xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3'>
        <div>
            <input type="text" placeholder='search' />
        </div>
        <div>
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