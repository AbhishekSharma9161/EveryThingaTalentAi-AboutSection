import React from 'react'
import Link from 'next/link'

const Left = () => {
    return (
        <div className="relative">
            <div className="space-y-8">
                <p className="mb-2 sm:mb-4 text-xs sm:text-sm font-semibold text-black dark:text-white tracking-wider">
                    ABOUT US
                </p>
                <p className="text-5xl max-sm:text-4xl font-bold leading-[60px] max-sm:leading-[50px] max-w-[600px]">
                    Shaping the Next Generation of HR{" "}
                    <span className="gradient-text-new text-transparent bg-clip-text">Tech </span>
                    <span style={{
                        backgroundImage: 'linear-gradient(to right, rgb(236, 11, 200), rgb(91, 178, 246), rgb(246, 196, 54))',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent'
                    }}>Recruitment.</span>
                </p>
                <p className="text-lg text-black/60 dark:text-white/70 leading-relaxed max-w-lg font-light">
                    At Everything Talent, we help you launch your recruitment into a new dimension.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a className="md:w-fit" href="https://app.everythingtalent.ai/login">
                        <button className="whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative inline-flex animate-rainbow cursor-pointer items-center justify-center bg-[length:200%] font-medium text-white dark:text-black transition-all duration-500 ease-in-out border-white hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 hover:scale-[1.02] after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 dark:bg-white bg-black dark:hover:ring-0 [&>span]:relative [&>span]:z-10 h-11 rounded-md px-8 text-sm sm:text-md">
                            Start for Free Today
                            <svg className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Left
