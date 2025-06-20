'use client'

import { usePathname } from 'next/navigation'
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
} from 'react'

const PreviousPathContext = createContext<string | undefined>(undefined)

export const PreviousPathContextProvider = ({
  children,
}: PropsWithChildren) => {
  const pathname = usePathname()

  const previousPath = useRef<string>('')

  useEffect(() => {
    previousPath.current = pathname
  }, [pathname])

  return (
    <PreviousPathContext.Provider value={previousPath.current}>
      {children}
    </PreviousPathContext.Provider>
  )
}

export const usePreviousPath = () => {
  const context = useContext(PreviousPathContext)

  if (context === undefined)
    throw new Error(
      'usePreviousPath must be used within a PreviousPathContextProvider',
    )

  return context
}
