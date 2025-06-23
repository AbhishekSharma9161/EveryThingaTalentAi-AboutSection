import styles from './styles.module.css';

const TeamMembers = () => {
    const team = [
        { name: "John Doe", role: "Software Engineer", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" },
        { name: "Jane Smith", role: "Product Manager", img: "https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" },
        { name: "David Johnson", role: "UX Designer", img: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" },
        { name: "Emily Davis", role: "Frontend Developer", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" },
        { name: "Michael Wilson", role: "Backend Developer", img: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" },
        { name: "Sarah Thompson", role: "Data Scientist", img: "https://images.unsplash.com/photo-1573496799515-eebbb63814f2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" }
    ];

    return (
        <div className="flex py-0">
            {team.map((member, i) => (
                <div key={i} className="group relative z-0 -ml-4 flex scale-100 items-center transition-all duration-200 ease-in-out hover:z-10 hover:scale-110">
                    <div className="relative overflow-hidden rounded-full bg-white">
                        <div className="bg-size pointer-events-none absolute h-full w-full animate-bg-position from-violet-500 from-30% via-cyan-400 via-50% to-pink-500 to-80% bg-[length:300%_auto] opacity-15 group-hover:bg-gradient-to-r"></div>
                        <div className="z-1 blur-lg"></div>
                        <img src={member.img} alt={member.name} className="rounded-full object-cover m-1 size-8" />
                    </div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2 transform whitespace-nowrap rounded bg-slate-900 p-2 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900">
                        <div className="text-sm font-semibold">{member.name}</div>
                        <div className="text-sm">{member.role}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Box = ({ obj, idx }) => {
    const getBoxClasses = () => {
        let classes = `${styles[`b_${idx}`]} relative h-full w-full overflow-hidden rounded-2xl p-4 flex flex-col`;
        
        if (obj.hasTeam) {
            classes += ' sm:col-span-2';
        }
        
        return classes;
    };

    const renderContent = () => {
        if (obj.icon === 'bot') {
            return (
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot size-8 md:size-12">
                        <path d="M12 8V4H8"></path>
                        <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                        <path d="M2 14h2"></path>
                        <path d="M20 14h2"></path>
                        <path d="M15 13v2"></path>
                        <path d="M9 13v2"></path>
                    </svg>
                    <div className="text-sm font-medium text-black">{obj.number}</div>
                    <strong className="mt-1 inline-block font-bold text-2xl">{obj.desc}</strong>
                    <div className="font-semibold mt-5">
                        <div className="relative font-mono">
                            <div className="invisible">{obj.hashtag}</div>
                            <div className="absolute inset-0 h-full w-full">{obj.hashtag}<span className="">|</span></div>
                        </div>
                    </div>
                </>
            );
        }

        if (obj.isAnimated) {
            return (
                <>
                    <div className="text-sm font-medium text-neutral-800">{obj.number}</div>
                    <div className="group relative flex items-center justify-center px-2 py-2 md:px-6 md:py-4 bg-transparent">
                        <div className="text-2xl font-black uppercase text-foreground/15 transition-all group-hover:opacity-50 md:text-4xl">{obj.desc}</div>
                        <div className="text-md absolute font-black uppercase transition-all group-hover:text-4xl md:text-3xl group-hover:md:text-4xl text-zinc-800">{obj.desc}</div>
                    </div>
                    <sup className="text-sm text-neutral-800">{obj.hashtag}</sup>
                </>
            );
        }

        if (obj.hasTeam) {
            return (
                <>
                    <strong className="text-2xl font-semibold text-white">
                        <div className="font-bold text-[#4f357d]">{obj.number}</div>
                        <p>{obj.desc}</p>
                    </strong>
                    <div className="ml-4 mt-auto">
                        <sup className="text-sm text-[#4f357d]">{obj.hashtag}</sup>
                        <TeamMembers />
                    </div>
                </>
            );
        }

        return (
            <>
                <div className="font-bold text-sm">{obj.number}</div>
                <div className="mt-auto flex justify-end">
                    <div className="text-xl font-black text-black/30 md:text-2xl">
                        <p>{obj.desc}</p>
                        <sup className={`text-sm ${obj.hashtag === '#TRUST' ? 'text-[#4E1B26]' : ''}`}>{obj.hashtag}</sup>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className={getBoxClasses()} style={{ backgroundColor: obj.bg, zIndex: 46 }}>
            {renderContent()}
        </div>
    );
};

export default Box;