import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type UIButtonProps = {
} &  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
export const UIButton = ({className, onClick, children, ...props} : UIButtonProps) => {
  return <button
    className={`
    flex justify-center items-center
    bg-purple90 px-8 py-4 rounded-[10px] ${className}
    `}
    onClick={onClick}
    {...props}>
    {children}
  </button>
}