'use client'

import { ReactNode } from 'react'
import { ThemeProvider, useTheme } from 'next-themes'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    // global theme
    <ThemeProvider
      enableSystem
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
