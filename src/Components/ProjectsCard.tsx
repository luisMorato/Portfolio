import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type ProjectsCardProps = {
    name: string,
    desc: string,
    imgSrc: string,
    codeLink: string,
    demoLink: string
}

const ProjectsCard = ({ name, desc, imgSrc, codeLink, demoLink }: ProjectsCardProps) => {
  return (
    <div 
      className="flex flex-col items-center gap-y-10 w-full border-b border-b-white/30 py-6
      min-[900px]:gap-y-10
      min-[900px]:items-start
      min-[900px]:gap-x-14
      min-[900px]:py-12
      min-[900px]:flex-row
      2xl:justify-center"
    >
        <div className="flex w-full justify-center items-center overflow-hidden min-w-[300px] max-w-[400px] max-h-[500px]">
          <Link to={demoLink} rel="external" target="_blank">
            <img
              src={imgSrc}
              alt={`${name}-image`}
              className="hover:scale-[1.02] transition duration-150"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between text-white pb-5
        lg:items-start">
          <div 
            className="w-full
            sm:w-4/5
            md:w-3/5
            min-[900px]:w-full
            2xl:md:w-3/5"
          >
            <h2 
              className="text-xl font-medium mb-7 inline-block
              md:text-3xl"
            >{name}</h2>
            <p
              className=" text-base mb-8
              lg:text-lg"
            >{desc}</p>
          </div>
          <div className="flex items-center gap-x-12
          md:gap-x-6
          lg:gap-x-12">
              <Link to={codeLink} rel="external" target="_blank">
                <button
                  className="flex items-center gap-x-3 text-lg font-medium hover:text-[#7000FF]
                  md:text-xl"
                >
                  Code
                  <span className="text-black">
                    <FaGithub size={35} />
                  </span>
                </button>
              </Link>
              <Link to={demoLink} rel="external" target="_blank">
                <button
                  className="flex items-center gap-x-3 text-lg text-nowrap font-medium hover:text-[#7000FF]
                  md:text-xl"
                >
                  Live Demo
                  <span>
                    <FiExternalLink size={30} />
                  </span>
                </button>
              </Link>
          </div>
        </div>
    </div>
  )
}

export default ProjectsCard