import { createContext, useEffect, useState } from 'react'
import { api } from 'src/lib/axios'

import Heading from '@Components/Text/Heading'
import ProjectsCard from './Components/ProjetctCard'

import { ProjectProps } from 'src/@types/projects'

export const ProjectContext = createContext({
  project: {} as ProjectProps
})

const Projects = () => {
  const [projects, setProjects] = useState<ProjectProps[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/projects')

        if(response.status === 200){
          const { projects } = await response.data
          setProjects(projects)
        }
      } catch (error) {
        console.error('error: ', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div
      className="w-4/5 mx-auto
      lg:w-3/4"
    >
      <Heading as={'h1'} className="mt-12 mb-6">
        Projects
      </Heading>
      <div>
          {projects?.map((project, index) => (
            <ProjectContext.Provider 
              value={{ project }}
              key={index}
            >
              <ProjectsCard key={project.id} />
            </ProjectContext.Provider>
          ))}
      </div>
    </div>
  )
}

export default Projects
