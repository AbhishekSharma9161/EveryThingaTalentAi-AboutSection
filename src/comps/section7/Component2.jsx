import React from 'react'
import button from '@/components/ui/button'
import { FaArrowRight } from "react-icons/fa6";
import GradientText from '../textComp/GradientText';

const Component2 = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2 '>
      <h1 className='text-4xl font-bold mb-6'>Join Our <GradientText text={"Mission"}/></h1>
      <p className='text-xl w-[70%] text-center'>Help us reimagine the future of hiring in the tech industry.</p>
      <button className='w-fit bg-black text-white flex justify-center items-center gap-2 py-2 px-6 rounded cursor-pointer hover:scale-[102%] duration-150'>Start Here {<FaArrowRight />}</button>
    </div>
  )
}

export default Component2
