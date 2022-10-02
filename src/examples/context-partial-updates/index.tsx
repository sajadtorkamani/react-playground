import React from 'react'
import Console from '../../components/Console'
import SourceCodeLink from '../../components/SourceCodeLink'
import { AppSettingsProvider } from './components/AppSettingsProvider'
import DateSettings from './components/DateSettings'
import ThemeSettings from './components/ThemeSettings'

const ContextPartialUpdates: React.FC = () => {
  return (
    <AppSettingsProvider>
      <p>
        Updating the `theme` from the context triggers a re-render of the
        `DateSettings` component too even though `DateSettings` doesn't use
        `theme`.
      </p>

      <div className="mb-3">
        <ThemeSettings />
      </div>

      <DateSettings />

      <Console />
      <SourceCodeLink isIndex />
    </AppSettingsProvider>
  )
}

export default ContextPartialUpdates
