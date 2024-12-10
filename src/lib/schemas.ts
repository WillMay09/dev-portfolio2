import { z } from 'zod'

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    // min 1 means name is required
    .min(2, { message: 'Must be at least 2 characters.' }),
    // min letter count
  email: z
    .string()
    .min(1, { message: 'Name is required' })
    .email('Invalid email.'),
  message: z.string().min(1, { message: 'Name is required' })
})

export const NewsletterFormSchema = z.object({
  email: z.string().email('Invalid email.')
})
