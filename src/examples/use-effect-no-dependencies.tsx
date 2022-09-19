import React, { useEffect } from 'react'
import Console from '../components/Console'
import SourceCodeLink from '../components/SourceCodeLink'

const UseEffectNoDependencies: React.FC = () => {
  useEffect(() => {
    console.log('Inside useEffect')
  })

  return (
    <>
      <Console />
      <SourceCodeLink />
    </>
  )
}

export default UseEffectNoDependencies
