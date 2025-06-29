import React from 'react'
import GradientText from '../textComp/GradientText'

const Component = () => {
    const cards = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain mb-3 h-6 w-6 text-purple-400">
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                    <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                    <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                    <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                </svg>
            ),
            title: "AI-Powered",
            description: "Advanced AI/ML algorithms for precise matching"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users mb-3 h-6 w-6 text-purple-400">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            ),
            title: "Human-Centric",
            description: "Built by recruiters, for recruiters"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap mb-3 h-6 w-6 text-purple-400">
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                    <path d="M22 10v6"></path>
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                </svg>
            ),
            title: "Skill Assessment",
            description: "Comprehensive skill evaluation system"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket mb-3 h-6 w-6 text-purple-400">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
            ),
            title: "Future-Ready",
            description: "Constantly evolving with industry needs"
        }
    ];

    return (
        <section className="relative z-20 overflow-visible mx-auto pb-40 dark:from-black dark:via-slate-900 dark:to-slate-950 from-[#fffefe] via-[#ffecf9] to-[#eee1fc] bg-gradient-to-tr">
            <div className="z-20 absolute h-60 bg-gradient-to-b w-full dark:from-[#020718d5] dark:via-[#080f21b7] dark:to-[#0207182e] from-[#f7e7fbd9]"></div>
            <div className="absolute inset-0 h-full w-full bg-transparent bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:[background-size:20px_20px] z-10"></div>
            <div style={{zIndex: 45}} className="h-40 pt-1 w-[1.5px] relative mx-auto bg-gradient-to-t from-blue-500 via-purple-600 to-yellow-300/40"></div>
            <div className="relative z-30 flex justify-center mb-16">
                <div className="flex mx-auto items-center border p-[6px] border-white bg-gradient-to-br from-[#1b8afa32] via-[#da16c62f] to-[#fed91e1a] rounded-full w-fit justify-center">
                    <div className="relative w-14 h-14 rounded-full flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1B8BFA] to-[#fed91e9d] via-[#da16c6a3] backdrop-blur-sm"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb w-[29px] h-[29px] rotate-180 text-white relative z-10">
                            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                            <path d="M9 18h6"></path>
                            <path d="M10 22h4"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="container relative z-40 max-w-7xl mx-auto px-4">
                <div className="absolute left-[50px] top-0 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500 via-pink-350 to-transparent opacity-20 blur-2xl pointer-events-none"></div>
                <div className="absolute right-[50px] top-0 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500 via-pink-350 to-transparent opacity-20 blur-2xl pointer-events-none"></div>
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-black dark:via-slate-900 dark:to-slate-950 blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-black dark:via-slate-900 dark:to-slate-950 blur-3xl"></div>
                <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-black dark:via-slate-900 dark:to-slate-950 blur-3xl"></div>
                
                <div className="flex flex-row lg:gap-20 justify-center">
                    <div className="lg:w-1/2 relative">
                        <h2 className="mb-6 text-4xl font-bold tracking-tight dark:text-white sm:text-5xl">
                            The <GradientText text="Story" /> Behind Us
                        </h2>
                        <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                            It all started with one question: What if hiring didn't have to feel like gambling on a hunch?
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {cards.map((card, index) => (
                                <div key={index} className="rounded-xl border border-border hover:border-none dark:bg-gray-900/50 p-4 backdrop-blur-sm md:p-6 transition-all shadow-xl duration-200 group dark:border-gray-700 hover:gradient-border hover:bg-purple-600 bg-gradient-to-br from-purple-50 via-pink-50 to-[#ffffff76] dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-[101%]">
                                    {card.icon}
                                    <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{card.title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{card.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="relative h-[500px] transition-transform duration-200 hover:scale-x-105 overflow-hidden rounded-2xl">
                            <img 
                                alt="Story section visual representation" 
                                src="/assests/section3.svg"
                                className="object-cover absolute inset-0 w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{zIndex: 40}} className="absolute !z-40 w-[100%] -bottom-[41px] left-0 h-[100px] bg-gradient-to-br from-[#FDF4FB] via-[#FDF4FB] to-[#FDF4FB] dark:from-black dark:via-slate-900 dark:to-slate-950 blur-[40px]"></div>
            <div style={{zIndex: 40}} className="absolute !z-40 w-[100%] -bottom-[41px] left-0 h-[100px] bg-gradient-to-br from-[#FDF4FB] via-[#FDF4FB] to-[#FDF4FB] dark:from-black dark:via-slate-900 dark:to-slate-950 blur-[40px]"></div>
            <div style={{zIndex: 40}} className="absolute !z-40 w-[100%] -top-[41px] left-0 h-[100px] bg-gradient-to-br from-[#FCECF9] via-[#F7E6FA] to-[#EFE2FD] dark:from-black dark:via-slate-900 dark:to-slate-950 blur-[40px]"></div>
            <div style={{zIndex: 40}} className="absolute !z-40 w-[100%] -top-[41px] left-0 h-[100px] bg-gradient-to-br from-[#FCECF9] via-[#F7E6FA] to-[#EFE2FD] dark:from-black dark:via-slate-900 dark:to-slate-950 blur-[40px]"></div>
        </section>
    )
}

export default Component
