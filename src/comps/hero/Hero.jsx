import React from 'react'
import Left from './Left'
import Right from './Right'
import style from './styles.module.css'
const Hero = () => {
    return (
        <div className='parent flex justify-between overflow-hidden flex-wrap items-start p-15 gap-22 md:flex-nowrap'>
            <div className={`${style.circle} ${style.static}`}></div>
            <div className={`${style.circle} ${style.moving} ${style.bigCircle}`}></div>
            <Left />
            <Right />
        </div>
    )
}

export default Hero
