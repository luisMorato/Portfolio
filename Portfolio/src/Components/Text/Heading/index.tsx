import { ComponentProps, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

type headingProps = {
  as: ElementType
} & ComponentProps<'h2'>

const Heading = ({
  as: Component = 'h2',
  className,
  ...props
}: headingProps) => {
  return (
    <Component
      className={twMerge(
        `relative text-4xl tracking-[2px] font-medium inline-block text-white
            after:absolute
            after:content-['']
            after:h-[2px]
            after:w-full
            after:bg-mainViolet
            after:top-full
            after:left-0
            after:mt-2
            sm:text-5xl`,
        className,
      )}
      {...props}
    />
  )
}

export default Heading
