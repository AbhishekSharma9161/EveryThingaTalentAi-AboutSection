import Box from './Box';
import styles from './styles.module.css';

const Component = () => {
    const items = [
        { "desc": "With us, there are no surprises—just straight talk and genuine commitment.", "hashtag": "#HONESTY", "bg": "#fde047", "number": "01" },
        { "desc": "Embrace hard work", "hashtag": "#HARDWORK", "special": true, "bg": "#fdba74", "number": "02", "icon": "bot" },
        { "desc": "We act with urgency to ensure progress and deliver results efficiently. Every moment matters.", "hashtag": "#URGENCY", "bg": "#8b5cf6", "number": "03", "hasTeam": true },
        { "desc": "Grow 1% every day", "hashtag": "#GROWTHMINDSET", "bg": "#bbf7d0", "number": "04" },
        { "desc": "We're here to help you aim higher, break limits, and achieve what others might think impossible.", "hashtag": "#ASPIRATION", "bg": "#bef264", "number": "05" },
        { "desc": "Do hard things", "hashtag": "#RESILIENT", "bg": "#d4d4d8", "number": "06", "isAnimated": true },
        { "desc": "We value fresh ideas, bold solutions, and the freedom to imagine what's next.", "hashtag": "#CREATIVITY", "bg": "#fda4af", "number": "07" },
        { "desc": "Commit to continuous learning and improvement", "hashtag": "#LEARNING", "bg": "#bfdbfe", "number": "08" },
        { "desc": "Build trust through actions, not just words.", "hashtag": "#TRUST", "bg": "#f77c73", "number": "09" },
        { "desc": "Every project, every solution we create is aimed at contributing to something greater.", "hashtag": "#CONTRIBUTION", "bg": "#f5e660", "number": "10" }
    ];

    return (
        <div className="relative h-full w-full bg-gradient-to-tr from-[#fff9fd] via-[#fff6fc] to-[#ffedfa] dark:bg-gradient-to-bl dark:from-[#0e1628] dark:via-[#0a1121] dark:to-[#0e1628] py-10 sm:py-16 md:py-28 px-4 sm:px-6 lg:px-8 !pt-0">
            <div className="flex justify-end items-center max-w-3xl mx-auto">
                <img 
                    alt="decorative line" 
                    src="/images/curve-line3.png"
                    className="mb-9 mr-7"
                    style={{zIndex: 44}}
                    width={718}
                    height={272}
                />
            </div>
            
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-8 sm:mb-16">
                    <div className="flex items-center justify-center w-full">
                        <div className="dark:bg-[#404040] bg-gray-100 py-1 px-2 rounded-lg">
                            <small className="text-sm leading-none text-center w-full dark:text-white bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-bold">
                                Our Values
                            </small>
                        </div>
                    </div>
                    <h2 className="mt-5 mb-5 text-5xl leading-[44px] md:text-center font-bold text-gray-900 dark:text-white">
                        Our Philosophy in <span className="gradient-text-new text-transparent bg-clip-text">Action</span>
                    </h2>
                    <p className="text-gray-600 sm:text-xl sm:leading-[30px] dark:text-slate-400 text-center">
                        At Everything Talent, Bringing Our Values to Life Through Meaningful Actions
                    </p>
                </div>

                <div className={styles.gridComp}>
                    {items.map((item, idx) => <Box obj={item} key={idx} idx={idx} />)}
                </div>

                <div className="absolute !z-40 w-[100%] -bottom-[41px] left-0 h-[100px] bg-gradient-to-br from-[#FDF4FB] via-[#FDF4FB] to-[#FDF4FB] dark:from-black dark:via-slate-900 dark:to-slate-950 blur-[40px]"></div>
                <div className="absolute !z-40 w-[100%] -top-[41px] left-0 h-[100px] bg-gradient-to-br from-[#FCECF9] via-[#F7E6FA] to-[#EFE2FD] dark:from-black dark:via-slate-900 dark:to-slate-950 blur-[40px]"></div>
            </div>
        </div>
    );
};

export default Component;