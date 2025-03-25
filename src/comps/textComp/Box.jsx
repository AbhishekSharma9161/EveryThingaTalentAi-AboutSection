import React from 'react'

const Box = ({ text }) => {
  return (
    <div className='p-1 bg-gray-700 text-white font-bold w-fit rounded-sm flex justify-center items-center'>
      {text}
    </div>
  )
}

export default Box
