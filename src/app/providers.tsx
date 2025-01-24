// app/providers.tsx
'use client'
import Aos from 'aos'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'
import { useEffect } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    Aos.init({
      duration:1000,
      once:true,
      offset:0
    });
    Aos.refresh();
  }, [])
  return (
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  )
}