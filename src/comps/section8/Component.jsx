import Link from 'next/link'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Image from 'next/image'


const Component = () => {
    const matrix = [['Resources', 'Blogs', 'Success Stories', 'Case Studies', 'Whitepapers', 'FAQs', 'Hiring Guides', 'Support'], ['Get Started', 'Pricing', 'Hiring Solutions', 'Funded Startups', 'Free Trial', 'Contact Support', 'Request Demo', 'Trust'], ['Legal', 'Privacy Policy', 'Terms of Service', 'Cookie Policy', 'CCPA Compliance']]
    return (
        <div className='flex justify-start items-start pl-22 pt-30 bg-black flex-wrap lg:flex-nowrap gap-10'>
            <div >
                <div className="w-42 h-42 relative ">
                    <Image src={'/assests/lastsection.webp'} fill></Image>
                </div>
                <h1 className='text-3xl font-medium'>Everything Talent</h1>
                <p className='font-bold text-sm text-gray-500'>Enhancing Hiring with AI-powered assessment and tracking for accurate recruitment</p>
                <div>
                    <div className='flex gap-5 text-3xl mt-8 text-white'>
                        <FaTwitter />
                        <FaLinkedin />
                        <FaYoutube />
                        <FaFacebook />
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-between lg:justify-around items-start">
                {
                    matrix.map((arr) => {
                        return <div className=''>{
                            arr.map((word) => {
                                return <Link href={'#'} className='block my-5 text-gray-400 w-30'>{word}</Link>
                            })
                        }</div>
                    })
                }
            </div>
        </div>
    )
}

export default Component
