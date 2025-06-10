import React from 'react'
import Left from './Left'
import Right from './Right'
import style from './styles.module.css'
const Hero = () => {
    return (
        <div className='parent rounded-2xl bg-gradient-to-r from-white to-[#dfdef7] flex justify-between overflow-hidden flex-wrap items-start p-4 sm:p-8 md:p-15 gap-6 md:gap-22 md:flex-nowrap dark:bg-none min-h-[calc(100vh-80px)]'>
            <div className={`${style.circle} ${style.static}`}></div>
            <div className={`${style.circle} ${style.moving} ${style.bigCircle}`}></div>
            <Left />
            <Right />
        </div>
    )
}

export default Hero
