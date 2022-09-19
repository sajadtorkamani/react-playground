import React, { useEffect, useState } from 'react'
import Console from '../components/Console'
import SourceCodeLink from '../components/SourceCodeLink'
import Button from '../components/Button'

const BatchedStateUpdatesSynchronous: React.FC = () => {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    console.log('Render')
  })

  function handleClick() {
    setCount((c) => c + 1) // React doesn't re-render yet
    setFlag((f) => !f) // React doesn't re-render yet
    // React will wait until the end of this event handler and then re-render
    // This is batching.
  }

  return (
    <>
      <Button onClick={handleClick}>Increment</Button>
      <h1 style={{ color: flag ? 'blue' : 'red' }} className="my-2 text-xl">
        {count}
      </h1>

      <Console />
      <SourceCodeLink />
    </>
  )
}

export default BatchedStateUpdatesSynchronous
