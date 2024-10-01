import axios from 'axios'
import { env } from 'src/Schemas/envSchema'

export const api = axios.create({
  baseURL: env.VITE_BACKEND_URL,
})
