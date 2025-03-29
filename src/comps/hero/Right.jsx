import Image from 'next/image';

const Right = () => {
    return (
        <div className="w-full min-w-50 max-w-170 rounded-xl bg-gradient-to-br from-pink-500 via-sky-500 to-yellow-500 p-[5px] hover:scale-101 ease-in-out duration-200">
            <div className=''>
                <div className='w-full min-w-50 max-w-full h-125 relative rounded-xl overflow-hidden'>
                    <Image src="/assests/herobg.webp" alt="Hero Background" fill />
                </div>
            </div>
        </div>
    )
}

export default Right
