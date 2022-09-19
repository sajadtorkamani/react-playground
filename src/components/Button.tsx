import React from 'react'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const Button: React.FC<Props> = (props) => (
  <button {...props} className="bg-blue-600 text-white py-1 px-2 text-[12px]" />
)

export default Button
