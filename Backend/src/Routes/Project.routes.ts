import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import data from '../data.json' assert { type: 'json' }

const projectSchema = z.object({
  name: z.string(),
  desc: z.string(),
  imgSrc: z.string(),
  codeLink: z.string(),
  demoLink: z.string(),
})

const projectsSchema = z.object({
  projects: projectSchema.array(),
})

export const projectsRoutes = async (app: FastifyInstance) => {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/',
    {
      schema: {
        response: {
          200: projectsSchema,
        },
      },
    },
    async (_, reply) => {
      const { projects } = projectsSchema.parse(data)

      return reply.send({ projects })
    },
  )
}
