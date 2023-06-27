import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='container my-6'>
        <div>
        <div className='ml-32'>
            <img className='object-fill border border-neutral-400 hover:object-scale-down h-38 w-96 sm:justify-center' src="img.jpg" alt="" />
        </div>
        <div className=''>
           <div className='mt-[-17%] ml-[70%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </div>
        </div>
    </div>
  )
}

export default Hero