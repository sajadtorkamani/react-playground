import React, { useEffect } from 'react'
import Console from '../components/Console'
import SourceCodeLink from '../components/SourceCodeLink'

const UseEffectEmptyDependencies: React.FC = () => {
  useEffect(() => {
    console.log('Inside useEffect')
  }, [])

  return (
    <>
      <Console />
      <SourceCodeLink />
    </>
  )
}

export default UseEffectEmptyDependencies
