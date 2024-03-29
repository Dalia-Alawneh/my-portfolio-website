import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles.js'
import { services } from '../constants/index.js'
import { fadeIn, textVariant } from '../utils/motion.js'
import SectionWrapper from '../hoc/SectionWrapper.jsx'
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full transition-scale duration-100'>
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div

          className='bg-tertiary rounded-[20px] 
          py-5 px-12 min-h-[280px] flex justify-evenly
          items-center flex-col'>
          <img loading="lazy"src={icon} alt={title}
            className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  console.log(services);
  return (
    <>
      <motion.div variants={textVariant()} id='about'>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        As a skilled software developer, I bring expertise in JavaScript and Dart, with a strong command of frameworks
        like React, Node.js, Next.js, and Flutter. I'm an adept learner who thrives on collaboration with clients, crafting efficient, scalable, and user-friendly solutions to real-world challenges.
        Let's join forces to turn your ideas into reality!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {
          // <p>hello</p>
          services.map((service, index) =>
            <ServiceCard key={index}
              index={index} {...service} />
          )
        }

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")