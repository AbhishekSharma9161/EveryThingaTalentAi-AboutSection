import React from 'react'
import Left from './Left'
import Right from './Right'
import { ToggleLeft } from 'lucide-react'
const Hero = () => {
    return (
        <div className='flex justify-between flex-wrap items-start p-15 gap-22 md:flex-nowrap'>
            <Left />
            <Right />
        </div>
    )
}

export default Hero
