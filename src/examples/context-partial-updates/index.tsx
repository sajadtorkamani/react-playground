import React from 'react'
import Console from '../../components/Console'
import SourceCodeLink from '../../components/SourceCodeLink'
import { AppSettingsProvider } from './components/AppSettingsProvider'
import DateSettings from './components/DateSettings'
import ThemeSettings from './components/ThemeSettings'

const ContextPartialUpdates: React.FC = () => {
  return (
    <AppSettingsProvider>
      <div className="mb-3">
        <ThemeSettings />
      </div>

      <DateSettings />

      <Console />
      <SourceCodeLink />
    </AppSettingsProvider>
  )
}

export default ContextPartialUpdates
