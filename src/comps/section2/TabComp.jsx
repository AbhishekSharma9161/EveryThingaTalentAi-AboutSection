import React from 'react';
import Image from 'next/image';

const TabComp = ({ key, obj }) => {
    return (
        <div className='flex mt-10 bg-gray-950 px-18 py-16 rounded-3xl'>
            <div className=''>
                <div>
                    <h1 className='text-4xl font-medium mb-8'>{obj.heading}</h1>
                    <p className='font-medium mb-10'>{obj.name}</p>
                    <p className=' text-gray-500 mb-8'>{obj.desc}</p>
                    <ul className='list-disc list-inside space-y-2 marker:text-blue-500'>
                        {
                            obj.points.map((point, idx) => <li className='mb-3 text-' key={idx}>{point}</li>)
                        }
                    </ul>
                </div>
            </div>
            <div>
                <div className="relative min-w-[550px] h-[370px]">
                    <Image src={obj.img} alt={obj.heading} fill className="rounded-2xl" />
                </div>

            </div>
        </div>
    );
};

export default TabComp;