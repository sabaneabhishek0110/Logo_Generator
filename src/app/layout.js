// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'
import { ReduxProvider } from '../components/Providers/ReduxProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Logo Generator',
  description: 'Create custom logos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}