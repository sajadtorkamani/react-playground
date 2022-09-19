import React, { useEffect, useState } from 'react'
import Console from '../components/Console'
import SourceCodeLink from '../components/SourceCodeLink'
import Button from '../components/Button'

const BatchedStateUpdatesAsynchronousNested: React.FC = () => {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    console.log('Render')
  })

  function handleClick() {
    // 1. These two are batched together
    setCount((c) => c + 1) // React doesn't re-render yet
    setFlag((f) => !f) // React doesn't re-render yet

    new Promise((resolve) => {
      setTimeout(() => {
        // 2. Because these two are inside the same callback, they'll be batched together
        setCount((c) => c + 1) // React doesn't re-render yet
        setFlag((f) => !f) // React doesn't re-render yet
        // The second state updates are batched & React re-renders
      }, 2000)
    })

    // The first states updates are batched & React re-renders
  }

  return (
    <>
      <p>
        Clicking on 'Increment' will trigger an event handler that updates
        multiple pieces of state both synchronously and asynchronously (inside a
        Promise callback).
      </p>

      <p>
        In these cases, React will batch the synchronous updates first and then
        batch the asynchronous updates when the callback is ready to be
        processed.
      </p>

      <Button onClick={handleClick}>Increment</Button>
      <h1 style={{ color: flag ? 'blue' : 'red' }} className="my-2 text-xl">
        {count}
      </h1>

      <Console />
      <SourceCodeLink />
    </>
  )
}

export default BatchedStateUpdatesAsynchronousNested
