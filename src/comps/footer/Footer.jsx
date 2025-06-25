import { Copyright } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='flex flex-col bg-black'>
            <div className='h-100 relative'>
                <Image 
                    src={'/assests/footer.webp'} 
                    alt="Footer background pattern" 
                    fill 
                    className="max-h-[26rem] h-full w-full mt-0 opacity-50" 
                    style={{ color: 'transparent', opacity: 0.5 }} 
                />
                <div className="pointer-events-none absolute h-[10rem] bottom-0 right-0 w-[6rem] bg-gradient-to-l from-[#000000]"></div>
                <div className="pointer-events-none absolute h-[10rem] bottom-0 left-0 w-[6rem] bg-gradient-to-r from-[#000000]"></div>
            </div>
            <div className="sm:flex sm:items-center sm:justify-center bg-black pb-5">
                <span className="text-sm sm:text-center text-gray-400 block">
                    © 2025 <a href="https://usenextbase.com" className="hover:underline">Everything Talent Labs, LLC</a>. All Rights Reserved.
                </span>
            </div>
        </div>
    )
}

export default Footer
