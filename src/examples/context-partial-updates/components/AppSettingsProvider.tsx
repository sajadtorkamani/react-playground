// 1. Create interface for context
import React, { createContext, useState } from 'react'

// Define interface to represent your ontext
interface AppSettings {
  theme: 'light' | 'dark'
  dateFormat: string
  toggleTheme: () => void
}

// 2. Create context with default null value
export const AppSettingsContext = createContext<AppSettings | null>(null)

// 3. Create provider
export const AppSettingsProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [theme, setTheme] = useState<AppSettings['theme']>('light')
  const [dateFormat] = useState<AppSettings['dateFormat']>('dd/mm/yyyy')

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const initialContext: AppSettings = {
    theme,
    dateFormat,
    toggleTheme,
  }

  return (
    <AppSettingsContext.Provider value={initialContext}>
      {children}
    </AppSettingsContext.Provider>
  )
}
