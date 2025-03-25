import React from 'react'
import Left from './Left'
import Right from './Right'
const Hero = () => {
    return (
        <div className='flex justify-between items-start h-screen p-15 gap-22'>
            <Left />
            <Right />
        </div>
    )
}

export default Hero
