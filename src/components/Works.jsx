import { github } from "../assets/index.js"
import SectionWrapper from "../hoc/SectionWrapper.jsx"
import { projects } from "../constants/index.js"
import { fadeIn, textVariant } from "../utils/motion.js"
import { motion } from "framer-motion"
import { styles } from "../styles.js"
import { Tilt } from "react-tilt"
import { useEffect, useState } from "react"
const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <div>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
        
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[260px]" >
          <img loading="lazy" src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-cenetr m-3 card-img_hover">
            {source_code_link && <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img loading="lazy" src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex gap-2 flex-wrap">
          {
            tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                {tag.name}
              </p>
            ))
          }
        </div>
      </Tilt>
    </div>
  )
}
const Works = () => {
  const [projectsType, setProjectsType] = useState(1)
  const [updatedProjects, setUpdatedProjects] = useState(projects)
  useEffect(() => {
    setUpdatedProjects(projects.filter((project) => project.projectType === projectsType))
  }, [projectsType])

  return (
    <>
      <motion.div variants={textVariant()} id='about'>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div>
        <motion.p variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="tabs mt-8 flex gap-3 flex-wrap">
        <button onClick={() => setProjectsType(1)}
          href=""
          className='violet-gradient p-2 capitalize rounded px-4 hover:bg-[#804dee] transition-colors'>
          HTML & CSS
        </button>
        <button onClick={() => setProjectsType(2)}
          href=""
          className='violet-gradient p-2 capitalize rounded px-4 hover:bg-[#804dee] transition-colors'>
          HTML, CSS & JS
        </button>
        <button onClick={() => setProjectsType(3)}
          href=""
          className='violet-gradient p-2 capitalize rounded px-4 hover:bg-[#804dee] transition-colors'>
          React JS
        </button>
        <button onClick={() => setProjectsType(4)}
          href=""
          className='violet-gradient p-2 capitalize rounded px-4 hover:bg-[#804dee] transition-colors'>
          Next JS
        </button>
        <button onClick={() => setProjectsType(5)}
          href=""
          className='violet-gradient p-2 capitalize rounded px-4 hover:bg-[#804dee] transition-colors'>
          Flutter
        </button>
      </div>
      <div className="mt-20 flex flex-wrap gap-7" >
        {
          updatedProjects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              {...project}
              index={index}
            />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")