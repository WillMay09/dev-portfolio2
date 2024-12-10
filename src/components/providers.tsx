'use client'

import { ReactNode } from 'react'
import { ThemeProvider, useTheme } from 'next-themes'
import { Toaster } from '@/components/ui/sonner'

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
      <ToasterProvider />
    </ThemeProvider>
  )
}

function ToasterProvider() {
  const { resolvedTheme } = useTheme()

  return (
    //use this to pass in a theme
    <Toaster
      closeButton
      position='top-right'
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
    />
  )
}
