import { PreviousPathContextProvider } from '@/sources/shared/contexts/usePreviousPath'
import '@/sources/shared/lib/styles/globals.css'
import { PropsWithChildren } from 'react'
import styles from './RootLayout.module.css'

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className={styles.html}>
      <body className={styles.body}>
        <PreviousPathContextProvider>{children}</PreviousPathContextProvider>
        {/* {children} */}
      </body>
    </html>
  )
}
