import React from 'react'
import { useLocation } from 'react-router-dom'

const Placeholder: React.FC = () => {
  const location = useLocation()

  return (
    <>
      <p className="text-gray-600 text-sm mb-2">Route: {location.pathname}</p>
      <p>Open your devtools...</p>
    </>
  )
}

export default Placeholder
