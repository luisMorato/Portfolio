import { Link } from 'react-router-dom'

import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

import Anchor from '@Components/Text/Anchor'

// import { env } from 'src/Schemas/envSchema'
import { useContext } from 'react'
import { ProjectContext } from '../..'

const ProjectsCard = () => {
  const { project } = useContext(ProjectContext)
  const {
    name,
    desc,
    imgSrc,
    codeLink,
    demoLink,
  } = project
  return (
    <div
      // Fix the CSS
      className="flex flex-col gap-y-10 w-full border-b border-b-white/30 py-6
      md-lg:gap-14
      md-lg:py-12
      md-lg:flex-row
      2xl:justify-center"
    >
      <div className="flex w-full justify-center self-center overflow-hidden min-w-[300px] max-w-[400px]">
        <Link to={demoLink} rel="external" target="_blank">
          <img
            src={`${imgSrc}`}
            alt={`${name}-image`}
            className="hover:scale-[1.02] transition duration-150 object-cover"
          />
        </Link>
      </div>
      <div
        className="flex flex-col items-center justify-between flex-1 text-white pb-5
        lg:items-start"
      >
        <div
          className="w-full 
            max-[900px]:max-w-[400px]
            2xl:w-3/5"
        >
          <h2
            className="text-xl font-medium mb-7 inline-block
              md:text-3xl"
          >
            {name}
          </h2>
          <p
            className=" text-base mb-8
              lg:text-lg"
          >
            {desc}
          </p>
        </div>
        <div
          className="flex items-center gap-x-12
            md:max-lg:gap-x-6"
        >
          <Anchor
            to={codeLink}
            rel="external"
            target="_blank"
            className="md:text-xl text-nowrap"
          >
            Code
            <FaGithub size={35} />
          </Anchor>
          <Anchor
            to={demoLink}
            rel="external"
            target="_blank"
            className="md:text-xl text-nowrap"
          >
            Live Demo
            <span>
              <FiExternalLink size={30} />
            </span>
          </Anchor>
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard
