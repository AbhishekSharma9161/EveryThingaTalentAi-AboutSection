import React from 'react'
import Image from 'next/image'
import Component2 from './Component2'

const Component = () => {
    return (
        <div className='h-screen relative bg-black shadow-2xl'>
            <div className='relative h-full'>
                <Image
                    src="/assests/world-map.svg"
                    alt="Background Image"
                    fill
                />
            </div>
            <div className='h-screen absolute top-0 right-5 w-full'>
                <Image src="/assests/svgexport-20.svg" fill></Image>
            </div>
            <div className='absolute top-[50%] left-[50%] translate-[-50%] w-150 h-100 rounded-2xl p-2 bg-red-500'>
                <div className='bg-red-100 h-full w-full flex justify-center items-center rounded-2xl'>
                    <Component2 />
                </div>
            </div>
        </div>
    )
}

export default Component
