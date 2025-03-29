import React from 'react'
import Toggle from '@/comps/textComp/Toggle'
import DropDownBox from './DropDownBox'
import styles from './styles.module.css'
import { FaAngleDown } from "react-icons/fa6";
import Image from 'next/image';
import { FaAngleRight } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { CiDesktop } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import ModeToggle from '@/components/ui/ModeToggle';

const NavBar = () => {

  const leftObj = [
    {
      avatar: "",
      heading: "Hiring Solution",
      desc: "Streamline hiring processes by matching the right talent with the right opportunity"
    },
    {
      avatar: "",
      heading: "Funded Startups",
      desc: "Empower startups with essential resources and funding for scaling and success"
    }
  ]

  const rightObj = [
    {
      avatar: "",
      heading: "Light",
    },
    {
      avatar: "",
      heading: "Dark",
    },
    {
      avatar: "",
      heading: "System",
    }
  ]

  const liStyle = 'text-sm font-medium cursor-pointer'


  return (
    <div className='sticky top-0 flex justify-between items-center px-8 z-3 '>
      <div className="flex justify-between items-center px-5 gap-10 border-2 rounded border-gray-700 h-full  bg-transparent backdrop-blur-md z-50">
        <div className='w-10 h-10 relative'>
          <Image src='/assests/lastsection.webp' fill objectFit="cover" />
        </div>
        <div className='h-8 w-[1px] bg-gray-500 rounded '></div>
        <ul className='flex gap-5 justify-around items-center h-full'>
          <li className={liStyle}>Home</li>
          <li className={liStyle}>Products</li>
          <li>
            <div className={`relative ${styles.parent}`}>
              <li className={` ${liStyle} flex justify-between items-center gap-1`}>Solutions <FaAngleDown className={styles.arrow} /></li>
              <div className={styles.child}>
                <DropDownBox obj={leftObj} />
              </div>
            </div>
          </li>

          <li className={`liStyle`}>Pricing</li>
          <li className={liStyle}>Blog</li>
          <li className={liStyle}>Support</li>
          <li className={`${liStyle} text-purple-400`}>About</li>
        </ul>
      </div>
      <div className="flex justify-between items-center px-5 gap-2 border-2 rounded border-gray-700 h-full  bg-transparent backdrop-blur-md z-50">
        <button className='flex justify-between items-center'>Request a Demo {<FaAngleRight />} </button>
        <ModeToggle/>
        <button className='flex justify-between items-center'>Login {<FaArrowRight />}</button>
      </div>
    </div>
  )
}

export default NavBar
