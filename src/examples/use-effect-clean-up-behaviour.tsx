import React, { useEffect, useState } from 'react'
import Console from '../components/Console'
import Button from '../components/Button'

const UseEffectCleanUpBehaviour: React.FC = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Inside useEffect')

    return () => {
      console.log('Inside useEffect clean up')
    }
  }, [count])

  return (
    <>
      <p>Open DevTools to activate debugger breakpoints.</p>
      <Button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Trigger effect
      </Button>
      <Console />
    </>
  )
}

export default UseEffectCleanUpBehaviour
