import React from 'react'
import { useAppSettings } from '../utils/useAppSettings'
import classNames from 'classnames'
import Button from '../../../components/Button'
import Card from '../../../components/Card'

const ThemeSettings: React.FC = () => {
  const { theme, toggleTheme } = useAppSettings()

  console.log('ThemeSettings: render')

  return (
    <Card>
      <div className="mb-2">
        Current theme:{' '}
        <span
          className={classNames(
            theme === 'light' ? 'text-gray-500' : 'text-black'
          )}
        >
          {theme}
        </span>
      </div>

      <Button onClick={toggleTheme}>Toggle theme</Button>
    </Card>
  )
}

export default ThemeSettings
