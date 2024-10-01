import { ComponentProps } from 'react'

type boxProps = ComponentProps<'section'>

const Box = ({ ...props }: boxProps) => {
  return (
    <section
      {...props}
      className={
        'relative text-white w-4/5 mx-auto border-b border-b-white/30 pb-8 mt-12'
      }
    />
  )
}

export default Box
