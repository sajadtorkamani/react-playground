import React from 'react'
import sample from 'lodash/sample'
import Card from '../../../components/Card'
import { useAppSettings } from '../utils/useAppSettings'

const DateSettings: React.FC = () => {
  const { dateFormat } = useAppSettings()

  console.log('DateSettings: render')

  const randomColourClass = sample([
    'text-blue-600',
    'text-red-600',
    'text-orange-600',
    'text-green-600',
    'text-pink-600',
    'text-purple-600',
  ])

  return (
    <Card title="DateSettings">
      <div className={randomColourClass}>
        Date format: <span>{dateFormat}</span>
      </div>
    </Card>
  )
}

export default DateSettings
