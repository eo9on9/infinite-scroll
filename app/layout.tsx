import { PreviousPathContextProvider } from '@/src/hooks/usePreviousPath'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <PreviousPathContextProvider>{children}</PreviousPathContextProvider>
      </body>
    </html>
  )
}
