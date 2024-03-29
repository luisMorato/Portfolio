import { useMemo } from "react";

import Layout from "../Components/Layout";
import ProjectsCard from "../Components/ProjectsCard";

type ProjectsProps = {
  name: string,
  desc: string,
  imgSrc: string,
  codeLink: string,
  demoLink: string
}[];

const Projects = () => {
  const projects: ProjectsProps = useMemo(() => [
    {
      name: "Clothing Ecommerce",
      desc: "This project aims to build a clothing E-commerce, with a Login and Registration system using next-auth. To build the design and features of the project, the following were used: HTML, CSS, JavaScript, React.js, Next.js, TypeScript and TailwindCSS. Furthermore, the project has a simple database, generated through prism and using MongoDb.",
      imgSrc: "/Images/Ecommerce Design - HomePage.png",
      codeLink: "https://github.com/luisMorato/ClothingEcommerce",
      demoLink: "https://clothing-ecommerce-five.vercel.app"
    },
    {
      name: "Gym Site",
      desc: "The project aims to build a gym website from scratch, with a basic registration system, login and some other features. In this project, tools such as: HTML, CSS, JavaScript, React.js, Next.js, TypeScript and TailwindCSS were used. Furthermore, to generate the schema for the database, Prism was used.",
      imgSrc: "/Images/Site - Home Page - Prototype.png",
      codeLink: "https://github.com/luisMorato/Gym-Site-Nextjs",
      demoLink: "https://gym-site-nextjs.vercel.app"
    },
    {
      name: "React - To Do Project",
      desc: "Simple project using tools such as: HTML, CSS, JavaScript, TypeScript, React.js, and TailwindCSS. The application consists of a system for creating and managing a task list. In this project, no database was used, all data is saved in LocalStorage. Furthermore, this project was built to improve my skills in pure React.js and also train the use of custom hooks and context.",
      imgSrc: "/Images/React To Do Project.png",
      codeLink: "https://github.com/luisMorato/React-ToDo-Project",
      demoLink: "https://main--graceful-madeleine-22d650.netlify.app"
    },
    {
      name: "React Box Shadow Generator",
      desc: "Este projeto é uma aplicação web simples desenvolvida com HTML, CSS, JavaScript e React.js, com ênfase na utilização de TailwindCSS para estilização. O principal objetivo deste projeto é criar uma ferramenta interativa para gerar e experimentar diferentes estilos de sombras de caixa (box shadows) em elementos HTML. O Box Shadow Generator permite aos usuários ajustar facilmente os parâmetros de sombra, como deslocamento, desfoque, propriedades de cor e opacidade, para criar e visualizar sombras personalizadas em tempo real.",
      imgSrc: "/Images/Box Shadow Generator.png",
      codeLink: "https://github.com/luisMorato/React--Box-Shadow-Generator",
      demoLink: "https://react-box-shadow-generator.vercel.app"
    }
  ], []);

  return (
    <Layout>
      <div className="w-4/5 mx-auto
      md:w-3/4">
        <h1
          className="relative text-5xl tracking-[2px] font-medium inline-block text-white mt-12 mb-6
          after:absolute
          after:content-['']
          after:h-[2px]
          after:w-full
          after:bg-[#7000FF]
          after:top-full
          after:left-0
          after:mt-2
          ">Projects</h1>
          <div>
            {projects.map((project, index) => (
              <ProjectsCard
                key={index}
                name={project.name}
                desc={project.desc}
                imgSrc={project.imgSrc}
                codeLink={project.codeLink}
                demoLink={project.demoLink}
              />
            ))}
          </div>
      </div>
    </Layout>
  )
}

export default Projects