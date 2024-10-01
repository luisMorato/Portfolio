import { useMemo } from 'react'

import { TbBrandNextjs } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io5'
import { FaCss3Alt, FaReact } from 'react-icons/fa6'
import { FaHtml5, FaArrowRight, FaNodeJs } from 'react-icons/fa'
import { BiLogoTypescript, BiLogoTailwindCss } from 'react-icons/bi'
import { SiRedux, SiPrisma, SiMysql, SiStorybook } from 'react-icons/si'

type hardSkillsProps = {
  id: number
  icon: React.ReactElement
  colorCode: string
}[]

const Skills = () => {
  const hardSkills: hardSkillsProps = useMemo(
    () => [
      {
        id: 1,
        icon: <FaHtml5 />,
        colorCode: '#FF5722',
      },
      {
        id: 2,
        icon: <FaCss3Alt />,
        colorCode: '#006BC0',
      },
      {
        id: 3,
        icon: <IoLogoJavascript />,
        colorCode: '#FFCA28',
      },
      {
        id: 4,
        icon: <BiLogoTypescript />,
        colorCode: '#3178C6',
      },
      {
        id: 5,
        icon: <FaReact />,
        colorCode: '#5ADAFD',
      },
      {
        id: 6,
        icon: <TbBrandNextjs />,
        colorCode: '#000000',
      },
      {
        id: 7,
        icon: <SiRedux />,
        colorCode: '#7A50BE',
      },
      {
        id: 8,
        icon: <BiLogoTailwindCss />,
        colorCode: '#06B6D4',
      },
      {
        id: 9,
        icon: <FaNodeJs />,
        colorCode: '#84C00B',
      },
      {
        id: 10,
        icon: <SiPrisma />,
        colorCode: '#143A51',
      },
      {
        id: 11,
        icon: <SiMysql />,
        colorCode: '#E47933',
      },
      {
        id: 12,
        icon: <SiStorybook />,
        colorCode: '#FF4D89',
      },
    ],
    [],
  )

  return (
    <div className="flex flex-col flex-1 items-start justify-evenly text-white tracking-[2px]">
      <div className="mb-10">
        <h3 className="text-2xl mb-3">Hard Skills</h3>
        <div
          className="flex gap-4 items-center flex-wrap
            2xl:flex-nowrap"
        >
          {hardSkills.map((skill) => (
            <div key={skill.id} className="rounded-full size-10">
              <span className="text-5xl" style={{ color: skill.colorCode }}>
                {skill.icon}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-10">
        <h3 className="text-2xl mb-3">Soft Skills</h3>
        <div>
          <p>Team Work | Organization | Punctual | Determined</p>
        </div>
      </div>
      <div>
        <h3 className="text-2xl mb-3">Languages</h3>
        <div>
          <ul className="flex flex-col gap-y-4 text-white list-disc">
            <li className="flex items-center gap-x-2">
              <span>English</span>
              <FaArrowRight />
              <span>Intermediate</span>
            </li>
            <li className="flex items-center gap-x-2">
              <span>Portuguese</span>
              <FaArrowRight />
              <span>Fluent</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
