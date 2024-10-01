import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type buttonprops = ComponentProps<'button'>

const Button = ({ className, ...props }: buttonprops) => {
  return (
    <button
      {...props}
      className={twMerge(
        'flex items-center gap-2 bg-mainViolet text-lg text-white font-medium py-3 px-4 rounded hover:brightness-90 hover:animate-none',
        className,
      )}
    />
  )
}

export default Button
