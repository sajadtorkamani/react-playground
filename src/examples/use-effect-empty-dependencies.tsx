import React, { useEffect } from 'react'
import Placeholder from '../components/Placeholder'
import { logMessage } from '../lib/utils'

const UseEffectEmptyDependencies: React.FC = () => {
  useEffect(() => {
    logMessage()
  }, [])

  return <Placeholder />
}

export default UseEffectEmptyDependencies
