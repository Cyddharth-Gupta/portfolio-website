import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>
                {
                    new Date().getFullYear()
                } &copy; All Rights Reserved.
            </span>
            <div className='flex items-center'>
                Built with<span className='text-primary text-2xl px-1'>&#9825;</span>
                <span>by <Link href={"https://www.siddharthgupta.com"} className='underline underline-offset-2' target='_blank'>Siddharth Gupta</Link></span>
            </div>
            <Link href={'https://www.siddharthgupta.com'} target='_blank' className='underline underline-offset-2'>
                Say Hello!
            </Link>
        </Layout>
    </footer>
  )
}

export default Footer