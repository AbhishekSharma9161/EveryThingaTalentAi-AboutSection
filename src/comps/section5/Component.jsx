import Image from 'next/image'
import GradientText from '../textComp/GradientText'

const Component = () => {
    const cards = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-round mb-3 h-6 w-6 text-purple-400"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>,
            heading: "Community-Driven",
            desc: "We build strong connections and foster collaboration within our team."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb mb-3 h-6 w-6 text-purple-400"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>,
            heading: "Innovation First",
            desc: "We encourage creative thinking and novel approaches to challenges."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket mb-3 h-6 w-6 text-purple-400"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>,
            heading: "Action Oriented",
            desc: "We transform ideas into tangible results through decisive action."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up mb-3 h-6 w-6 text-purple-400"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>,
            heading: "Continuous Growth",
            desc: "We embrace learning and development as core principles."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star mb-3 h-6 w-6 text-purple-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
            heading: "Excellence Pursuit",
            desc: "We strive for exceptional quality in everything we do."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award mb-3 h-6 w-6 text-purple-400"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>,
            heading: "Shared Success",
            desc: "We celebrate achievements and grow together as one team."
        }
    ];

    return (
        <section className="relative z-20 overflow-hidden mx-auto pb-20 dark:from-black dark:via-slate-900 dark:to-slate-950 from-[#fffefe] via-[#ffecf9] to-[#eee1fc] bg-gradient-to-tr">
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
                {/* Background gradients */}
                <div className="absolute left-[50px] top-0 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500 via-pink-350 to-transparent opacity-20 blur-2xl pointer-events-none"></div>
                <div className="absolute right-[50px] top-0 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500 via-pink-350 to-transparent opacity-20 blur-2xl pointer-events-none"></div>
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-black dark:via-slate-900 dark:to-slate-950 blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-black dark:via-slate-900 dark:to-slate-950 blur-3xl"></div>
                <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-black dark:via-slate-900 dark:to-slate-950 blur-3xl"></div>

                <div className="flex flex-row lg:gap-20 justify-center lg:flex-row-reverse">
                    <div className="lg:w-1/2 relative">
                        <h2 className="mb-6 text-4xl font-bold tracking-tight dark:text-white sm:text-5xl">
                            <span style={{
                                backgroundImage: 'linear-gradient(to right, rgb(236, 11, 200), rgb(91, 178, 246), rgb(246, 196, 54))',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                color: 'transparent'
                            }}>How We Thrive</span>
                        </h2>
                        <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                            At Everything Talent, we break the norm. Driven by community, we empower individuals to innovate, learn, and push boundaries—fostering shared growth and a relentless pursuit of excellence.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {cards.map((card, index) => (
                                <div key={index} className="rounded-xl border border-border hover:border-none dark:bg-gray-900/50 p-4 backdrop-blur-sm md:p-6 transition-all shadow-xl duration-200 group dark:border-gray-700 hover:gradient-border hover:bg-purple-600 bg-gradient-to-br from-purple-50 via-pink-50 to-[#ffffff76] dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-[101%]">
                                    {card.icon}
                                    <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{card.heading}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="relative transition-transform duration-200 hover:scale-x-105 overflow-hidden rounded-2xl h-full">
                            <Image
                                alt="Story section visual representation"
                                src="/assests/section5.webp"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient overlays */}
            <div style={{zIndex: 40}} className="absolute w-[100%] -bottom-[41px] left-0 h-[100px] bg-gradient-to-br from-[#FDF4FB] via-[#FDF4FB] to-[#FDF4FB] dark:from-black dark:via-slate-900 dark:to-slate-950 blur-[40px]"></div>
            <div style={{zIndex: 40}} className="absolute w-[100%] -bottom-[41px] left-0 h-[100px] bg-gradient-to-br from-[#FDF4FB] via-[#FDF4FB] to-[#FDF4FB] dark:from-black dark:via-slate-900 dark:to-slate-950 blur-[40px]"></div>
            <div style={{zIndex: 40}} className="absolute w-[100%] -top-[41px] left-0 h-[100px] bg-gradient-to-br from-[#FCECF9] via-[#F7E6FA] to-[#EFE2FD] dark:from-black dark:via-slate-900 dark:to-slate-950 blur-[40px]"></div>
            <div style={{zIndex: 40}} className="absolute w-[100%] -top-[41px] left-0 h-[100px] bg-gradient-to-br from-[#FCECF9] via-[#F7E6FA] to-[#EFE2FD] dark:from-black dark:via-slate-900 dark:to-slate-950 blur-[40px]"></div>
        </section>
    );
}

export default Component