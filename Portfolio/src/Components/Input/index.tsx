import { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'

type InputProps = ComponentProps<'input'> & {
  name: string
  label: string
}

const Input = ({ label, name, ...props }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="relative flex flex-1">
      <input
        {...props}
        {...register(name, { required: true })}
        placeholder=" "
        className={`flex-1 bg-transparent border border-white/50 py-3 px-4 focus:outline-none peer focus:border-white
            ${errors[name] && 'border-rose-500'}`}
      />
      <label
        htmlFor={props.id}
        className="absolute left-5 -translate-x-2 -translate-y-1/2 z-20 px-2 bg-[#111010] text-white/70 duration-150 
          pointer-events-none
          peer-focus:top-0
          peer-focus:-translate-y-1/2
          peer-focus:-translate-x-2
          peer-placeholder-shown:translate-x-0
          peer-placeholder-shown:translate-y-1/2"
      >
        {label}
      </label>
    </div>
  )
}

export default Input
