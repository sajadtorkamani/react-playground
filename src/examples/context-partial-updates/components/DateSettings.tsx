import React from 'react'
import Card from '../../../components/Card'
import { useAppSettings } from '../utils/useAppSettings'

const DateSettings: React.FC = () => {
  const { dateFormat } = useAppSettings()

  console.log('DateSettings: render')

  return (
    <Card title="DateSettings">
      Date format: <span>{dateFormat}</span>
    </Card>
  )
}

export default DateSettings
