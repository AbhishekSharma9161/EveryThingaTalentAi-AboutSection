import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const CustomButton = ({text="button", w=20, h=10, link=''}) => {
  return (
    <div className='w-full'>
      <Link href={link} className='w-full'>
        <Button className={`bg-gradient-to-r from-pink-400 via-blue-400 to-yellow-400 min-w-1 max-w-${w} h-${h} hover:bg-gradient-to-r hover:from-pink-500 hover:via-blue-500 hover:to-yellow-500 rounded text-sm font-bold tracking-wider active:scale-[101%]`}>{text}</Button>
      </Link>
    </div>
  )
}

export default CustomButton
