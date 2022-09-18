import React from 'react'
import { useLocation } from 'react-router-dom'

const Placeholder: React.FC = () => {
  const location = useLocation()

  return <>{location.pathname}</>
}

export default Placeholder
