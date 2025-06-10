'use client'
import { useState } from 'react'
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
import { GiHamburgerMenu } from "react-icons/gi";

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

  const liStyle = 'text-sm font-medium cursor-pointer dark:text-white'

  const [showNavMenu, setShowNavMenu] = useState(false)


  return (
    <div
      className="flex items-center justify-between w-full h-[54px] max-w-[1400px] mx-auto px-2 md:px-8 transition-all duration-100 z-50"
      style={{
        boxSizing: 'border-box',
        fontVariationSettings: 'normal',
        WebkitTextSizeAdjust: '100%',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* Navbar section: logo to About */}
      <div className="flex items-center gap-8 rounded-[8px] border-2 border-slate-700/30 dark:border-slate-300/30 shadow-lg hover:shadow-xl bg-slate-200/20 dark:bg-black/20 backdrop-blur-[7px] py-[1px] px-4">
        <a href="/" className="font-bold text-xl">
          <div className="relative flex space-x-2 h-10 items-center text-black dark:text-white">
            <Image src='/assests/lastsection.webp' alt="Everything Talent Logo" width={40} height={40} className="dark:hidden block h-8 w-8" />
            <Image src='/assests/lastsection.webp' alt="Everything Talent Logo" width={40} height={40} className="hidden dark:block h-8 w-8" />
            <span className="lg:hidden font-bold">Everything Talent</span>
            <span className="hidden font-bold lg:inline-block">Everything Talent</span>
          </div>
        </a>
        <div className='border-none h-[30px] w-[1px] -mx-3 bg-slate-700/30 dark:bg-slate-300/30 backdrop-blur-[7px] hidden lg:block'></div>
        <ul className='hidden lg:flex gap-8 items-center rounded-[8px] dark:bg-black/40 bg-slate-200/40 backdrop-blur-[10px] hover:backdrop-blur-none py-[1px] px-4 hover:bg-slate-200 dark:hover:bg-black transition-all duration-100'>
          <li className={liStyle}><a href="/">Home</a></li>
          <li className={liStyle}><a href="/products">Products</a></li>
          <li className='relative group'>
            <div className={` ${liStyle} flex justify-between items-center gap-1 cursor-pointer`}>Solutions <FaAngleDown className="transition group-hover:rotate-180" /></div>
            <div className="absolute left-0 top-full scale-0 group-hover:scale-100 transition-transform origin-top z-10"><DropDownBox obj={leftObj} /></div>
          </li>
          <li className={liStyle}><a href="/pricing">Pricing</a></li>
          <li className={liStyle}><a href="/blog">Blog</a></li>
          <li className={liStyle}><a href="/support">Support</a></li>
          <li className={`${liStyle} font-bold`}>
            <a 
              href="/about"
              className="text-[#b11aff] font-bold transition-colors duration-200 hover:text-[#a000e6] dark:text-[#c166ee] dark:hover:text-[#a000e6]"
            >
              About
            </a>
          </li>
        </ul>
      </div>
      {/* Right section: Request a Demo + ModeToggle (grouped), Login (separate) */}
      <div className="flex items-center gap-5 ml-4">
        {/* Group: Request a Demo + ModeToggle */}
        <div
          className="flex items-center animate-fade-in-right rounded-[8px] border-2 shadow-lg backdrop-blur-[7px] hover:shadow-xl dark:border-slate-300/30 hover:dark:bg-black bg-white/5 dark:bg-black/20"
          style={{
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(40px)',
            opacity: 1,
            transform: 'none',
            borderColor: 'rgba(203,213,225,0.3)',
          }}
        >
          <button
            className="relative whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group animate-rainbow cursor-pointer bg-[length:200%] font-medium transition-all duration-500 ease-in-out hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 hover:scale-[1.02] after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 dark:hover:ring-0 [&>span]:relative [&>span]:z-10 px-4 h-10 rounded-md gradient-border-logo-color-btn text-center overflow-hidden flex items-center justify-center group/modal-btn dark:bg-black bg-white text-black dark:text-white border border-gray-100 dark:border-none"
          >
            <span className="flex items-center text-center transition duration-500 group-hover/modal-btn:translate-x-0">
              <span className="font-medium">Request a Demo</span>
              <FaArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
            </span>
          </button>
          <div className="px-2 flex items-center h-10">
            <ModeToggle />
          </div>
        </div>
        {/* Login button (separate) */}
        <button
          className="relative h-10 px-4 py-2 group bg-white text-black border-none rounded-md font-medium flex items-center transition-all duration-500 ease-in-out hover:scale-[1.02] shadow-lg"
        >
          <span className="flex items-center font-medium">Login<FaArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" /></span>
        </button>
      </div>
      <div className='md:hidden flex justify-between items-center gap-3 text-2xl w-full'>
        <ModeToggle />
        <GiHamburgerMenu onClick={()=> setShowNavMenu(!showNavMenu)} />
        <div className={`${showNavMenu ? 'translate-y-0' : '-translate-y-full'} fixed left-0 top-0 w-full bg-white dark:bg-black border-b-2 border-gray-200 dark:border-gray-800 shadow-lg transition-transform duration-300 ease-in-out z-50 p-6`}>
          <div className="flex justify-between items-center mb-6">
            <div className='w-10 h-10 relative'>
              <Image src='/assests/lastsection.webp' alt="Everything Talent Logo" fill objectFit="cover" />
            </div>
            <GiHamburgerMenu onClick={()=> setShowNavMenu(false)} className="cursor-pointer" />
          </div>
          <ul className='flex flex-col gap-6'>
            <li className={liStyle}>Home</li>
            <li className={liStyle}>Products</li>
            <li className={liStyle}>Solutions</li>
            <li className={liStyle}>Pricing</li>
            <li className={liStyle}>Blog</li>
            <li className={liStyle}>Support</li>
            <li className={`${liStyle} text-purple-400`}>About</li>
          </ul>
          <div className="flex flex-col gap-4 mt-6">
            <button className='flex justify-center items-center rounded text-sm font-medium bg-white px-5 py-3 dark:bg-black border-2'>Request a Demo {<FaAngleRight className='text-2xl' />} </button>
            <button className='flex justify-center items-center gap-2 rounded text-sm font-medium bg-purple-500 text-white px-5 py-3'>Login {<FaArrowRight />}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
