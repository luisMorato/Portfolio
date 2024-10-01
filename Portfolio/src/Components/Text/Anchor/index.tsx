import { Link, LinkProps } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const Anchor = ({ className, ...props }: LinkProps) => {
  return (
    <Link
      className={twMerge(
        'flex items-center gap-3 cursor-pointer font-medium hover:text-mainViolet',
        className,
      )}
      {...props}
    />
  )
}

export default Anchor
