import React from 'react'

const Card = ({ obj }) => {
    return (
        <div className='p-0.5 rounded-md hover:bg-gradient-to-br from-pink-500 via-sky-500 to-yellow-500'>
            <div className='w-70 border border-gray-600 p-4 rounded-md z-10 bg-black'>
                <div className='mb-2 text-purple-500 font-extrabold'>{obj.emoji}</div>
                <p className='font-medium mb-3'>{obj.heading}</p>
                <p className='text-sm text-gray-400'>{obj.desc}</p>
            </div>
        </div>
    )
}

export default Card
