import React from 'react'

const Card = ({ obj }) => {
    const d_style = 'bg-gradient-to-r from-black via-[#0f172a] to-[#020617] dark:bg-black'


    return (
        <div className=' group w-full min-w-10 max-w-full mb-2 p-[3px] rounded-xl  md:mb-0 bg-white dark:bg-black  hover:bg-gradient-to-br from-pink-500 via-sky-500 to-yellow-500 md:w-70 shadow-lg'>
            <div className={`rounded-xl bg-white dark:bg-black  `}>
            <div className="bg-transparent w-full p-5 rounded-lg transition-all duration-300 group-hover:bg-gradient-to-br from-white via-purple-100 to-purple-400 z-11 dark:bg-gradient-to-br dark:from-black dark:via-[#0f172a] dark:to-[#020617]">                    <div className='mb-2 text-purple-500 font-extrabold'>{obj.emoji}</div>
                    <p className='font-medium mb-3 dark:text-white'>{obj.heading}</p>
                    <p className='text-sm text-gray-400'>{obj.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
