import { Copyright } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='flex flex-col'>
            <div className='h-100 relative'>
                <Image src={'/assests/footer.webp'} fill></Image>
            </div>
            <div className='m-auto'>Ajay Adikari</div>
        </div>
    )
}

export default Footer
