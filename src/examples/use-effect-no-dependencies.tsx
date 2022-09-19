import React, { useEffect } from 'react'
import Console from '../components/Console'

const UseEffectNoDependencies: React.FC = () => {
  useEffect(() => {
    console.log('Inside useEffect')
  })

  return <Console />
}

export default UseEffectNoDependencies
