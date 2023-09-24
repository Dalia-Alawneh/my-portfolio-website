import React from 'react'
import { styles } from '../styles.js'
import ComputerCanvas from './canvas/Computers.jsx'
import { motion } from 'framer-motion';
import { daliaPic } from '../assets/index.js';
import { github } from '../assets/index.js';
import { linkedin } from '../assets/index.js';
const Hero = () => {
  return (
    <section className='flex w-full flex-col relative justify-center h-screen mx-auto'>
      <div className={`${styles.paddingX} flex md:flex-row flex-col-reverse items-center`}>
        <div className="max-w-7xl mx-auto flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>Hi, I&apos;m
              <span className='text-[#915eff]'> Dalia</span></h1>
            <p className={`${styles.heroSubText}`}>I create web and mobile applications that are
              <br className='sm:block hidden' />user-friendly and functional, using the latest technologies and frameworks.</p>
            <div className="contact-info my-8 flex gap-3 items-center">
            <a href=""><div className="violet-gradient w-16 h-16 rounded-full hover:bg-[#804dee] transition-colors flex justify-center items-center cursor-pointer"
            onClick={()=> window.open('https://github.com/Dalia-Alawneh', "_blank")}>
              <img loading="lazy"src={github} alt="github" className="w-2/3 h-2/3 object-contain"/>
            </div></a>
            <a href=""><div className="violet-gradient w-16 h-16 hover:bg-[#804dee] transition-colors rounded-full flex justify-center items-center cursor-pointer"
            onClick={()=> window.open('https://www.linkedin.com/in/dalia-alawneh', "_blank")}>
              <img loading="lazy"src={linkedin} alt="linked in" className="w-2/3 h-2/3 object-contain"/>
            </div></a>
           
            </div>
            <a href="" className='violet-gradient p-2 capitalize rounded px-4 hover:bg-[#804dee] transition-colors'>see my resume</a>
          </div>
        </div>
        <div className=''>
          <img src={daliaPic} className='w-full border-8 shadow rounded-full' alt="" />
        </div>
      </div>
      <div className='absolute bottom-0 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            >

            </motion.div>
          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero