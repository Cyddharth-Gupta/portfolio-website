import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../public/profile/programmer-transformed.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
          <title>Siddharth's Portfolio</title>
          <meta name='description' content='any desc'/>
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={profilePic} alt="Siddharth's profile pic" className='ml-16' priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText className='!text-6xl !text-left' text="Turning Vision Into Reality With Code And Design."/>
              <p className='my-4 text-base font-medium'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
Explore my website and projects, showcasing my expertise in React.js and web development.</p>
            <div className='flex item-center self-start mt-0'>
              <Link href="Siddharth Gupta.pdf" download={true} target='_blank' 
              className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'
            > 
                Resume <LinkArrow className={'w-6 ml-1'}/>
              </Link>
              <Link href={"mailto:cyddharthgupta@gmail.com"} target='_blank'
              className='p-2.5 ml-4 text-lg font-medium capitalize text-dark underline'>
                Contact Me
              </Link>
            </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
      </main>
    </>
  )
}
