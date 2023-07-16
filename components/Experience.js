import React, { useRef } from 'react'
import { motion, scroll, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 last:mb-0 first:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{
            y:0,
        }}
        transition={{
            duration:0.5, type: 'spring',
        }} > 
            <h3 className='capitalise font-bold text-2xl'>
                {position}&nbsp;<a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>@{company}</a>
            </h3>
            <span className='capitalise font-medium text-dark/75 dark:text-light/75'>
                {time} | {address}
            </span>
            <br/>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>

}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    })
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div style={{
                scaleY: scrollYProgress, 
            }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details position={'Software Engineering Intern'} company={'Nessviews'} companyLink={'https://www.nessviews.com'} address={'Chandigarh, India (Remote)'} time={"May, 2023 - Present"} work="Optimising the vendor panel and building new feature for it such as
'My Collaborations' which boosted the business by 10X "/>
                <Details position={'Full Stack Web Developer'} company={'Explornovate Private Limited'} companyLink={'https://www.explornovate.com'} address={'Delhi, India (Remote)'} time={"September, 2022 - April, 2023"} work={""}/>
                <Details position={'Full Stack Web Developer'} company={'V.K. Gupta Cost Accountants'} companyLink={'/'} address={'Delhi, India (Remote)'} time={"August, 2022 - September, 2022"}/>
            </ul>
        </div>
    </div>
  )
}

export default Experience