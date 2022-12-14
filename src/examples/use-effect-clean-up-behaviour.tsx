import React, { useEffect, useState } from 'react'
import Console from '../components/Console'
import Button from '../components/Button'
import SourceCodeLink from '../components/SourceCodeLink'

const UseEffectCleanUpBehaviour: React.FC = () => {
  const [count, setCount] = useState(0)

  useEffect(
    function useEffect1() {
      console.log('Inside useEffect1')

      // React will wait until all clean up functions finish executing before
      // it processes the next set of effects.
      // So, in this case, it'll wait for the lengthy useEffect1CleanUp to run
      // to completion before it processes the useEffcet2CleanUp function.
      return function useEffect1CleanUp() {
        for (let i = 0; i < 4000000000; i++) {
          // Simulate expensive operation
        }
        console.log('Inside useEffect1CleanUp')
      }
    },
    [count]
  )

  useEffect(
    function useEffect() {
      console.log('Inside useEffect2')

      return function useEffect2CleanUp() {
        console.log('Inside useEffect2CleanUp')
      }
    },
    [count]
  )

  return (
    <>
      <p>
        Clicking 'Trigger effect' will intentionally execute a very long loop so
        this page might become unresponsive for a few seconds. Don't double
        click the button.
      </p>
      <Button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Trigger effect
      </Button>

      <Console />
      <SourceCodeLink />
    </>
  )
}

export default UseEffectCleanUpBehaviour
