import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {DribbbleIcon, GithubIcon, LinkedinIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon} from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import Image from 'next/image'

const MotionLink = motion(Link)

const CustomLink = ({href, title, className=''}) => {
  const router = useRouter();
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:text-light ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  )
}
const CustomMobileLink = ({href, title, className='', toggle}) => {
  const router = useRouter();
  const handleClick = ()=>{
    toggle();
    router.push(href)
  }
  return(
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:text-light ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </button>

  )
}

const Navbar = () => {

  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () =>{
    setIsOpen(!isOpen);
  }
  return (
<header
      className="w-full px-32 py-8 font-medium flex items-center justify-between relative z-10 dark:text-light"
      >

        <button className='flex-col items-center justify-center hidden lg:flex' onClick={handleClick}>
          <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
          <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 
          ${isOpen ? 'opacity-0' : 'opacity-100' }`}></span>
          <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>
            
        <div className='w-full flex justify-between items-center lg:hidden'>
          <nav>
            <CustomLink href={'/'} title={'Home'} className={'mr-4'}/>
            <CustomLink href={'/about'} title={'About'} className={'mx-4'}/>
            {/* <CustomLink href={'/projects'} title={"Projects"} className={'mx-4'}/>
            <CustomLink href={'/articles'} title={"Articles"} className={'ml-4'}/> */}
          </nav>
       
          <nav className='flex items-center justify-center flex-wrap'>
            <MotionLink href={'https://www.linkedin.com/in/cyddharth/'} target='_blank' className = {'w-6 mr-3'} whileHover={{
              y: -2
            }}
            whileTap={{
              scale: 0.9
            }} className='w-6 mx-3'>
              <LinkedinIcon/>
            </MotionLink>
            <MotionLink href={'https://github.com/Cyddharth-Gupta'} target='_blank' className = {'w-6 mx-3'} whileHover={{
              y: -2
            }}
            whileTap={{
              scale: 0.9
            }}>
              <GithubIcon/>
            </MotionLink>
            <MotionLink href={'https://twitter.com/cyddharth_gupta'} target='_blank' className = {'w-6 ml-3'} whileHover={{
              y: -2
            }}
            whileTap={{
              scale: 0.9
            }}>
              <TwitterIcon/>
            </MotionLink>
            <button
            onClick={()=>{
              setMode(mode === "light" ? "dark" : "light")
            }}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
            {mode === "dark" ? 
            <SunIcon className={"fill-dark"}/>
            : <MoonIcon className={"fill-dark"}/>
          }
            </button>
            {/* <MotionLink href={'/'} target='_blank' whileHover={{
              y: -2
            }}
            whileTap={{
              scale: 0.9
            }} className='w-6 mx-3'>
            <PinterestIcon/>
            </MotionLink>
            <MotionLink href={'/'} target='_blank' whileHover={{
              y: -2
            }}
            whileTap={{
              scale: 0.9
            }} className='w-6 ml-3'>
            <DribbbleIcon/>
          </MotionLink> */}
          </nav>

        </div>
        {
          isOpen ? <motion.div 
          initial={{
            scale: 0, 
            opacity: 0,
            x : "-50%",
            y : "-50%",
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          className='min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 '>
          <nav className='flex items-center flex-col justify-center'>
            <CustomMobileLink href={'/'} title={'Home'} className={''} toggle={handleClick} />
            <CustomMobileLink href={'/about'} title={'About'} className={''} toggle={handleClick} />
            {/* <CustomLink href={'/projects'} title={"Projects"} className={'mx-4'}/>
            <CustomLink href={'/articles'} title={"Articles"} className={'ml-4'}/> */}
          </nav>
       
          <nav className='flex items-center justify-center flex-wrap mt-2'>
            <MotionLink href={'https://www.linkedin.com/in/cyddharth/'} target='_blank' className = {'w-6 mr-3 sm:mx-1'} whileHover={{
              y: -2
            }}
            whileTap={{
              scale: 0.9
            }}>
              <Image src="../public/Devfolio.png"  width={500}
      height={500}
      alt="Picture of the devfolio"/>
              <LinkedinIcon/>
            </MotionLink>
            <MotionLink href={'https://github.com/Cyddharth-Gupta'} target='_blank' className = {'w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1'} whileHover={{
              y: -2
            }}
            whileTap={{
              scale: 0.9
            }}>
              <GithubIcon/>
            </MotionLink>
            <MotionLink href={'https://twitter.com/cyddharth_gupta'} target='_blank' className = {'w-6 ml-3 sm:mx-1'} whileHover={{
              y: -2
            }}
            whileTap={{
              scale: 0.9
            }}>
              <TwitterIcon/>
            </MotionLink>
            <button
            onClick={()=>{
              setMode(mode === "light" ? "dark" : "light")
            }}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
            {mode === "dark" ? 
            <SunIcon className={"fill-dark"}/>
            : <MoonIcon className={"fill-dark"}/>
          }
            {/* <MotionLink href={'/'} target='_blank' whileHover={{
              y: -2
            }}
            whileTap={{
              scale: 0.9
            }} className='w-6 mx-3'>
            <PinterestIcon/>
            </MotionLink>
            <MotionLink href={'/'} target='_blank' whileHover={{
              y: -2
            }}
            whileTap={{
              scale: 0.9
            }} className='w-6 ml-3'>
            <DribbbleIcon/>
          </MotionLink> */}
          </button>
          </nav>

        </motion.div>

          : null
        }
          <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo />
        </div>

</header>
  )
}

export default Navbar