import { Copyright } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='flex flex-col bg-black'>
            <div className='h-100 relative'>
                <Image src={'/assests/footer.webp'} alt="Footer background pattern" fill />
            </div>
        </div>
    )
}

export default Footer
