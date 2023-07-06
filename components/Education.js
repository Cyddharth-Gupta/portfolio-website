import React, { useRef } from 'react'
import { motion, scroll, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, time, place, info }) => {
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
                {type}
            </h3>
            <span className='capitalise font-medium text-dark/75'>
                {time} | {place}
            </span>
            <p className='font-medium w-full'>
                {info}
            </p>
        </motion.div>
    </li>

}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    })
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Education
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div style={{
                scaleY: scrollYProgress, 
            }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details type={'Bachelor Of Technology In Industrial Internet of Things (Regular)'} time={"2021-2025 (expected)"} place={'Guru Gobind Singh Indraprastha University, Delh (GGSIPU)'} info={"CGPA: 9.1 (upto 3rd sem)"}/>
                <Details type={'Bachelor Of Science In Data Science (Online)'} time={"2021-2025"} place={'Indian Institute of Technology, Madras (IIT, Madras)'} info={""}/>
                <Details type={'Higher Senior Secondary (12th)'} time={"Graduated with PCM and Biology in 2021"} place={'Gitarattan Jindal Public School, Delhi, India'} info={"Passing Percentage: 90% "}/>
               
            </ul>
        </div>
    </div>
  )
}

export default Education