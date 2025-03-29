import React from 'react'

const Card = ({ obj }) => {
    return (
        <div className='w-full p-0.5 mb-2 rounded-md hover:bg-gradient-to-br from-pink-500 via-sky-500 to-yellow-500 md:w-70 md:mb-0'>
            <div className='min-w-80 max-w-full border border-gray-600 p-4 rounded-md z-10 bg-black md:w-full md:min-w-30 md:max-w-full    bg-gradient-to-r from-black via-[#0f172a] to-[#020617]'>
                <div className='mb-2 text-purple-500 font-extrabold'>{obj.emoji}</div>
                <p className='font-medium mb-3'>{obj.heading}</p>
                <p className='text-sm text-gray-400'>{obj.desc}</p>
            </div>
        </div>
    )
}

export default Card
