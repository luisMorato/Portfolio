import { FastifyInstance } from 'fastify'
import { ZodError } from 'zod'
import { BadRequest } from './_errors/BadRequest.js'

type fastifyErrorHandler = FastifyInstance['errorHandler']

export const errorHandler: fastifyErrorHandler = (error, _, reply) => {
  if (error instanceof ZodError) {
    return reply.code(400).send({
      message: `Error During Validation`,
      errors: error.flatten().fieldErrors,
    })
  }

  if (error instanceof BadRequest) {
    return reply.code(400).send({ message: error.message })
  }

  return reply.code(500).send({ message: error.message })
}
