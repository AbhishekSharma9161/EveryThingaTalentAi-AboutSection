import React from 'react'
import button from '@/components/ui/button'
import { FaArrowRight } from "react-icons/fa6";
import GradientText from '../textComp/GradientText';
import styles from './section7.module.css'

const Component2 = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2' style={{
      color: 'hsl(var(--foreground))',
      fontFeatureSettings: '"rlig" 1, "calt" 1',
      fontFamily: '__GeistSans_3a0388,__GeistSans_Fallback_3a0388',
      lineHeight: 'inherit'
    }}>
      <h1 className='text-4xl font-bold mb-6'>
        Join Our <GradientText text={"Mission"}/>
      </h1>
      <p className='text-xl w-[70%] text-center' style={{color: 'hsl(var(--muted-foreground))'}}>
        Help us reimagine the future of hiring in the tech industry.
      </p>
      <button 
        className='w-fit flex justify-center items-center gap-2 py-2 px-6 rounded-[var(--radius)]'
        style={{
          backgroundColor: 'transparent',
          color: 'hsl(var(--foreground))',
          border: '1px solid hsl(var(--border))',
          transition: 'all 150ms'
        }}
      >
        Start Here {<FaArrowRight />}
      </button>
    </div>
  )
}

export default Component2
