import Image from 'next/image';

const Right = () => {
    return (
        <div className="rounded-2xl bg-gradient-to-br from-pink-500 via-sky-500 to-yellow-500 p-1.5 hover:scale-101 ease-in-out duration-200">
            <div className=''>
                <div className='w-130 h-120 relative rounded-2xl overflow-hidden'>
                    <Image src="/assests/herobg.webp" alt="Hero Background" fill />
                </div>
            </div>
        </div>
    )
}

export default Right
