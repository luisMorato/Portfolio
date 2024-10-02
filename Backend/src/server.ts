import path from 'node:path'
import fastify, { FastifyInstance } from 'fastify'
import fastifyCors from '@fastify/cors'
import { fastifyStatic } from '@fastify/static'
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'

import { env } from './Schemas/env.js'
import { errorHandler } from './errorHandler.js'

// Routes
import { mailRoutes } from './Routes/Mail.routes.js'
import { projectsRoutes } from './Routes/Project.routes.js'

const app: FastifyInstance = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifyStatic, {
  root: path.join(path.join(import.meta.dirname, '../', 'public')),
  prefix: '/public/',
})

app.register(fastifyCors, {
  origin: ['*', env.FRONTEND_URL],
})

app.register(mailRoutes, {
  prefix: '/mail',
})

app.register(projectsRoutes, {
  prefix: '/projects',
})

app.setErrorHandler(errorHandler)

const port = 8080

try {
  app.listen({ port }, () => console.log(`Server Running at Port: ${port}`))
} catch (error) {
  console.log(`Error Starting the Server: ${error}`)
  process.exit(1)
}
