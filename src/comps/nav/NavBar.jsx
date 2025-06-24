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

  const liStyle = 'font-regular text-slate-950 dark:text-slate-50 text-sm font-[400]'

  const [showNavMenu, setShowNavMenu] = useState(false)

  return (
    <nav className="bg-white dark:bg-[#121212] transition-colors duration-300 flex items-center justify-between w-full h-[54px] max-w-[1400px] mx-auto px-2 md:px-8 z-50">
      {/* Left section with logo and navigation */}
      <div className="flex items-center gap-8 rounded-[8px] border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-[#121212] py-[1px] px-4">
        {/* Mobile Logo */}
        <div className="block lg:hidden">
          <a className="font-bold text-xl" href="/">
            <div className="relative flex space-x-2 h-10 md:w-fit items-center justify-center text-black dark:text-white dark:-ml-4 -ml-2">
              <Image src='/assests/lastsection.webp' alt="Everything Talent Logo" width={40} height={40} className="dark:hidden block h-8 w-8" />
              <Image src='/assests/lastsection.webp' alt="Everything Talent Logo" width={40} height={40} className="hidden dark:block h-8 w-8" />
              <span className="lg:hidden font-bold">Everything Talent</span>
              <span className="hidden font-bold lg:inline-block">Everything Talent</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-8 items-center rounded-[8px] bg-white dark:bg-[#121212] py-[1px] px-4 transition-all duration-100">
          <a className="font-bold text-xl pl-3" href="/">
            <div className="relative flex space-x-2 h-10 md:w-fit items-center justify-center text-black dark:text-white dark:-ml-4 -ml-2">
              <Image src='/assests/lastsection.webp' alt="Everything Talent Logo" width={40} height={40} className="dark:hidden block h-8 w-8" />
              <Image src='/assests/lastsection.webp' alt="Everything Talent Logo" width={40} height={40} className="hidden dark:block h-8 w-8" />
              <span className="lg:hidden font-bold">Everything Talent</span>
            </div>
          </a>
          <div className="border-none h-[30px] w-[1px] -mx-3 bg-slate-700/30 dark:bg-slate-300/30 backdrop-blur-[7px]"></div>
          <li className={liStyle}><a href="/">Home</a></li>
          <li className={liStyle}><a href="/products">Products</a></li>
          <nav aria-label="Main" data-orientation="horizontal" dir="ltr" className="relative z-10 flex max-w-max flex-1 items-center justify-center">
            <div style={{ position: 'relative' }}>
              <ul data-orientation="horizontal" className="group flex flex-1 list-none items-center justify-center space-x-1" dir="ltr">
                <li>
                  <button id="solutions-menu" data-state="closed" aria-expanded="false" className="group inline-flex h-10 w-max items-center justify-center rounded-md py-2 transition-colors hover:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 group font-regular text-sm font-[400] text-slate-950 dark:text-slate-50">
                    Solutions 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-100 group-data-[state=open]:rotate-180">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
            <div className="absolute left-0 top-full flex justify-center"></div>
          </nav>
          <li className={liStyle}><a href="/pricing">Pricing</a></li>
          <li className={liStyle}><a href="/blog">Blog</a></li>
          <li className={liStyle}><a href="/support">Support</a></li>
          <li className={`${liStyle} font-bold`}>
            <a href="/about" className="text-[#c166ee] dark:hover:text-customPurple hover:text-customPurple">About</a>
          </li>
        </ul>
      </div>

      {/* Right section */}
      <div className="flex gap-5 py-1">
        <div className="hidden md:flex animate-fade-in-right items-center rounded-[8px]">
          <div className="flex items-center space-x-4 rounded-[10px] px-[2px] pl-[2px] -py-[2px] bg-white/5 dark:bg-transparent">
            <div className="hidden md:flex animate-fade-in-right items-center rounded-[8px] border-2 shadow-lg backdrop-blur-[7px] hover:shadow-xl dark:border-slate-300/30 hover:dark:bg-black" style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(40px)' }}>
              <div className="hidden md:block">
                <div className="flex items-center justify-center">
                  <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group animate-rainbow cursor-pointer bg-[length:200%] font-medium transition-all duration-500 ease-in-out hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 hover:scale-[1.02] after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 dark:hover:ring-0 [&>span]:relative [&>span]:z-10 px-4 h-full w-full rounded-md gradient-border-logo-color-btn text-center relative overflow-hidden flex items-center justify-center group/modal-btn dark:bg-black bg-white text-black dark:text-white border border-gray-100 dark:border-none py-[8px]">
                    <span className="flex ml-2 items-center text-center transition duration-500 group-hover/modal-btn:translate-x-0">
                      <p>Request a Demo</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right translate-x-1 transition">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <div className="w-full pr-4 pl-4">
                <ModeToggle />
              </div>
            </div>
            <div className="ml-4 hidden lg:block shadow-lg border-1 rounded-lg">
              <div className="p-[2px] dark:p-[0px] border-[1px] dark:border-[2px] shadow-lg shadow-white/10 border-white/5 bg-white/5 dark:bg-black/20 backdrop-blur-[7px] rounded-lg dark:border-slate-300/30" style={{ background: 'rgba(100, 116, 139, 0.1)', backdropFilter: 'blur(40px)' }}>
                <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative inline-flex animate-rainbow cursor-pointer items-center justify-center rounded-md bg-[length:200%] font-medium dark:text-black transition-all duration-500 ease-in-out border-white hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 hover:scale-[1.02] after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 dark:bg-white dark:hover:ring-0 [&>span]:relative [&>span]:z-10 h-10 px-4 py-2 group w-full bg-white text-black border-none">
                  Login
                  <svg className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Theme Toggle */}
        <div className="md:hidden px-4 pb-[4px] bg-white dark:bg-[#121212] rounded-[8px] border-2 border-slate-200 dark:border-slate-700">
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu hover:cursor-pointer my-auto py-auto lg:hidden -mr-2" onClick={() => setShowNavMenu(!showNavMenu)}>
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      </div>

      {/* Mobile Menu */}
      {showNavMenu && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowNavMenu(false)}></div>
          <div className="fixed top-0 right-0 w-full max-w-xs bg-white dark:bg-black p-6 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <div className="w-10 h-10 relative">
                <Image src='/assests/lastsection.webp' alt="Everything Talent Logo" width={40} height={40} />
              </div>
              <button onClick={() => setShowNavMenu(false)} className="text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <nav className="space-y-6">
              <a href="/" className="block text-lg font-medium text-gray-900 dark:text-white">Home</a>
              <a href="/products" className="block text-lg font-medium text-gray-900 dark:text-white">Products</a>
              <a href="/solutions" className="block text-lg font-medium text-gray-900 dark:text-white">Solutions</a>
              <a href="/pricing" className="block text-lg font-medium text-gray-900 dark:text-white">Pricing</a>
              <a href="/blog" className="block text-lg font-medium text-gray-900 dark:text-white">Blog</a>
              <a href="/support" className="block text-lg font-medium text-gray-900 dark:text-white">Support</a>
              <a href="/about" className="block text-lg font-medium text-[#c166ee]">About</a>
            </nav>
            <div className="mt-8 space-y-4">
              <button className="w-full px-4 py-2 text-sm font-medium text-black bg-white rounded-md border border-gray-200 hover:bg-gray-50 dark:bg-black dark:text-white dark:border-gray-700">
                Request a Demo
              </button>
              <button className="w-full px-4 py-2 text-sm font-medium text-white bg-[#c166ee] rounded-md hover:bg-[#a000e6]">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
