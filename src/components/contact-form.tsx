'use client'

import { z } from 'zod'
import Link from 'next/link'
import { toast } from 'sonner'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
//schema validation for zod
import { ContactFormSchema } from '@/lib/schemas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
//import {sendEmail} from '@/lib/actions'

type Inputs = z.infer<typeof ContactFormSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })
  const processForm: SubmitHandler<Inputs> = async (data) => {
    toast.success('Message send successfully!')
    reset()
  }

  return (
    // rendering and hooking up inputs
    <section className='relative isolate'>
      {/*background pattern*/}
      <svg
        className='absolute inset-0 -z-10 h-full w-full stroke-zinc-200'
        aria-hidden='true'
      ></svg>
      {/*form*/}
      <div className='relative'>
        <form
          onSubmit={handleSubmit(processForm)}
          className='mt-16 lg:flex-auto'
          noValidate
        >
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            {/*Name*/}
            <div>
              <Input
                id='name'
                type='text'
                placeholder='Name'
                autoComplete='give-name'
                {...register('name')}
              />

              {errors.name?.message && (
                <p className='ml-1 mt-2 text-sm text-rose-400'>
                  {errors.name.message}
                </p>
              )}
            </div>
            {/*Email */}
            <div>
              <Input
                type='email'
                id='email'
                autoComplete='email'
                placeholder='Email'
                {...register('email')}
              />

              {errors.email?.message && (
                <p className='ml-1 mt-2 text-sm text-rose-400'>
                  {errors.email.message}
                </p>
              )}
            </div>
            {/*Message */}
            <div>
              <Textarea
                rows={4}
                placeholder='Message'
                {...register('message')}
              />
              {errors.message?.message && (
                <p className='ml-1 mt-2 text-sm text-rose-400'>
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>
          <div className='mt-6'>
            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full disabled:opacity-50'
            >
              {isSubmitting ? 'Submitting...' : 'Contact Us'}
            </Button>
          </div>
          <p className='mt-4 text-xs text-muted-foreground'>
            By submitting this form, I agree to the{' '}
            <Link href='/privacy' className='font-bold'>
              privacy&nbsp;policy
            </Link>
          </p>
        </form>
      </div>
    </section>
  )
}
