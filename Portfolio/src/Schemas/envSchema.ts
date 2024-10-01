import { z } from 'zod'

const envSchema = z.object({
  VITE_BACKEND_URL: z.string().url(),
  VITE_PHONE_NUMBER: z.string()
})

export const env = envSchema.parse(import.meta.env)
