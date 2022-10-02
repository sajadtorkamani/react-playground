import React from 'react'

interface Props {
  children: React.ReactNode
}

const Card: React.FC<Props> = ({ children }) => (
  <div className="border p-4">{children}</div>
)

export default Card
