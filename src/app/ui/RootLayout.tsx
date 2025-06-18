import '@/src/app/styles/globals.css'
import { PreviousPathContextProvider } from '@/src/shared/hooks/usePreviousPath'
import { PropsWithChildren } from 'react'

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <PreviousPathContextProvider>{children}</PreviousPathContextProvider>
      </body>
    </html>
  )
}
