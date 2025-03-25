import React from 'react'
import Image from 'next/image'

const Component = () => {
    return (
        <div className=''>
            <div className='h-screen relative'>
                <Image
                    src="/path-to-your-image.jpg"
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="z-[-1]"
                />
            </div>
        </div>
    )
}

export default Component
