import Link from 'next/link'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Image from 'next/image'


const Component = () => {
    const matrix = [['Resources', 'Blogs', 'Success Stories', 'Case Studies', 'Whitepapers', 'FAQs', 'Hiring Guides', 'Support'], ['Get Started', 'Pricing', 'Hiring Solutions', 'Funded Startups', 'Free Trial', 'Contact Support', 'Request Demo', 'Trust'], ['Legal', 'Privacy Policy', 'Terms of Service', 'Cookie Policy', 'CCPA Compliance']]
    return (
        <div className="relative">
            <div className='flex justify-start items-start p-6 md:pl-22 md:pt-30 bg-black flex-wrap lg:flex-nowrap gap-10'>
                <div className="max-w-72 ml-64">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <Image src={'/assests/lastsection.webp'} alt="Everything Talent Logo" width={160} height={160} className="-ml-1 h-40 w-40" style={{ color: 'transparent' }} />
                        </a>
                    </div>
                    <h1 className="self-center text-3xl font-semibold whitespace-nowrap text-white ai-style-change-1">Everything Talent</h1>
                    <h2 className="mb-6 text-sm font-semibold text-gray-400 w-64">Enhancing Hiring with AI-powered assessment and tracking for accurate recruitment</h2>
                    <div className="flex items-center space-x-6">
                        <a className="text-white hover:text-gray-500 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter" href="https://twitter.com/EVRYTNGTALENT"><FaTwitter className="w-7 h-8" /></a>
                        <a className="text-white hover:text-gray-500 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Connect with us on LinkedIn" href="https://www.linkedin.com/company/everything-talent-ai/"><FaLinkedin className="w-6 h-6" /></a>
                        <a className="text-white hover:text-gray-500 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to our YouTube channel" href="https://www.youtube.com/channel/UCK5H3HNz_5gtZkFDBG2ar1A"><FaYoutube className="w-8 h-8" /></a>
                        <a className="text-white hover:text-gray-500 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" href="https://www.facebook.com/EVRYTNGTALENT"><FaFacebook className="w-6 h-6" /></a>
                    </div>
                </div>
                <div className="lg:flex md:gap-48 w-full mt-8 justify-center">
                    {matrix.map((arr, columnIndex) => (
                        <div key={`column-${columnIndex}`} className='w-[45%] md:w-auto'>
                            <h2 className="mb-6 text-sm font-bold uppercase text-white">
                                {columnIndex === 0 ? 'Resources' : columnIndex === 1 ? 'Get Started' : 'Legal'}
                            </h2>
                            <ul className="text-gray-400">
                                {arr.slice(1).map((word, rowIndex) => (
                                    <li key={`${columnIndex}-${word}`} className="mb-4">
                                        <Link href={'#'} className='hover:underline'>
                                            {word}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            {/* EVERYTHINGTALENT.AI gradient text block absolutely positioned above the skyline/tower */}
            <div className="absolute bottom-60 max-lg:bottom-40 right-20 hidden sm:block" style={{ pointerEvents: 'none', bottom: '-213px' }}>
                <div className="w-[600px] h-[250px] flex items-center justify-center bg-invisible p-4 mb-4">
                    <div className="relative w-full max-w-2xl h-64 rounded-lg transition-shadow duration-300">
                        {[1,0.4,0.2,0.15,0.1,0.05,0.02].map((opacity, i) => (
                            <div key={i} className="absolute inset-0 flex items-center justify-center transition-transform duration-200 ease-out" style={{ transform: 'translate(0px, 0px)', zIndex: 7-i }}>
                                <h1 className="text-2xl md:text-3xl font-bold tracking-widest text-transparent bg-clip-text select-none"
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, #B11AFF 0%, #FF689F 100%)',
                                        opacity,
                                        WebkitBackgroundClip: 'text'
                                    }}>
                                    EVERYTHINGTALENT.AI
                                </h1>
                            </div>
                        ))}
                        <div className="absolute inset-0 opacity-10">
                            <div className="w-full h-full grid grid-cols-40 grid-rows-24 rounded-lg overflow-hidden">
                                {Array.from({length: 40*24}).map((_,i) => <div key={i}></div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component
