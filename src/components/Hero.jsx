import React from 'react'
import { styles } from '../styles.js'
import ComputerCanvas  from './canvas/Computers.jsx'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] 
      max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I&apos;m 
          <span className='text-[#915eff]'>Dalia</span></h1>
          <p className={`${styles.heroSubText}`}>I create web and mobile applications that are
            <br className='sm:block hidden'/>user-friendly and functional, using the latest technologies and frameworks.</p>
        </div>
      </div>
      <ComputerCanvas/>
      <div className='absolute  bottom-[-1.5rem] w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
            animate={{
              y:[0,24,0]
            }}
            transition={{
              duration: 1.5,
              repeat:Infinity,
              repeatType:'loop'
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
            >
              
            </motion.dev>
          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero