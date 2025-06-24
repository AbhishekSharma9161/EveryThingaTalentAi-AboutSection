import Image from 'next/image';

const timelineData = [
    {
        year: '2024',
        tag: 'Everything AI 2.0',
        description: 'Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.',
        stats: [
            { value: '50K+', label: 'users' },
            { value: '98%', label: 'accuracy' },
            { value: '2x faster', label: 'processing' }
        ],
        image: '/assests/section6-1.webp'
    },
    {
        year: '2023',
        tag: 'ML Integration',
        description: 'Introduced personalized machine learning models for users, enhancing prediction accuracy by 30%. Everything AI also launched its first integration with popular CRM tools, allowing seamless data sharing.',
        stats: [
            { value: '+30%', label: 'accuracy' },
            { value: '15+', label: 'integrations' },
            { value: '25K+', label: 'users' }
        ],
        image: '/assests/section6-2.webp'
    },
    {
        year: '2022',
        tag: 'The Beginning',
        description: 'Everything AI was officially launched! Released initial AI-powered automation features for data processing and visualization, setting a foundation for growth in intelligent data solutions.',
        stats: [
            { value: '10+', label: 'features' },
            { value: '1M+', label: 'dataProcessed' },
            { value: '1K+', label: 'clients' }
        ],
        image: '/assests/section6-3.webp'
    }
];

const TimelineCard = ({ data, scale = 1 }) => (
    <div className="flex items-center justify-center sticky top-12 lg:top-28 px-4">
        <div className="flex flex-col relative h-[500px] w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950" style={{ transform: `scale(${scale})` }}>
            <div className="flex flex-col md:flex-row h-full p-8 gap-10 shadow-xl bg-gradient-to-br from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950">
                <div className="w-full md:w-[45%] space-y-5">
                    <div>
                        <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{data.tag}</span>
                        <h2 className="text-3xl font-bold mt-1">{data.year}</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">{data.description}</p>
                    <div className="grid grid-cols-3 gap-4 pt-3">
                        {data.stats.map((stat, idx) => (
                            <div key={idx} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stat.value}</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative w-full md:w-[55%] h-full rounded-xl overflow-hidden hidden md:block">
                    <div className="w-full h-full">
                        <Image
                            alt={`${data.year} illustration`}
                            src={data.image}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={true}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Component = () => {
    return (
        <section id="story" className="pb-16 px-4 bg-gradient-to-tr from-[#ffeffa] via-[#fff5fc] to-[#fcf4f9] dark:from-[#0a1020] dark:via-[#05080e] dark:to-[#0e1526] lg:pb-28 relative">
            <div className="flex items-center flex-col justify-center w-full max-w-3xl mx-auto">
                <Image
                    alt="decorative line"
                    src="/curve-line3.webp"
                    width={718}
                    height={272}
                    className="w-1/2 scale-x-[-1] mb-4"
                    priority={true}
                />
                <div>
                    <div className="relative mx-auto w-fit mb-2">
                        <div 
                            className="absolute -inset-1 rounded-full opacity-30 blur-xl z-0"
                            style={{background: 'radial-gradient(circle, #FF00FF40 0%, #4D8AFF30 50%, #FFAA0020 100%)'}}
                        ></div>
                        <div 
                            className="relative flex items-center p-[6px] border border-white/20 rounded-full w-fit justify-center shadow-lg z-10 overflow-hidden"
                            style={{background: 'linear-gradient(135deg, #FF00FF70 0%, #4D8AFF70 50%, #FFAA0070 100%)'}}
                        >
                            <div 
                                className="absolute inset-0 opacity-30"
                                style={{
                                    backgroundImage: `radial-gradient(circle at 20% 30%, white 0%, transparent 10%),
                                    radial-gradient(circle at 80% 20%, white 0%, transparent 10%),
                                    radial-gradient(circle at 60% 70%, white 0%, transparent 10%)`
                                }}
                            ></div>
                            <div className="relative w-14 h-14 rounded-full p-4 shadow-md overflow-hidden">
                                <div 
                                    className="absolute -inset-1 rounded-full opacity-60 blur-md"
                                    style={{background: 'radial-gradient(circle, #FF00FF 0%, #4D8AFF 50%, #FFAA00 100%)'}}
                                ></div>
                                <div 
                                    className="absolute inset-0 rounded-full backdrop-blur-sm z-0"
                                    style={{background: 'linear-gradient(135deg, #FF00FF 0%, #4D8AFF 50%, #FFAA00 100%)'}}
                                ></div>
                                <div 
                                    className="absolute inset-0 rounded-full opacity-20 z-10"
                                    style={{background: 'linear-gradient(to bottom right, white, transparent)'}}
                                ></div>
                                <div 
                                    className="absolute top-0 left-0 right-0 h-1/3 rounded-t-full opacity-40 z-10"
                                    style={{background: 'linear-gradient(to bottom, white, transparent)'}}
                                ></div>
                                <div className="absolute inset-0 rounded-full shadow-inner z-10"></div>
                                <div className="relative z-20 w-full h-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car-taxi-front w-full h-full text-white drop-shadow-sm">
                                        <path d="M10 2h4"></path>
                                        <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"></path>
                                        <path d="M7 14h.01"></path>
                                        <path d="M17 14h.01"></path>
                                        <rect width="18" height="8" x="3" y="10" rx="2"></rect>
                                        <path d="M5 18v2"></path>
                                        <path d="M19 18v2"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-between items-center px-4 md:px-0 md:w-3xl m-auto">
                <div className="flex justify-center items-center w-fit rounded-sm">
                    <small className="text-sm leading-none text-center w-full dark:text-white bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-bold">Our Values & Milestones</small>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mt-5 text-center mb-6">
                    Our <span style={{
                        backgroundImage: 'linear-gradient(to right, rgb(236, 11, 200), rgb(91, 178, 246), rgb(246, 196, 54))',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent'
                    }}>Journey</span>
                </h1>
                <p className="max-w-2xl text-lg text-gray-600 leading-relaxed mb-8">
                    Explore the milestones that have shaped our path to innovation, where every step brings us closer to transforming the future.
                </p>
                <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group inline-flex animate-rainbow cursor-pointer items-center justify-center bg-[length:200%] font-medium text-white dark:text-black ease-in-out border-white hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 dark:bg-white bg-black dark:hover:ring-0 [&>span]:relative [&>span]:z-10 h-11 rounded-md group relative overflow-hidden px-8 py-3 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <span className="relative z-10 flex items-center gap-2">Subscribe to Updates
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16" style={{transform: 'none'}}><path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path><path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path></svg>
                  </span>
                </button>
            </div>

            <div className="mt-24">
                {timelineData.map((data, index) => (
                    <TimelineCard 
                        key={data.year} 
                        data={data} 
                        scale={0.92 + (index * 0.03)} 
                    />
                ))}
            </div>

            <div style={{zIndex: 40}} className="absolute !z-40 w-[100%] -bottom-[20px] sm:-bottom-[41px] left-0 h-[50px] sm:h-[100px] bg-gradient-to-br from-[#FDF4FB] via-[#FDF4FB] to-[#FDF4FB] dark:bg-[#070B14] dark:bg-none blur-[40px]"></div>
            <div style={{zIndex: 40}} className="absolute !z-40 w-[100%] -bottom-[20px] sm:-bottom-[41px] left-0 h-[50px] sm:h-[100px] bg-gradient-to-br from-[#FDF4FB] via-[#FDF4FB] to-[#FDF4FB] dark:bg-[#070B14] dark:bg-none blur-[40px]"></div>
        </section>
    );
};

export default Component;