import React from 'react'
import Left from './Left'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className="relative bg-white bg-gradient-to-br dark:from-black dark:via-slate-900 dark:to-slate-950 text-black dark:text-white overflow-hidden">
            {/* Animated circles */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-black/20 dark:border-white/10 rounded-full animate-spin-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-black/20 dark:border-white/10 rounded-full animate-spin-reverse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-black/20 dark:border-white/10 rounded-full animate-spin-slower"></div>
            </div>

            {/* Main content */}
            <main className="relative z-10">
                <div className="max-w-7xl mx-auto px-4 pt-20 lg:pt-28 mb-12 md:mb-16 lg:mb-20">
                    <div className="flex justify-center items-center flex-wrap lg:flex-nowrap gap-16 lg:gap-4">
                        <Left />
                        <div className="relative h-[520px] w-full max-w-[520px] flex justify-center items-center opacity-0 translate-y-4 animate-fade-in-up">
                            <div className="absolute -right-20 md:-right-24 -top-20 h-[300px] w-[480px] md:h-[600px] md:w-[780px] rounded-full blur-[150px]"></div>
                            <div className="relative w-full h-full p-[5px] rounded-2xl bg-gradient-to-tr from-[#0EA5E9] via-[#E879F9] to-[#FACC15] transition-transform hover:scale-[1.01]">
                                <div className="relative w-full h-full rounded-[12px] overflow-hidden">
                                    <Image 
                                        alt="Enhance hiring with AI-powered assessments and tracking"
                                        src="/assests/herobg.webp"
                                        fill
                                        priority
                                        className="object-cover max-w-[520px] md:w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom gradient overlays */}
            <div style={{zIndex: "40 !important"}} className="absolute !z-40 w-[100%] -bottom-[20px] sm:-bottom-[41px] left-0 h-[50px] sm:h-[100px] bg-transparent dark:bg-gradient-to-t from-[#0A1224] dark:to-transparent blur-[40px]"></div>
            <div style={{zIndex: "40 !important"}} className="absolute !z-40 w-[100%] -bottom-[20px] sm:-bottom-[41px] left-0 h-[50px] sm:h-[100px] bg-transparent dark:bg-gradient-to-t from-[#0A1224] dark:to-transparent blur-[40px]"></div>
        </div>
    )
}

export default Hero
