import { ChangeEvent } from "react";

type InputProps = {
    label: string,
    name: string,
    id: string,
    type: string,
    value: string,
    required: boolean,
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
    label,
    name,
    id,
    type,
    value,
    required,
    onInputChange
}: InputProps) => {
  return (
    <div className="relative w-full">
        <input 
            id={id}
            name={name}
            type={type}
            value={value}
            placeholder=" "
            required={required}
            autoComplete="off"
            onChange={(e) => onInputChange(e)}
            className="bg-transparent border border-white/50 py-3 px-4 focus:outline-none peer w-full"
        />
        <label 
          htmlFor={name}
          className="absolute -translate-y-1/2 translate-x-0 left-5 z-20 text-white/70 duration-150
          peer-focus:top-0
          peer-focus:-translate-y-1/2
          peer-focus:-translate-x-2
          peer-focus:bg-[#111010]
          peer-placeholder-shown:top-1/2
          peer-placeholder-shown:-translate-y-1/2"
        >{label}</label>
    </div>
  )
}

export default Input