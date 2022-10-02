import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import Card from './Card'

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

  function renderLog() {
    if (log.length === 0) {
      return (
        <div className="italic text-gray-400 text-xs">
          {'<'}Empty{'>'}
        </div>
      )
    }

    return (
      <ul className="text-[12px]">
        {log.map((message, index) => (
          <div
            key={index}
            className={classNames('py-[2px]', {
              'border-b': index < log.length - 1,
            })}
          >
            {message}
          </div>
        ))}
      </ul>
    )
  }

  return (
    <Card title="Console" actions={[{ label: 'Clear', action: clearLog }]}>
      {renderLog()}
    </Card>
  )
}

export default Console
