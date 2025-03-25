// 'use client'

// import Image from 'next/image'
// import { useState, useEffect } from 'react';

// const ImageScroller = ({ image }) => {

//     const [scrollY, setScrollY] = useState(0);
//     const [isFixed, setIsFixed] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrollY(window.scrollY);
//             setIsFixed(window.scrollY > 300); // Adjust 300 to the desired scroll point
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div style={{ height: '150vh', padding: '20px' }}>
//             <div
//                 style={{
//                     position: isFixed ? 'fixed' : 'relative',
//                     top: isFixed ? '0' : 'auto',
//                     zIndex: 1000,
//                     background: 'white',
//                     padding: '10px',
//                 }}
//             >
//                 <div style={{ display: 'flex', gap: '10px' }}>
//                     <Image
//                         src={image.src}
//                         alt={image.alt}
//                         width={200}
//                         height={200}
//                         style={{
//                             borderRadius: '8px',
//                             transform: `scale(${1 + scrollY / 1000})`, // Zoom effect
//                             transition: 'transform 0.2s',
//                         }}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };



// export default ImageScroller


import React from 'react'

const ImageScroller = () => {
  return (
    <div>
      
    </div>
  )
}

export default ImageScroller

