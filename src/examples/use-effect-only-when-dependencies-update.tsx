import React, { useEffect, useRef, useState } from 'react'
import Console from '../components/Console'
import useIsFirstRender from '../lib/hooks/useIsFirstRender'

const UseEffectOnlyWhenDependenciesUpdate: React.FC = () => {
  const isFirstRender = useIsFirstRender()
  const [name, setName] = useState('')

  useEffect(() => {
    if (!isFirstRender) {
      console.log(`Name has changed to "${name}"`)
    }
  }, [name])

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleChange}
        className="mb-2"
      />

      <Console />
    </>
  )
}

export default UseEffectOnlyWhenDependenciesUpdate
