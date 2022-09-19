import React, { useEffect, useState } from 'react'
import Console from '../components/Console'
import SourceCodeLink from '../components/SourceCodeLink'

const UseEffectWithDependencies: React.FC = () => {
  const [name, setName] = useState('')

  useEffect(() => {
    console.log(`Name has changed to "${name}"`)
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
      <SourceCodeLink />
    </>
  )
}

export default UseEffectWithDependencies
