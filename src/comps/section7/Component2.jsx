import React from 'react'
import button from '@/components/ui/button'
import { FaArrowRight } from "react-icons/fa6";

const Component2 = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold mb-6'>Join Our Mission</h1>
      <p>Help us reimagine the future of hiring in the tech industry.</p>
      <button>Start Here {<FaArrowRight />}</button>
    </div>
  )
}

export default Component2
