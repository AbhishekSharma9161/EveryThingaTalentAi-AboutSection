import React from 'react'
import Image from 'next/image'
import Component2 from './Component2'
import styles from './section7.module.css'

const Component = () => {
    return (
        <section className={styles.section7Root}>
            <div className={styles.section7Container}>
                <Image
                    src="/assests/world-map.svg"
                    alt="Background Image"
                    fill
                    className="object-cover opacity-20"
                />
            </div>
            <div className='absolute inset-0 h-screen w-full'>
                <Image 
                    src="/assests/svgexport-20.svg" 
                    alt="Background pattern" 
                    fill 
                    className="object-cover opacity-10"
                />
            </div>
            <div className={styles.section7Content}>
                <div className={styles.section7Inner}>
                    <div className='absolute inset-0 rounded-[calc(var(--radius)-1px)] bg-gradient-to-br from-[hsl(var(--color-2)_/_0.1)] via-[hsl(var(--color-3)_/_0.1)] to-[hsl(var(--color-1)_/_0.1)]'></div>
                    <div className='relative h-full w-full flex justify-center items-center'>
                        <Component2 />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Component

