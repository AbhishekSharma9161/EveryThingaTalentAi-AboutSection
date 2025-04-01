import React from 'react'
import { Button } from '@/components/ui/button'

const CustomButton = ({text="button", w=20, h=10}) => {
  return (
    <div>
      <Button className={`bg-gradient-to-r from-pink-400 via-blue-400 to-yellow-400 w-${w} h-${h} hover:bg-gradient-to-r hover:from-pink-500 hover:via-blue-500 hover:to-yellow-500 rounded text-sm font-bold tracking-wider`}>{text}</Button>
    </div>
  )
}

export default CustomButton
