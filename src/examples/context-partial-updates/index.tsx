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
        Updating `theme` from the `AppSettings` context triggers a re-render of
        every consumer of the `AppSettings` context, even for consumers that
        don't use `theme`.
      </p>

      <p>
        So, in this case, updating `theme` from inside `ThemeSettings` also
        triggers a re-render of `DateSettings` - something you don't usually
        want.
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
