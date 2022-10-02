import React from 'react'
import Card from '../../../components/Card'
import { useAppSettings } from '../utils/useAppSettings'

const DateSettings: React.FC = () => {
  console.log('DateSettings: render')

  const { dateFormat } = useAppSettings()

  return (
    <Card>
      Date format: <span>{dateFormat}</span>
    </Card>
  )
}

export default DateSettings
