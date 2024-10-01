import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { IoIosSend } from 'react-icons/io'
import { FaPhone } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import Input from '@Components/Input'
import Button from '@Components/Button'
import { api } from 'src/lib/axios'
import { toast } from 'react-toastify'

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
})

type formProps = z.infer<typeof formSchema>

const ContactForm = () => {
  const methods = useForm<formProps>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = methods

  const submitForm: SubmitHandler<formProps> = async (data: formProps) => {
    const response = await api.post(
      '/mail',
      data,
    )

    const { message } = response.data

    if(response.status !== 200) {
      toast.error(message)
    }

    toast.success(message)
  }

  return (
    <div
      className="-translate-y-3 w-full
            md:w-2/3
            xl:w-3/5
            xl:mr-8
            xl:max-2xl:-translate-x-16"
    >
      <h2 className="text-2xl mb-6">Get In Touch</h2>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col gap-y-5 items-end"
        >
          <div className="flex max-lg:flex-col gap-5 w-full">
            <Input
              label="Name"
              name="name"
              id="name"
              type="text"
              disabled={isSubmitting}
            />
            <Input
              label="Email"
              name="email"
              id="email"
              type="email"
              disabled={isSubmitting}
            />
          </div>
          <textarea
            id="message"
            placeholder="Message"
            className={`w-full bg-transparent border border-white/50 py-2 px-5 placeholder:text-white/70 focus:outline-none focus:border-white min-h-[150px] max-h-[150px]
            ${errors.message && 'border-rose-500'}`}
            disabled={isSubmitting}
            {...register('message')}
          />
          <Button type="submit" disabled={isSubmitting}>
            <span>Send</span>
            <IoIosSend
              size={20}
              className="pointer-events-none flex-shrink-0"
            />
          </Button>
        </form>
      </FormProvider>
      <div className="flex flex-col gap-y-5 mt-8">
        <span className="flex items-center gap-x-3">
          <FaPhone size={15} className="rotate-90" />
          <p>Phone: +55 (15) 9 8181-8866</p>
        </span>
        <span className="flex items-center gap-x-3">
          <IoLocationSharp size={20} />
          <p>Location: Brazil, Sorocaba - SP</p>
        </span>
      </div>
    </div>
  )
}

export default ContactForm
