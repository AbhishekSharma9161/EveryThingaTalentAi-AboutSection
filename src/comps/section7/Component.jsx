import React from 'react'
import Image from 'next/image'
import Component2 from './Component2'

const Component = () => {
    return (
        <div className='h-screen relative shadow-inner'>
            <div className='relative h-full invert-100 dark:bg-black dark:invert-0'>
                <Image
                    src="/assests/world-map.svg"
                    alt="Background Image"
                    fill
                />
            </div>
            <div className='h-screen absolute top-0 right-5 w-full'>
                <Image src="/assests/svgexport-20.svg" fill alt="Background pattern" />
            </div>
            <div className='absolute top-[50%] left-[50%] translate-[-50%] max-w-150 h-100 rounded-3xl p-2 bg-gradient-to-r from-pink-200 to-blue-200 border-2 outline-2 outline-gray-300 border-pink-500 opacity-70 dark:outline-0 dark:bg-trans'>
                <div className=' h-full min-w-10 max-w-full flex justify-center items-center rounded-2xl'>
                    <Component2 />
                </div>
            </div>
        </div>
    )
}

export default Component