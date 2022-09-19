import React from 'react'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

interface Props {
  className?: string
}

const SourceCodeLink: React.FC<Props> = ({ className }) => {
  const location = useLocation()
  const href = `https://github.com/sajadtorkamani/react-playground/blob/master/src/examples${location.pathname}.tsx`

  return (
    <a
      href={href}
      className={classNames(
        'text-[12px] text-blue-800 underline mt-3 block',
        className
      )}
      target="_blank"
      rel="noreferrer"
    >
      Source code
    </a>
  )
}

export default SourceCodeLink
