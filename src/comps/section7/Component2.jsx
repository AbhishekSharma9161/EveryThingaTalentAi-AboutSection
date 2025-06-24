import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

export default function Component2() {
  return (
    <div className="flex flex-col items-center max-w-5xl text-center gap-4 sm:gap-6">
      <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[40px] font-extrabold text-[#92a3b8] group-hover:text-white leading-tight">
        <span className="font-bold text-slate-900 dark:text-white dark:group-hover:text-slate-50">Join Our</span>
        <span className="gradient-text-new bg-clip-text text-transparent ml-2">Mission</span>
      </h2>
      <p className="text-lg sm:text-xl md:text-xl text-slate-700 dark:text-[#92a3b8] dark:group-hover:text-gray-300 group-hover:text-gray-950">Help us reimagine the future of hiring in the tech industry.</p>
      <button className="whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative inline-flex animate-rainbow cursor-pointer items-center justify-center bg-[length:200%] font-medium text-white dark:text-black transition-all duration-500 ease-in-out border-white hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 hover:scale-[1.02] after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 dark:bg-white bg-black dark:hover:ring-0 [&>span]:relative [&>span]:z-10 h-11 rounded-md px-8 text-md">
        Start Here <FaArrowRight className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition" />
      </button>
    </div>
  )
}