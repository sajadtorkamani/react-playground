import { useContext } from 'react'
import { AppSettingsContext } from '../components/AppSettingsProvider'

export function useAppSettings() {
  const context = useContext(AppSettingsContext)

  if (!context) {
    throw new Error(
      'useAppSettings must be used inside a <AppSettingsProvider />'
    )
  }

  return context
}
