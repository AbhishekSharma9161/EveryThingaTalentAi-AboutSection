import React from 'react'
import ImageScroller from '@/comps/textComp/ImageScroller'

const Component = () => {
    const image = {
        "src": "/assests/section5.webp",
        "alt": "image"
    }
    return (
        <div className='relative'>
            <ImageScroller image={image} />
        </div>
    )
}

export default Component
