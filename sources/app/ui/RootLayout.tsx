import { PreviousPathContextProvider } from '@/sources/shared/contexts/usePreviousPath'
import '@/sources/shared/lib/styles/globals.css'
import { PropsWithChildren } from 'react'

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html
      lang="en"
      className="min-w-full min-h-full text-gray-800 bg-[#fef7db] bg-[url('/assets/images/bg.jpg')] bg-center bg-cover bg-no-repeat bg-fixed"
    >
      <body>
        <PreviousPathContextProvider>{children}</PreviousPathContextProvider>
      </body>
    </html>
  )
}
