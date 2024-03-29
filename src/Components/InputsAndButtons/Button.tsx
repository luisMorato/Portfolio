import { ReactElement } from "react";

type ButtonProps = {
  text: string,
  type: "submit" | "reset" | "button" | undefined,
  animation?: string,
  icon?: ReactElement,
  iconPosition?: string,
  action?: (() => void) | undefined
};

const Button = ({ 
  text,
  type,
  animation,
  icon,
  iconPosition,
  action
}: ButtonProps) => {
  return (
    <div className="relative w-fit">
      <button
          type={type}
          onClick={() => action && action()}
          className={`bg-[#7000FF] text-lg text-white font-medium py-3 px-4 rounded hover:brightness-90 
          ${animation && animation} hover:animate-none
          ${iconPosition === "right" ? "pr-10" : " pl-5"}`}
      >{text}</button>
      {icon && (
        <span
          className={`absolute top-1/2 -translate-y-1/2 text-xl pointer-events-none
          ${iconPosition === "right" ? "right-3" : " left-3"}`}
        >{icon}</span>)
      }
    </div>
  )
}

export default Button