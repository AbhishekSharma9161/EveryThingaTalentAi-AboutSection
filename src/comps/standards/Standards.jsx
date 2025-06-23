import React from 'react'
import StandardsTabs from './StandardsTabs'

const Standards = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="h-full w-full from-[#fffefe] via-[#ffecf9] to-[#eee1fc] bg-gradient-to-br dark:from-black dark:via-slate-900 dark:to-slate-950">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:25px_25px] [mask-image:radial-gradient(ellipse_100%_80%_at_50%_10%,#000_10%,transparent_100%)] dark:[mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_60%,transparent_100%)] before:absolute before:inset-0 before:from-[#1c153117] before:via-[#2d224f28] before:to-[#6151926c] before:z-10 after:absolute after:inset-0 after:via-black/10 after:to-black/30"></div>
                    </div>
                </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 bottom-0 w-full h-[100px] md:h-[200px] bg-gradient-to-b from-white to-transparent dark:from-[#0A1224] dark:to-transparent"></div>
            <div className="flex items-center flex-col justify-center w-full">
                <div className="h-40 pt-1 w-[1.5px] relative !z-20 mx-auto bg-gradient-to-t from-emerald-500 via-indigo-600 to-amber-300/40"></div>
                <div className="relative group mb-4 transition-transform duration-300 cursor-pointer" style={{ opacity: 1, transform: 'none' }}>
                    <div className="flex mx-auto items-center border p-[6px] border-white bg-gradient-to-br from-[#1b8afa32] via-[#da16c62f] to-[#fed91e1a] rounded-full w-fit justify-center">
                        <div className="relative w-14 h-14 rounded-full p-4 shadow-lg">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1B8BFA] to-[#fed91e9d] via-[#da16c6a3] backdrop-blur-sm"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-telescope relative w-full h-full text-white">
                                <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"></path>
                                <path d="m13.56 11.747 4.332-.924"></path>
                                <path d="m16 21-3.105-6.21"></path>
                                <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"></path>
                                <path d="m6.158 8.633 1.114 4.456"></path>
                                <path d="m8 21 3.105-6.21"></path>
                                <circle cx="12" cy="13" r="2"></circle>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container relative mx-auto px-4 max-w-7xl">
                <div className="text-center mb-8">
                    <div className="flex flex-col items-center mb-8 sm:mb-16">
                        <div className="flex items-center justify-center w-full">
                            <div className="right-1/3 rotate-180 top-0 opacity-20 dark:opacity-40 absolute blur-2xl pointer-events-none" aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="434" height="650">
                                    <defs>
                                        <linearGradient id="bs4-a" x1="14.609%" x2="50%" y1="44.544%" y2="100%">
                                            <stop offset="0%" stopColor="#A855F7"></stop>
                                            <stop offset="100%" stopColor="#6366F1" stopOpacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                    <path fill="url(#bs4-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)"></path>
                                </svg>
                            </div>
                            <div className="dark:bg-[#404040] bg-gray-100 py-1 px-2 rounded-lg">
                                <small className="text-sm leading-none text-center w-full dark:text-white bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-bold">Our Standards</small>
                            </div>
                        </div>
                        <h2 className="mt-5 mb-5 text-5xl leading-[44px] md:text-center font-bold text-gray-900 dark:text-white">
                            The Fuel for <span className="gradient-text-new text-transparent bg-clip-text">Our Vision</span>
                        </h2>
                        <p className="text-gray-600 sm:text-xl sm:leading-[30px] dark:text-slate-400 text-center">
                            Driven by vision, we provide comprehensive solutions to meet all your hiring needs.
                        </p>
                    </div>
                    <StandardsTabs />
                </div>
            </div>
            <div style={{zIndex: 40}} className="absolute !z-40 w-[100%] -bottom-[20px] sm:-bottom-[41px] left-0 h-[50px] sm:h-[100px] bg-[#F8E6F9] dark:bg-[#0C101F] blur-[40px]"></div>
            <div style={{zIndex: 40}} className="absolute !z-40 w-[100%] -bottom-[20px] sm:-bottom-[41px] left-0 h-[50px] sm:h-[100px] bg-[#F8E6F9] dark:bg-[#0C101F] blur-[40px]"></div>
        </div>
    )
}

export default Standards 