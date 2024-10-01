import { z } from 'zod'

const envSchema = z.object({
  FRONTEND_URL: z.string().url(),
  RESEND_API_SECRET_KEY: z.string(),
})

if (!process.env) {
  throw new Error('Missign enviornments variables')
}

export const env = envSchema.parse(process.env)