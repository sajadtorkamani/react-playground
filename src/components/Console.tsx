import React, { useEffect, useState } from 'react'
import classNames from 'classnames'

const Console: React.FC = () => {
  const [log, setLog] = useState<string[]>([])

  useEffect(() => {
    let logFn = console.log

    console.log = function (message: string) {
      setLog((prevLog) => prevLog.concat(message))
      logFn(message)
    }

    return () => {
      console.log = logFn
    }
  }, [])

  function clearLog() {
    setLog([])
  }

  return (
    <section className="block border py-2 px-3 text-sm mt-3 text-gray-600">
      <header className="flex justify-between items-center">
        <h2>Console</h2>
        <button className="text-[12px] italic" onClick={clearLog}>
          Clear
        </button>
      </header>

      {log.length > 0 && (
        <ul className="text-[12px] mt-1">
          {log.map((message, index) => (
            <div
              key={index}
              className={classNames('py-[2px]', {
                ['border-b']: index < log.length - 1,
              })}
            >
              {message}
            </div>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Console
