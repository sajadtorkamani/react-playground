import React from 'react'
import { useLocation } from 'react-router-dom'

const SourceCodeLink: React.FC = () => {
  const location = useLocation()
  const href = `https://github.com/sajadtorkamani/react-playground/blob/master/src/examples${location.pathname}.tsx`

  return (
    <a
      href={href}
      className="text-[12px] text-blue-800 underline mt-3 block"
      target="_blank"
      rel="noreferrer"
    >
      Source code
    </a>
  )
}

export default SourceCodeLink
