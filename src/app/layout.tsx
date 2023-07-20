import StyledComponentsRegistry from '@/lib/registry'
import { Poppins } from 'next/font/google'

import '@/styles/globals.css'

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className} id="bodyMain">
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
