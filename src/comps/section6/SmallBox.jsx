import React from 'react'

const SmallBox = ({ box, z }) => {
    const { value, text } = box;
    return (
        <div className={`z-${z} w-[170px] px-5 py-3 bg-gray-800 flex flex-col justify-start items-start rounded text-purple-400`}>
            <p className='text-2xl font-bold'>{value}</p>
            <p className='text-sm'>{text}</p>

        </div>
    )
}

export default SmallBox
