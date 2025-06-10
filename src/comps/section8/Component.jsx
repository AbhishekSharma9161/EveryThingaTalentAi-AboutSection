import Link from 'next/link'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Image from 'next/image'


const Component = () => {
    const matrix = [['Resources', 'Blogs', 'Success Stories', 'Case Studies', 'Whitepapers', 'FAQs', 'Hiring Guides', 'Support'], ['Get Started', 'Pricing', 'Hiring Solutions', 'Funded Startups', 'Free Trial', 'Contact Support', 'Request Demo', 'Trust'], ['Legal', 'Privacy Policy', 'Terms of Service', 'Cookie Policy', 'CCPA Compliance']]
    return (
        <div className='flex justify-start items-start p-6 md:pl-22 md:pt-30 bg-black flex-wrap lg:flex-nowrap gap-10'>
            <div className="w-full md:w-auto">
                <div className="w-32 h-32 md:w-42 md:h-42 relative mx-auto md:mx-0">
                    <Image src={'/assests/lastsection.webp'} alt="Everything Talent logo" fill />
                </div>
                <h1 className='text-2xl md:text-3xl font-medium text-center md:text-left mt-4'>Everything Talent</h1>
                <p className='font-bold text-xs md:text-sm text-gray-500 text-center md:text-left mt-2'>Enhancing Hiring with AI-powered assessment and tracking for accurate recruitment</p>
                <div>
                    <div className='flex gap-5 text-2xl md:text-3xl mt-6 md:mt-8 text-white justify-center md:justify-start'>
                        <FaTwitter className="cursor-pointer hover:text-purple-400 transition-colors" />
                        <FaLinkedin className="cursor-pointer hover:text-purple-400 transition-colors" />
                        <FaYoutube className="cursor-pointer hover:text-purple-400 transition-colors" />
                        <FaFacebook className="cursor-pointer hover:text-purple-400 transition-colors" />
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap justify-between md:justify-around items-start gap-6 md:gap-0">
                {
                    matrix.map((arr, columnIndex) => (
                        <div key={`column-${columnIndex}`} className='w-[45%] md:w-auto'>
                            {arr.map((word, rowIndex) => (
                                <Link key={`${columnIndex}-${word}`} href={'#'} className='block my-3 md:my-5 text-sm md:text-base text-gray-400 hover:text-purple-400 transition-colors'>
                                    {word}
                                </Link>
                            ))}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Component
