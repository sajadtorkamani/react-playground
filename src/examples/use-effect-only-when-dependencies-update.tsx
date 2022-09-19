import React, { useEffect, useState } from 'react'
import Console from '../components/Console'
import useIsFirstRender from '../lib/hooks/useIsFirstRender'
import SourceCodeLink from '../components/SourceCodeLink'

const UseEffectOnlyWhenDependenciesUpdate: React.FC = () => {
  const isFirstRender = useIsFirstRender()
  const [name, setName] = useState('')

  useEffect(() => {
    if (!isFirstRender) {
      console.log(`Name has changed to "${name}"`)
    }
  }, [isFirstRender, name])

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

      <SourceCodeLink />
    </>
  )
}

export default UseEffectOnlyWhenDependenciesUpdate
