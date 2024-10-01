import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { MailUseCases } from '../useCases/MailUseCases.js'

const { createMail } = new MailUseCases()

export const mailRoutes = async (app: FastifyInstance) => {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/',
    {
      schema: {
        body: z.object({
          name: z.string(),
          email: z.string(),
          message: z.string(),
        }),
        response: {
          200: z.object({
            id: z.string().nullish(),
            message: z.string(),
          }),
        },
      },
    },
    async (req, reply) => {
      const { name, email, message } = req.body

      const { id } = await createMail({ name, email, message })

      if (id) {
        return reply.send({ id, message: 'Email Sent Successfully' })
      }
    },
  )
}
