import { useMemo } from "react";

import { FaHtml5, FaArrowRight } from "react-icons/fa";
import { FaCss3Alt, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";


type hardSkillsProps = {
    id: number,
    icon: React.ReactElement,
    colorCode: string
}[];

const Skills = () => {
    const hardSkills: hardSkillsProps = useMemo(() => [
        {
            id: 1,
            icon: <FaHtml5 />,
            colorCode: "#FF5722"
        },
        {
            id: 2,
            icon: <FaCss3Alt />,
            colorCode: "#006BC0"
        },
        {
            id: 3,
            icon: <IoLogoJavascript />,
            colorCode: "#FFCA28"
        },
        {
            id: 4,
            icon: <BiLogoTypescript />,
            colorCode: "#3178C6"
        },
        {
            id: 5,
            icon: <FaReact />,
            colorCode: "#5ADAFD"
        },
        {
            id: 6,
            icon: <TbBrandNextjs />,
            colorCode: "#000000"
        },
        {
            id: 7,
            icon: <BiLogoTailwindCss />,
            colorCode: "#06B6D4"
        }
    ], []);

  return (
    <div 
        className="flex flex-col justify-evenly text-white tracking-[2px] w-full h-full
        md:max-w-[50%]
        lg:max-w-[30%]
        xl:max-w-[50%]"
    >
        <div className="mb-10">
            <h3 className="text-2xl mb-3">Hard Skills</h3>
            <div className="flex gap-4 items-center flex-wrap
            md:flex-nowrap
            md:gap-x-4">
                {hardSkills.map((skill) => (
                    <div key={skill.id} className="rounded-full max-w-[40px] max-h-[40px]">
                        <span className="text-5xl" style={{color: skill.colorCode}}>{skill.icon}</span>
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
                    <li className="flex items-center gap-x-2">English <span><FaArrowRight /></span> Intermediate</li>
                    <li className="flex items-center gap-x-2">Portuguese <span><FaArrowRight /></span> Fluent</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Skills