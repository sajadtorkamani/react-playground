import React from 'react'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

interface Props {
  className?: string
  isIndex?: boolean
}

const REPO_URL = 'https://github.com/sajadtorkamani/react-playground'

const SourceCodeLink: React.FC<Props> = ({ className, isIndex = false }) => {
  const location = useLocation()

  const fileName = isIndex
    ? `${location.pathname}/index.tsx`
    : `${location.pathname}.tsx`

  const href = `${REPO_URL}/blob/master/src/examples/${fileName}`

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
