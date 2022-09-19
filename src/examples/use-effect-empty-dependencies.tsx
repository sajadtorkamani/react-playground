import React, { useEffect } from 'react'
import Console from '../components/Console'

const UseEffectEmptyDependencies: React.FC = () => {
  useEffect(() => {
    console.log('Inside useEffect')
  }, [])

  return <Console />
}

export default UseEffectEmptyDependencies
